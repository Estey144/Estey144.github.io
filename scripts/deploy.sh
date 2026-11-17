#!/usr/bin/env bash
# Build the site and publish it to the `gh-pages` branch.
# GitHub Pages (Settings → Pages → Source: "Deploy from a branch", gh-pages / root) serves that branch.
#
# Usage:  npm run deploy
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REMOTE="$(git remote get-url origin)"
REV="$(git rev-parse --short HEAD)"

if [ -n "$(git status --porcelain)" ]; then
  echo "Note: you have uncommitted changes — they will be deployed but are not on GitHub yet."
fi

echo "Building…"
npm run build

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cp -r dist/. "$TMP"
touch "$TMP/.nojekyll"             # serve files as-is (no Jekyll processing)
cp dist/index.html "$TMP/404.html" # unknown paths fall back to the site

cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C "$ROOT" config user.name)" \
    -c user.email="$(git -C "$ROOT" config user.email)" \
    commit -q -m "Deploy ${REV}"

echo "Publishing to gh-pages…"
git push -q -f "$REMOTE" gh-pages

echo "Done. The live site updates in about a minute: https://estey144.github.io/"
