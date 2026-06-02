#!/usr/bin/env bash
set -euo pipefail

# Root-level dispatcher - runs when Render has no rootDir set on the service.
# Finds the correct site directory via the GLONDIA_SITE_ROOT_DIR (base) and
# GLONDIA_SITE_SLUG (folder) env vars. The base defaults to the root used when
# the site source was published.

SITE_ROOT_DIR="${GLONDIA_SITE_ROOT_DIR:-generated-sites}"
SITE_SLUG="${GLONDIA_SITE_SLUG:-}"
if [ -z "$SITE_SLUG" ]; then
  echo "[glondia] ERROR: GLONDIA_SITE_SLUG is not set and no rootDir was configured."
  echo "[glondia] GLONDIA_SITE_ROOT_DIR=$SITE_ROOT_DIR"
  echo "[glondia] Set GLONDIA_SITE_SLUG on the Render service to the site folder name."
  exit 1
fi

SITE_DIR="$SITE_ROOT_DIR/$SITE_SLUG"
if [ ! -d "$SITE_DIR" ]; then
  echo "[glondia] ERROR: Site directory not found: $SITE_DIR"
  echo "[glondia] GLONDIA_SITE_ROOT_DIR=$SITE_ROOT_DIR GLONDIA_SITE_SLUG=$SITE_SLUG"
  exit 1
fi

echo "[glondia] Dispatching build for site: $SITE_SLUG (root: $SITE_ROOT_DIR)"
cd "$SITE_DIR"
bash glondia-render-build.sh
