#!/usr/bin/env node
/**
 * build-pages.mjs
 *
 * Manual, local pre-commit step — NOT part of CI/GitHub Pages deployment.
 * GitHub Pages (.github/workflows/static.yml) keeps uploading the raw repo
 * exactly as-is; this script just lets us maintain the header/nav/footer
 * markup in one place (shared/partials/) instead of hand-copying it into
 * every page, then stitch it back into the plain static .html files that
 * actually get served.
 *
 * Usage:
 *   node scripts/build-pages.mjs
 *
 * How it works:
 *   1. Reads shared/partials/header.html and shared/partials/footer.html.
 *   2. Walks the site for .html files.
 *   3. For each file that is registered in ACTIVE_MAP below and contains the
 *      <!-- INCLUDE:header --> / <!-- INCLUDE:footer --> marker comments,
 *      replaces those markers with the partial content, substituting the
 *      {{active:KEY}} marker in the header partial with " active" for the
 *      nav link matching that page, and "" for every other key.
 *   4. Writes the result back into the same file.
 *
 * install.html is intentionally NOT in ACTIVE_MAP / does not carry the
 * INCLUDE markers — it keeps its own minimal, noindex, post-install header
 * and footer on purpose (see page-template-spec.md).
 *
 * To add a new page: add its relative path + nav active key to ACTIVE_MAP,
 * put the two INCLUDE marker comments where the header/footer should go,
 * then re-run this script.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = join(__dirname, "..");

const HEADER_PARTIAL_PATH = join(SITE_ROOT, "shared/partials/header.html");
const FOOTER_PARTIAL_PATH = join(SITE_ROOT, "shared/partials/footer.html");

const HEADER_MARKER = "<!-- INCLUDE:header -->";
const FOOTER_MARKER = "<!-- INCLUDE:footer -->";

// relative path (from site root, forward slashes) -> nav "active" key
const ACTIVE_MAP = {
  "index.html": "home",
  "guide/index.html": "guide",
  "use-cases/index.html": "use-cases",
  "faq/index.html": "faq",
  "blog/index.html": "blog",
  "blog/how-to-download-all-images-from-a-website/index.html": "blog",
  "blog/ecommerce-product-image-research/index.html": "blog",
  "blog/is-it-safe-bulk-image-downloader-extension/index.html": "blog",
  "vs-imageye/index.html": "vs-imageye",
  "vs-manual-saving/index.html": "vs-manual-saving",
  // install.html deliberately excluded — keeps its own minimal header/footer.
};

const SKIP_DIRS = new Set([".git", "node_modules", "shared"]);

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...findHtmlFiles(full));
    } else if (entry.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function renderHeader(activeKey) {
  const raw = readFileSync(HEADER_PARTIAL_PATH, "utf8");
  return raw.replace(/\{\{active:([a-z-]+)\}\}/g, (_match, key) =>
    key === activeKey ? " active" : ""
  );
}

function renderFooter() {
  return readFileSync(FOOTER_PARTIAL_PATH, "utf8");
}

function main() {
  const htmlFiles = findHtmlFiles(SITE_ROOT);
  let touched = 0;

  for (const file of htmlFiles) {
    const relPath = relative(SITE_ROOT, file).split("\\").join("/");
    const activeKey = ACTIVE_MAP[relPath];
    let content = readFileSync(file, "utf8");
    const hasHeaderMarker = content.includes(HEADER_MARKER);
    const hasFooterMarker = content.includes(FOOTER_MARKER);

    if (!hasHeaderMarker && !hasFooterMarker) continue;

    if (activeKey === undefined) {
      console.warn(
        `! ${relPath} has INCLUDE markers but no ACTIVE_MAP entry — skipping.`
      );
      continue;
    }

    if (hasHeaderMarker) {
      content = content.replace(HEADER_MARKER, renderHeader(activeKey).trimEnd());
    }
    if (hasFooterMarker) {
      content = content.replace(FOOTER_MARKER, renderFooter().trimEnd());
    }

    writeFileSync(file, content, "utf8");
    touched++;
    console.log(`\u2713 ${relPath} (active: ${activeKey})`);
  }

  console.log(`\nDone. Rebuilt header/footer in ${touched} file(s).`);
}

main();
