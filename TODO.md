# Deja Buy — Project TODO

## Done

- [x] Core site structure — HTML/CSS/ES Modules, no build step
- [x] Deal card grid with category filtering, search, and sort (savings / price asc / price desc)
- [x] Bilingual support (DE / EN) via `translations.js` + `localStorage` persistence
- [x] Affiliate URL builder (`affiliate.js`) for Amazon, eBay, Back Market, Rebuy, Refurbed, Asgoodasnew
- [x] Brand identity — Space Grotesk + DM Sans + Space Mono font stack
- [x] Brand identity — electric green accent (#7ed956), near-black bg (#0d0d0c), warm white text (#f9f9f8)
- [x] Brand identity — LoopMark SVG icon + DEJABUY wordmark in nav and footer

---

## Phase 1 — Real Data

- [ ] Replace all `sourceUrl: "#"` placeholders in `main.js` with real product listing URLs
- [ ] Register and fill in affiliate IDs in `affiliate.js`:
  - `amazon_de.tag` — Amazon.de Associates
  - `ebay_de.campaignId` — eBay.de Partner Network
  - `backmarket.affiliateId` — Back Market via Awin
  - `rebuy.affiliateId` — Rebuy.de via ADCELL
  - `refurbed.affiliateId` — Refurbed.com direct program
  - `asgoodasnew.affiliateId` — Asgoodasnew.com via Awin
- [ ] Expand deal catalog from 27 → 100+ items across all categories
- [ ] Add `updatedAt` timestamp field to each deal and display "Updated X days ago" on cards

---

## Phase 2 — UI Polish

- [ ] Favicon — 32×32 LoopMark on `#0d0d0c` background (design spec: `background: #0d0d0c, border-radius: 6px`)
- [ ] OG / social meta tags — `og:title`, `og:description`, `og:image` for link previews
- [ ] Mobile navigation — hamburger toggle for `.nav__links` on viewports ≤ 860px
- [ ] Translate sort `<select>` options via `data-i18n` (currently hardcoded German strings)
- [ ] "Featured" as a default sort option (currently defaults to savings; featured items are flagged in data)
- [ ] Skeleton loading cards shown while deals render on slow connections

---

## Phase 3 — Backend & Infrastructure

- [ ] Move affiliate IDs out of `affiliate.js` into server-side environment variables
- [ ] Build a simple API endpoint that serves the deals JSON (replace hardcoded `DEALS` array)
- [ ] Add a `last_checked` / price-verified timestamp per deal from the API
- [ ] Automated deal scraping or manual CMS for curating new deals daily
- [ ] `.env.example` already documents expected env var names — wire them up when backend lands

---

## Phase 4 — Growth

- [ ] Email / push alert signup — "Notify me when a new [category] deal drops"
- [ ] Price history sparkline per deal card (show price trend over last 30 days)
- [ ] Expand categories — Tablets, Smart Home, Wearables, Monitors
- [ ] Saved / wishlist deals (localStorage or account-based)
- [ ] Social card / OG image template per deal for sharing (per identity: 1200×630 brand card)
- [ ] Brand PDF export of the corporate identity system

---

## Ongoing

- [ ] Keep DE translations in sync whenever new UI strings are added to `translations.js`
- [ ] Verify affiliate links are active and IDs are valid monthly
- [ ] Audit deal prices against live listings weekly to remove stale data
