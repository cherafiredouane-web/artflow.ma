# Artflow

A static, bilingual React + TypeScript storefront for the Artflow decorative wall-art collection. It uses Vite, a locally bundled deduplicated artwork catalog, hash-based navigation, and WhatsApp ordering. The project is configured for GitHub Pages project URLs.

## Run locally

```sh
npm install
npm run dev
```

Build the deployable site with `npm run build`. Check the TypeScript source with `npm run typecheck`.

## Shared product details

Edit [src/config/store.ts](src/config/store.ts) to set the catalogue-wide `productPriceMAD` and `productDimensions` after the business confirms them. They are deliberately `null` now: the existing storefront shows multiple prices, and no shared dimensions were verified. All product cards, details, and WhatsApp messages read those single shared values.

## Catalog and artwork updates

- `src/data/artworks.json` is the one-record-per-artwork catalog. It stores stable IDs, French and Arabic titles, search keywords, source filename aliases, category memberships, dominant-color IDs, image paths, and alt text.
- `src/data/categories.ts` defines the six source-folder categories and their French and Arabic labels.
- Optimized canonical WebP files live in `public/artworks/`.
- `ARTWORK_CATALOG_REPORT.md` records source paths, formats, dimensions, exact duplicate groups, and their canonical catalog IDs.

To add an artwork, copy its optimized image to `public/artworks/`, create a unique stable ID and slug in `src/data/artworks.json`, add its source-derived category IDs, French and Arabic titles, keywords in both languages, one dominant-color ID, aliases, and alt text. Do not add a separate catalog record just to place the artwork in another category; add the category ID to the existing record.

## Languages and search

French is the default. The language control switches the entire interface between French and Arabic, saves the preference in local storage, and updates the document language and direction. The Arabic layout uses Alexandria and right-to-left direction. Search normalizes French accents and common Arabic character variations and searches titles, aliases, keywords, and category names.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` checks types, builds `dist`, and deploys it to GitHub Pages whenever changes are pushed to `main` or the workflow is run manually.

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run **Deploy to GitHub Pages** from the Actions tab. GitHub will show the published URL after the deployment finishes.

The Vite base is relative, so the site works both at a project URL and at a custom domain. No server, paid hosting, or API key is needed. Google Fonts are used for Manrope and Alexandria; local fallback fonts are configured.

## Catalog review notes

The archive contains 232 raster image files and 199 exact-hash-unique files. Byte-identical files share a single record and preserve all source-folder memberships. Different files that may depict a similar painting are listed separately unless they are byte-identical; see the audit report. Dominant-color labels were generated from central crops of staged product mockups and should be reviewed because a few mockups may still include wall color in the crop.
