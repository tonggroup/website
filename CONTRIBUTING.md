# Contributing

## Publications

The site lists works from two sources that should stay aligned:

- [`src/data/publications.bib`](src/data/publications.bib) drives the full bibliography UI (including download) via [`src/utils/parseBibliography.ts`](src/utils/parseBibliography.ts).
- [`src/data/publications/`](src/data/publications/) holds one Markdown file per highlighted publication (front matter for title, authors, date, abstract, links, optional image).

When you add or change a paper, update the `.bib` entry and, if the paper should appear in the “Recent publications” grid or have its own detail page, add or edit the matching `.md` file (the file basename is used as the URL slug and should match the bibliography entry id where applicable). The script [`convert-publications.js`](convert-publications.js) in the repo root can help migrate content from another Astro site’s `content/publication` layout (expects network access to GitHub).

### Publication `date` field

Frontmatter `date:` is used for sorting and SEO. For **conference and workshop** papers it should reflect the approximate **venue date** (not the arXiv submission day unless the item is arXiv-only). After editing venues or arXiv links, run:

```bash
pnpm sync:pub-dates
```

This rewrites `date:` using [`src/utils/inferPublicationSortDate.ts`](src/utils/inferPublicationSortDate.ts) (primary venue before any “Also …” clause, conference month heuristics, arXiv YYMM from `urlPdf`, journals mid-year). Hand-set dates in the same calendar month as the inferred arXiv month are preserved when they are later in the month (e.g. a specific announcement day).

## Dynamic OG images (news)

News posts can generate Open Graph PNGs at build time, which may fetch fonts from Google. Ensure the build environment allows outbound HTTPS to `fonts.googleapis.com` (or disable `dynamicOgImage` in [`src/config.ts`](src/config.ts) if you need fully offline builds).

## Team headshots

Member photos may use remote URLs (for example from the Aithyra site). Allowed hosts are configured in [`astro.config.ts`](astro.config.ts) under `image.remotePatterns`. For stability, consider copying images into this repository under `src/assets/` and referencing them from team YAML when convenient.

## Local build

Search (Pagefind) indexes the built output. After cloning, run `pnpm run build` once before expecting local search to return results in dev mode.
