#!/usr/bin/env bash
set -euo pipefail
echo "[glondia] Static/prebuilt site detected. Preparing publish directory: ."
if [ "." = "." ]; then
  echo "[glondia] Publishing repository root."
elif [ -d "." ]; then
  echo "[glondia] Publish directory exists: ."
elif [ -f index.html ]; then
  rm -rf dist
  mkdir -p dist
  shopt -s dotglob
  for item in *; do
    if [ "$item" != "dist" ] && [ "$item" != "glondia-render-build.sh" ]; then
      cp -R "$item" dist/
    fi
  done
else
  echo "[glondia] ERROR: publish directory not found and no index.html fallback exists."
  exit 1
fi
