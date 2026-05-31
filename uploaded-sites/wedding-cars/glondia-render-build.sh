#!/usr/bin/env bash
set -euo pipefail

echo "=== Glondia ZIP source artifact build ==="
echo "Project type: vite-source"
echo "Framework: Vite"
echo "Package manager: npm"
echo "Publish directory: dist"
echo "Source project detected (Vite, npm)"

if [ -f package.json ]; then
  echo "Installing dependencies with npm..."
  npm ci
  echo "Running build: npm install; npm run build"
  npm install; npm run build
else
  echo "ERROR: package.json expected but not found"
  exit 1
fi

echo "=== Glondia build finished ==="
