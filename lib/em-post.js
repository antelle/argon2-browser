Module.unloadRuntime = function() {
  if (typeof self!=="undefined") delete self.Module;
  Module = jsModule = wasmMemory = wasmTable = asm = buffer = HEAP8 = HEAPU8 =
  HEAP16 = HEAPU16 = HEAP32 = HEAPU32 = HEAPF32 = HEAPF64 = undefined;
  if (typeof module!=="undefined") delete module.exports;
};

return Module;
}
