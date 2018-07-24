'use strict';

document.getElementById('frm').addEventListener('submit', function(e) { e.preventDefault(); });
document.getElementById('btnCalcAsm').addEventListener('click', calc(calcAsmJs));
document.getElementById('btnCalcWasm').addEventListener('click', calc(calcWasm));
document.getElementById('btnCalcBinaryenSexpr').addEventListener('click', calc(calcBinaryenSexpr));
document.getElementById('btnCalcBinaryenBin').addEventListener('click', calc(calcBinaryenBin));
document.getElementById('btnCalcPNaCl').addEventListener('click', calc(calcPNaCl));
document.getElementById('btnCalcAsmWorker').addEventListener('click', function() { calcWorker('asm'); });
document.getElementById('btnCalcWasmWorker').addEventListener('click', function() { calcWorker('wasm'); });

function loadScript(src, onload, onerror) {
    var el = document.createElement("script");
    el.src = src;
    el.onload = onload;
    el.onerror = onerror;
    document.body.appendChild(el);
}

var worker;
function calcWorker(method) {
    clearLog();
    if (worker) {
        if (worker.method === method) {
            log('Using loaded worker');
            worker.postMessage({ calc: method, arg: getArg() });
            return;
        } else {
            worker.terminate();
        }
    }
    log('Starting worker...');
    worker = new Worker('js/worker.js');
    worker.method = method;
    var loaded = false;
    worker.onmessage = function(e) {
        log(e.data.msg);
        if (!loaded) {
            loaded = true;
            worker.postMessage({ calc: method, arg: getArg() });
        }
    };
}

var pnaclTs;
function calcPNaCl() {
    window.Module = null;
    clearLog();

    if (!navigator.mimeTypes['application/x-pnacl']) {
        return log('PNaCl is not supported by your browser');
    }
    log('Testing Argon2 using PNaCl');

    var listener = document.getElementById('pnaclListener');
    var moduleEl = document.getElementById('pnacl-argon2');

    pnaclTs = performance.now();
    if (moduleEl) {
        moduleEl.postMessage(getArg());
        return;
    }

    log('Loading PNaCl module...');
    moduleEl = document.createElement('embed');
    moduleEl.setAttribute('name', 'argon2');
    moduleEl.setAttribute('id', 'pnacl-argon2');
    moduleEl.setAttribute('width', '0');
    moduleEl.setAttribute('height', '0');
    moduleEl.setAttribute('src', 'argon2.nmf');
    moduleEl.setAttribute('type', 'application/x-pnacl');

    listener.addEventListener('load', function() {
        log('PNaCl module loaded in ' + Math.round(performance.now() - pnaclTs) + 'ms');
        log('Calculating hash....');
        pnaclTs = performance.now();
        moduleEl.postMessage(getArg());
    }, true);
    listener.addEventListener('message', function(e) {
        var encoded = e.data.encoded;
        var hash = e.data.hash;
        if (e.data.res) {
            log('Error: ' + e.data.res + ': ' + e.data.error);
        } else {
            log('Encoded: ' + encoded);
            log('Hash: ' + hash);
            log('Elapsed: ' + Math.round(performance.now() - pnaclTs) + 'ms');
        }
    }, true);
    listener.addEventListener('error', function() { log('Error'); }, true);
    listener.addEventListener('crash', function() { log('Crash'); }, true);

    listener.appendChild(moduleEl);
    moduleEl.offsetTop; // required by PNaCl
}

function getArg() {
    return {
        pass: document.getElementById('txtPassword').value || 'password',
        salt: document.getElementById('txtSalt').value || 'somesalt',
        time: +(document.getElementById('txtIt').value || 1),
        mem: +(document.getElementById('txtMem').value || 1024),
        hashLen: +(document.getElementById('txtLen').value || 32),
        parallelism: +(document.getElementById('txtPar').value || 1),
        type: document.querySelector('input[name="radioType"]:checked').value || 0,
    };
}

var logTs = 0;

function log(msg) {
    if (!msg) {
        return;
    }
    var txtRes = document.getElementById('txtRes');
    var elapsedMs = Math.round(performance.now() - logTs);
    var elapsedSec = (elapsedMs / 1000).toFixed(3);
    var elapsed = leftPad(elapsedSec, 6);
    txtRes.value += (txtRes.value ? '\n' : '') + '[' + elapsed + '] ' + msg;
}

function leftPad(str, len) {
    str = str.toString();
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
}

function clearLog() {
    logTs = performance.now();
    document.getElementById('txtRes').value = '';
}
