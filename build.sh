#!/usr/bin/env bash
rm -rf dist && mkdir dist &&
rm -rf CMakeFiles && rm -f CMakeCache.txt && ./build-asm.sh
rm -rf CMakeFiles && rm -f CMakeCache.txt && ./build-wasm.sh &&
rm -rf CMakeFiles && rm -f CMakeCache.txt && ./build-pnacl.sh &&
echo Done
