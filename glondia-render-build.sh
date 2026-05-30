#!/usr/bin/env bash
set -euo pipefail

# Root-level dispatcher — runs when Render has no rootDir set on the service.
# Finds the correct site directory via GLONDIA_SITE_SLUG env var.

SITE_SLUG="${GLONDIA_SITE_SLUG:-}"
if [ -z "$SITE_SLUG" ]; then
  echo "[glondia] ERROR: GLONDIA_SITE_SLUG is not set and no rootDir was configured."
  echo "[glondia] Set GLONDIA_SITE_SLUG on the Render service to the site folder name."
  exit 1
fi

SITE_DIR="uploaded-sites/$SITE_SLUG"
if [ ! -d "$SITE_DIR" ]; then
  echo "[glondia] ERROR: Site directory not found: $SITE_DIR"
  exit 1
fi

echo "[glondia] Dispatching build for site: $SITE_SLUG"
cd "$SITE_DIR"
bash glondia-render-build.sh
