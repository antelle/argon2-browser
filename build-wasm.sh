#!/usr/bin/env bash
cmake \
    -DOUTPUT_NAME="argon2" \
    -DCMAKE_TOOLCHAIN_FILE=$EMSDK/fastcomp/emscripten/cmake/Modules/Platform/Emscripten.cmake \
    -DCMAKE_VERBOSE_MAKEFILE=OFF \
    -DCMAKE_BUILD_TYPE=MinSizeRel \
    -DCMAKE_C_FLAGS="-O3" \
    -DCMAKE_EXE_LINKER_FLAGS="-O3 -g0 --memory-init-file 0 -s NO_FILESYSTEM=1 -s 'EXPORTED_FUNCTIONS=[\"_argon2_hash\",\"_argon2_verify\",\"_argon2_error_message\",\"_malloc\",\"_free\"]' -s 'EXTRA_EXPORTED_RUNTIME_METHODS=[\"UTF8ToString\",\"allocate\",\"ALLOC_NORMAL\"]' -s DEMANGLE_SUPPORT=0 -s ASSERTIONS=0 -s NO_EXIT_RUNTIME=1 -s TOTAL_MEMORY=16MB -s BINARYEN_MEM_MAX=2147418112 -s ALLOW_MEMORY_GROWTH=1 -s WASM=1" && cmake --build .
perl -pi -e 's/"argon2.js.mem"/null/g' dist/argon2.js
perl -pi -e 's/$/if(typeof module!=="undefined")module.exports=Module;/' dist/argon2.js
perl -pi -e 's/typeof Module!=="undefined"\?Module/typeof self!=="undefined"&&typeof self.Module!=="undefined"?self.Module/g' dist/argon2.js
