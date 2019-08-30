#!/usr/bin/env bash

set -e
set -o pipefail

rm -rf dist && mkdir dist &&
./clean-cmake.sh
./build-wasm.sh
./clean-cmake.sh
rm -rf docs/dist && cp -r dist/ docs/dist/

echo Done
