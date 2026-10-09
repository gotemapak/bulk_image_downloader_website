# SEO Content Brief — Bulk Image Downloader (bulk-image-downloader.com)

Draft for human review. Nothing here has been applied to `index.html` — the live hero
copy is untouched. All claims below are grounded in facts already present on the
page (free extension, Chrome Web Store, local-only processing, smart detection of
thumbnails/high-res images, filter by size/format/source, batch download, floating
widget). No invented stats, user counts, or ratings are used.

## 1. Target keywords (prioritized)

Priority order: US → Tier-1 English (UK/CA/AU) → Indonesia/Philippines (English-only
search behavior) → rest of world. These markets all search in English for this
product category, so one keyword set serves all of them — prioritization below
reflects search intent/volume likelihood, not language variants.

1. **bulk image downloader** — exact brand/category match, primary target (already the `<title>` and H1 theme).
2. **download all images from a website chrome** — matches existing FAQ question verbatim ("How do I download all images from a website in Chrome?"); strong long-tail, question-form, good for AI Overviews / featured snippets.
3. **chrome extension to download multiple images at once** — captures "batch download" + "Chrome extension" intent already covered by the Features section.
4. **image downloader extension free** — "free" is a real, stated fact (FAQ: "free to install and use from the Chrome Web Store"); high commercial intent, low friction for conversion.
5. **download high resolution images from website** — maps directly to the real "Smart Detection" feature (detects thumbnails + hidden high-res originals).
6. **bulk download images from gallery/webpage** — generic use-case phrasing, matches "scans any webpage ... lets you select, filter, and download them all in one batch."
7. **image downloader chrome extension no ads / no data collection** — maps to the real "Safe & Secure" feature (no data collection, works offline, local processing) — a genuine differentiator worth targeting since many competing extensions are ad-heavy or inject trackers.
8. **save multiple images from website at once** — secondary long-tail variant of #3/#6, useful for FAQ/content-section targeting rather than the H1.

Notes:
- Avoid "image scraper" / "web scraping" as a headline keyword despite it appearing in the current `<meta name="keywords">` tag — it has scraping/legal connotations that could undersell the simpler, consent-based "select and download" UX. Fine to keep in meta keywords (low-stakes, not user-facing), but don't push it into hero copy.
- No region-specific keyword variants are proposed (e.g. no "...Indonesia" or "...Philippines" modifiers) — this is a Chrome Web Store utility, not a localized service; searchers there use the same English queries as other markets.

## 2. Hero headline + subheadline options

Current live copy (unchanged, for reference):
> H1: "Download Images in Bulk"
> Sub: "Extract and download hundreds of images from any website instantly with our powerful Chrome extension. Fast, secure, and easy to use."

### Option A — keyword-forward, FAQ-aligned
**H1:** Download All Images From Any Website, in One Click
**Sub:** A free Chrome extension that scans the page, finds every image — including hidden high-res originals — and lets you filter and download them all at once. Runs locally, no data collection.

### Option B — benefit-led, leads with the real differentiator (privacy/local)
**H1:** Bulk Image Downloader for Chrome — Fast, Free, and Private
**Sub:** Scan any webpage, filter images by size or format, and batch-download exactly what you need. Everything happens locally in your browser — nothing is ever uploaded or tracked.

### Option C — closest to current tone, minimal change, adds keyword + concrete mechanism
**H1:** Download Images in Bulk From Any Website
**Sub:** Our free Chrome extension detects every image on a page — thumbnails and full-resolution originals alike — so you can filter, select, and download them all in a single batch.

Recommendation: Option A or C for SEO (both work the "download all images from a website" and "bulk" phrasing into the first screen); Option B is the strongest differentiation play if conversion/trust is the bigger lever than keyword match.

## 3. Additional content section ideas (grounded in real product facts)

1. **"Common ways people use it" / use-case callouts** — short cards grounded in existing "Perfect for Everyone" persona list, but reframed around the *action* instead of the *role*, e.g.:
   - "Download all photos from a product page" (e-commerce managers persona already on page)
   - "Save every image from a design inspiration board or portfolio site" (web designers persona already on page)
   - "Pull reference images for a research project in one batch" (researchers/students personas already on page)
   This keeps every example to activities the extension genuinely supports (scan a page → filter → batch download) without naming specific third-party sites (e.g. do not claim dedicated "Pinterest board" or "Instagram" support unless that's been verified against the actual extension permissions/manifest — the page content provided doesn't confirm site-specific integrations, only generic "any website" scanning).

2. **"Why no data ever leaves your browser" section** — expand the existing one-line "Safe & Secure" feature card into a short, standalone trust section: local-only processing, offline capability, no account/sign-up required (install.html's instructions never mention an account), respects site terms of service. This directly targets the "no data collection" / privacy-conscious keyword cluster (#7 above) and gives AI answer engines a clean, quotable passage distinct from the compressed FAQ answer.

3. **"Thumbnails vs. full-resolution: how detection works" explainer** — a short, concrete paragraph (not just a feature-card blurb) walking through the real mechanism already summarized in the FAQ and Smart Detection feature: many pages only display small preview/thumbnail images while linking to larger originals; the extension finds and surfaces those originals so users aren't stuck downloading low-res previews. This is a distinct, specific technical explanation (good for E-E-A-T and featured snippets) rather than a restatement of existing marketing copy.

All three ideas reuse facts already stated elsewhere on the page (personas, Safe & Secure feature, Smart Detection feature, FAQ answers) — they expand and resequence existing claims into dedicated sections rather than introducing new product capabilities.
