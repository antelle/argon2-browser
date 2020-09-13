#!/usr/bin/env bash

set -e
set -o pipefail

cd /emsdk_portable
git pull
emsdk install latest
emsdk activate latest