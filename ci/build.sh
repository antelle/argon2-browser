#!/usr/bin/env bash

set -e
set -o pipefail

docker exec -it emsdk update
docker exec -it emsdk install latest
docker exec -it emsdk activate latest

docker exec -it emscripten ./build.sh
npm test
npm run prepare-deployment -- --commit="$TRAVIS_COMMIT" --tag="$TRAVIS_TAG" --branch="$TRAVIS_BRANCH"
npm pack
