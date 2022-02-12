#!/usr/bin/env bash

set -e
set -o pipefail

ARGON_JS_EXTRA_C_FLAGS=""
if [[ "$ARGON_JS_BUILD_BUILD_WITH_SIMD" == "1" ]]; then
    ARGON_JS_EXTRA_C_FLAGS="-msimd128 -msse2"
fi

cmake \
    -DOUTPUT_NAME="argon2" \
    -DCMAKE_TOOLCHAIN_FILE=$EMSDK/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake \
    -DCMAKE_VERBOSE_MAKEFILE=OFF \
    -DCMAKE_BUILD_TYPE=MinSizeRel \
    -DCMAKE_C_FLAGS="-O3 $ARGON_JS_EXTRA_C_FLAGS" \
    -DCMAKE_EXE_LINKER_FLAGS="-O3 --memory-init-file 0 \
                              -s NO_FILESYSTEM=1 \
                              -s 'EXPORTED_FUNCTIONS=[\"_argon2_hash\",\"_argon2_hash_ext\",\"_argon2_verify\",\"_argon2_verify_ext\",\"_argon2_error_message\",\"_argon2_encodedlen\",\"_malloc\",\"_free\"]' \
                              -s 'EXPORTED_RUNTIME_METHODS=[\"UTF8ToString\",\"allocate\",\"ALLOC_NORMAL\"]' \
                              -s DEMANGLE_SUPPORT=0 \
                              -s ASSERTIONS=0 \
                              -s NO_EXIT_RUNTIME=1 \
                              -s TOTAL_MEMORY=16MB \
                              -s BINARYEN_MEM_MAX=2147418112 \
                              -s ALLOW_MEMORY_GROWTH=1 \
                              -s WASM=1" \
    .
cmake --build .

shasum dist/argon2.js
shasum dist/argon2.wasm
