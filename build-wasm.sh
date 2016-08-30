#!/usr/bin/env bash
export EMCC_WASM_BACKEND=0 # TODO: set to 1 (but wasm fails for now)
cmake \
    -DOUTPUT_NAME="argon2" \
    -DCMAKE_TOOLCHAIN_FILE=~/emsdk_portable/emscripten/incoming/cmake/Modules/Platform/Emscripten.cmake \
    -DCMAKE_VERBOSE_MAKEFILE=OFF \
    -DCMAKE_BUILD_TYPE=MinSizeRel \
    -DCMAKE_C_FLAGS="-O3" \
    -DCMAKE_EXE_LINKER_FLAGS="-O3 -g0 --memory-init-file 0 -s NO_FILESYSTEM=1 -s 'EXPORTED_FUNCTIONS=[\"_argon2_hash\",\"_argon2_error_message\"]' -s DEMANGLE_SUPPORT=0 -s ASSERTIONS=0 -s NO_EXIT_RUNTIME=1 -s TOTAL_MEMORY=134217728 -s BINARYEN=1" && cmake --build .
~/binaryen/bin/wasm-as dist/argon2.wast > dist/argon2.wasm
