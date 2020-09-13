#!/usr/bin/env bash

set -euxo pipefail

git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
cd ..
