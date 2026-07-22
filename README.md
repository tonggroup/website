# Tong Group website

Public site for the **Tong Group** research lab at [Aithyra](https://aithyra.at/) (Vienna), at the intersection of machine learning and life sciences. The principal investigator's personal site is [alextong.net](https://alextong.net/).

![Default social preview](public/tong-group-og.png)

Built with [Astro](https://astro.build/) 5, Tailwind CSS 4, and content collections for news, team, research areas, and publications.

## Running locally

```bash
pnpm install
pnpm dev
```

Production build (runs typecheck, static build, and Pagefind):

```bash
pnpm run build
pnpm preview
```

## Project layout

- [`src/config.ts`](src/config.ts) — site title, description, domain, default OG image, feature flags.
- [`src/pages/`](src/pages/) — routes (home, research, team, publications, news, search, etc.).
- [`src/data/news/`](src/data/news/) — news posts (Markdown).
- [`src/data/team/`](src/data/team/) — team members (YAML).
- [`src/data/research/`](src/data/research/) — research area cards (Markdown).
- [`src/data/publications.bib`](src/data/publications.bib) + [`src/data/publications/`](src/data/publications/) — bibliography and publication detail pages.

See [CONTRIBUTING.md](CONTRIBUTING.md) for publications workflow notes.

## License

MIT License — see [LICENSE](LICENSE).
