'use strict';

document.getElementById('frm').addEventListener('submit', function(e) {
    e.preventDefault();
});
document
    .getElementById('btnCalcWasm')
    .addEventListener('click', calc(calcWasm));
document
    .getElementById('btnCalcWasmWorker')
    .addEventListener('click', function() {
        calcWorker('wasm');
    });

function loadScript(src, onload, onerror) {
    var el = document.createElement('script');
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

function getArg() {
    return {
        pass: document.getElementById('txtPassword').value || 'password',
        salt: document.getElementById('txtSalt').value || 'somesalt',
        time: +(document.getElementById('txtIt').value || 1),
        mem: +(document.getElementById('txtMem').value || 1024),
        hashLen: +(document.getElementById('txtLen').value || 32),
        parallelism: +(document.getElementById('txtPar').value || 1),
        type: +document.querySelector('[name=radioType]:checked').value
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
