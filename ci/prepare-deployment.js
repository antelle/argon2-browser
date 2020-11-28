const fs = require('fs');
const { execSync } = require('child_process');

const packageJson = require('../package.json');
const version = packageJson.version;

const date = new Date().toISOString().split('T')[0];

const commit = execSync('git rev-parse HEAD').toString().trim();
const branch = execSync('git branch --show-current').toString().trim();
let tag;
try {
    tag = execSync('git describe --exact-match --tags', {
        stdio: 'ignore',
    })
        .toString()
        .trim();
} catch {}

const fileSafeBranch = branch.replace(/[^\w.]+/g, '_');

const filePrefix = tag || `branch/${fileSafeBranch}/${version}/${commit}`;
const versionName = filePrefix.replace(/\//g, '-');

console.log(
    `Preparing deployment for commit ${commit} on ${branch} ` +
        (tag ? 'and tag ' + tag : 'without tag')
);

const shaSums = execSync('shasum dist/argon2.*').toString();
console.log(`Release checksums:\n${shaSums}`);

const maxFileGrowth = 5;

for (const file of [
    'dist/argon2.js',
    'dist/argon2.wasm',
    'dist/argon2-simd.wasm',
]) {
    const gitSize = execSync(`git ls-tree --long ${commit} "${file}"`)
        .toString()
        .split(/\s+/)[3];

    const currentSize = fs.statSync(file).size;
    const growth = (currentSize / gitSize) * 100 - 100;

    console.log(
        `${file}: ${gitSize} bytes in git, ${currentSize} bytes now, ` +
            `${growth.toFixed(2)}% growth`
    );

    if (growth > maxFileGrowth) {
        console.error(
            `File ${file} is too big, allowed growth is ${maxFileGrowth}%.\n` +
                `Please check if this is expected and update the build scripts if so.`
        );
        process.exit(2);
    }
}
console.log(`File growth is within ${maxFileGrowth}%, proceeding.\n`);

const config = require('../.bintray.json');
config.version = {
    name: versionName,
    desc: versionName,
    released: date,
    vcs_tag: tag,
};

for (const file of config.files) {
    file.uploadPattern = file.uploadPattern.replace('{prefix}', filePrefix);
}

fs.writeFileSync('bintray.json', JSON.stringify(config, null, 2));

console.log('Created bintray.json');
