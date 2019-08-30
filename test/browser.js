describe('Browser', function() {
    const path = require('path');
    const child_process = require('child_process');
    const assert = require('chai').assert;
    const puppeteer = require('puppeteer');
    const httpServer = require('http-server');

    const port = 19273;
    const server = httpServer.createServer({
        root: path.resolve(__dirname, '..')
    });

    let browser;

    before(function(done) {
        this.timeout(60000);
        (async function() {
            browser = await puppeteer.launch();
            server.listen(port);
            rmDist();
            done();
        })();
    });

    after(function(done) {
        (async function() {
            await browser.close();
            server.close();
            rmDist();
            done();
        })();
    });

    it('should run tests in browser using vanilla javascript', async function() {
        this.timeout(60000);
        return await runInBrowser('vanilla');
    });

    it('should run tests in browser using webpack', async function() {
        this.timeout(120000);

        const options = {
            cwd: path.resolve(__dirname, 'webpack'),
            stdio: 'inherit'
        };

        let result = child_process.spawnSync('npm', ['i'], options);
        assert.strictEqual(result.status, 0, 'Installing npm modules');

        result = child_process.spawnSync('npm', ['start'], options);
        assert.strictEqual(result.status, 0, 'Building javascript');

        return await runInBrowser('webpack');
    });

    async function runInBrowser(htmlFolder) {
        const page = await browser.newPage();
        await page.goto(
            `http://localhost:${port}/test/${htmlFolder}/index.html`
        );
        await page.waitFor(() => window.argon2testResults);
        const result = await page.evaluate(() => window.argon2testResults);

        assert.ok(result);
        assert.ok(result.stdout);
        assert.ok(result.stderr);
        assert.strictEqual(result.stderr.length, 0);

        const stdout = result.stdout.join('').trim();
        assert.ok(stdout);

        const report = JSON.parse(stdout);

        assert.ok(report);
        assert.ok(report.stats);
        assert.ok(report.stats.suites);
        assert.ok(report.stats.passes);
        assert.strictEqual(report.stats.pending, 0);
        assert.strictEqual(report.stats.failures, 0);
    }

    function rmDist() {
        child_process.spawnSync('rm', [
            '-rf',
            path.resolve(__dirname, 'webpack', 'dist')
        ]);
    }
});
