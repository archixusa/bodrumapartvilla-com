# Backup — Original Images & Demo Content

This folder is reserved for pre-launch backups of villa-specific assets that
were moved out of `public/` and `src/data/` while the site transitions to its
public Coming Soon state.

## Status at time of cleanup

- `public/` originally contained only the two brand logos (`logo_kare.svg`,
  `logo_yatay.svg`) — no villa-specific photography was checked into the
  repository. All demo villa imagery referenced via `src/data/properties.ts`
  pointed to remote Unsplash URLs (see `images.remotePatterns` in
  `next.config.mjs`).
- For that reason no binary image files needed to be moved into this folder.
  The brand logos remain in `public/` as they are generic site assets, not
  property-specific.

## What was removed in the cleanup PR

- `src/data/properties.ts` — the demo `properties` array was emptied (all
  exported types and helper functions are preserved so consuming code keeps
  compiling).
- `/villalar`, `/apartlar`, `/kiralik` — listing pages were rewritten as
  premium-boutique Coming Soon pages.
- `/kiralik/[slug]` — detail route now returns `notFound()` so legacy slugs
  resolve to a clean 404 without throwing.

## Do not delete

This folder is intentionally retained so that, when real villa content is
onboarded, the team has an obvious place to land the original archival files
before they enter the live `public/` tree. Leave the folder and README in
place even when empty.
