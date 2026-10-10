// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// TODO: the production domain isn't decided yet.
const site = 'https://samatrica.com'

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      // Not for search engines: the internal brand page (noindex too).
      filter: (page) => !/\/brand\/$/.test(page),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr', ar: 'ar', es: 'es', ru: 'ru', el: 'el' },
      },
    }),
  ],
})
