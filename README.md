# Samatrica website

Public marketing site: static pages in 6 languages (`/en/`, `/fr/`, `/ar/` RTL, `/es/`, `/ru/`, `/el/`).
Built with [Astro](https://astro.build); React only for the signup form.

```sh
npm install
npm run dev       # http://localhost:4321
npm run lint      # oxlint + astro check (types)
npm run build     # static site in dist/
npm run preview   # serve dist/ on http://localhost:4321
npm run icons     # regenerate favicon, app icons, og-image after a logo change
npm run logo-paths # re-convert the logo lettering (Plus Jakarta Sans) to SVG paths
```

## Where things are

| What | Where |
| --- | --- |
| Copy, per language | `src/i18n/{en,fr,ar,es,ru,el}.ts` (`en.ts` is the reference; the others are type-checked against it) |
| Plans, prices, limits (placeholders) | `src/config/plans.ts`, shaped like the future `GET /api/public/plans` |
| Site URL, dashboard login URL, contact email | `astro.config.mjs` (`site`), `src/config/site.ts` |
| Logo: wordmark + horizon arc, "s" icon | `src/components/brand/`; all variants on `/en/brand/` (not linked, noindex) |
| Pages | `src/pages/[lang]/`; `/` redirects to the visitor's language |

## Windows: blocked native compiler

Astro 7 compiles `.astro` files with a native module that Windows Smart App
Control can block ("An Application Control policy has blocked this file").
`npm install` detects this and installs Astro's WebAssembly compiler instead
(`scripts/ensure-compiler.mjs`); nothing to do by hand.
