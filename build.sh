#!/usr/bin/env bash

set -e
set -o pipefail

rm -rf dist
mkdir dist
rm -rf docs/dist
mkdir docs/dist

./clean-cmake.sh
ARGON_JS_BUILD_BUILD_WITH_SIMD=1 ./build-wasm.sh
cp dist/argon2.wasm docs/dist/argon2-simd.wasm
mv dist/argon2.wasm dist/argon2-simd.wasm

./clean-cmake.sh
ARGON_JS_BUILD_BUILD_WITH_SIMD=0 ./build-wasm.sh
cp dist/argon2.worker.js docs/dist/argon2.worker.js
cp dist/argon2.js docs/dist/argon2.js
cp dist/argon2.wasm docs/dist/argon2.wasm

./clean-cmake.sh

echo Done
