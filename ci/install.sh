#!/usr/bin/env bash

set -euxo pipefail

cd /emsdk_portable
git pull
emsdk install latest
emsdk activate latest