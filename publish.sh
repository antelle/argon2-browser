#!/usr/bin/env bash

set -e
set -o pipefail

VERSION=$(node -e "console.log(require('./package.json').version)");
GIT_SHA=$(git rev-parse HEAD);
echo "Publishing v$VERSION ($GIT_SHA)..."

echo "Checking git changes..."
git update-index -q --refresh
if git diff-index --quiet HEAD --; then
    echo "Working directory is clean"
else
    echo "There are some changes, please commit them first"
    exit 1
fi

echo "Checking git branch..."
if [ "$(git branch --show-current)" == "master" ]; then
    echo "We're on master"
else
    echo "Please switch to master first"
    exit 1
fi

echo "Checking if tag $VERSION exists..."
if git rev-list "$VERSION" >/dev/null 2>/dev/null; then
    echo "Tag $VERSION already exists"
    exit 1;
else
    echo "Tag $VERSION doesn't exist"
fi

rm -rf package/

echo "Downloading package content from bintray..."

curl --fail -O "https://dl.bintray.com/antelle/generic/argon2-browser/branch/master/$VERSION/$GIT_SHA/argon2-browser-$VERSION.tgz"

echo "Extracting..."

tar -xvzf "argon2-browser-$VERSION.tgz"

echo "Copying files..."

cp package/dist/argon2.js dist/argon2.js
cp package/dist/argon2.wasm dist/argon2.wasm

cp package/dist/argon2.js docs/dist/argon2.js
cp package/dist/argon2.wasm docs/dist/argon2.wasm

cp package/lib/argon2.js lib/argon2.js
cp package/package.json package.json
cp package/README.md README.md

echo "Cleaning up..."

rm -rf package/

echo "Checking git changes..."
git update-index -q --refresh
if git diff-index --quiet HEAD --; then
    echo "No changes, nothing to commit"
else
    echo "Committing changes to git..."
    git add .
    git commit -am "v$VERSION"
fi

git tag -s "$VERSION" -m "$VERSION"
echo "Added tag $VERSION"

echo "Pushing to GihHub..."
git push --follow-tags

echo "Publishing to npm..."
npm publish "argon2-browser-$VERSION.tgz"

echo "Cleaning up..."
rm "argon2-browser-$VERSION.tgz"

echo "Done! Published $VERSION: https://www.npmjs.com/package/argon2-browser/v/$VERSION"
