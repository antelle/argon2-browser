#!/usr/bin/env bash
cmake \
    -DOUTPUT_NAME=argon2.pexe \
    -DCMAKE_TOOLCHAIN_FILE=PNaClToolchain.cmake \
    -DCMAKE_VERBOSE_MAKEFILE=OFF \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_C_FLAGS="-O3" \
    -DCMAKE_CXX_FLAGS="-O3" && cmake --build . &&
~/nacl_sdk/pepper_49/toolchain/mac_pnacl/bin/pnacl-finalize dist/argon2.pexe
