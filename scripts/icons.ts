/**
 * Generates the favicon, app icons and social image from the logo shapes.
 * Run with `npm run icons` after changing src/components/brand/.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import sharp from 'sharp'
import { icon, letterS, navy, stacked, wordmark } from '../src/components/brand/shapes.ts'

/** The icon's content: a white "s", with the arc when big enough. */
const iconContent = (layout: typeof icon.large) =>
  `${layout.arc ? `<path d="${layout.arc}" fill="none" stroke="#fff" stroke-width="${layout.arcStroke}" stroke-linecap="round"/>` : ''}
<path d="${letterS.d}" transform="${layout.s}" fill="#fff"/>`

/** Browser tab: shown at 16–32 px, so no arc. */
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="15" fill="${navy}"/>
${iconContent(icon.small)}
</svg>`

/** App icon: full bleed (the OS rounds it), with the arc. */
const appIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" fill="${navy}"/>
<g transform="translate(6.4 6.4) scale(0.8)">${iconContent(icon.large)}</g>
</svg>`

/** 1200×630 social preview: the white logo on navy. */
const logoWidth = 640
const logoScale = logoWidth / wordmark.width
const logoHeight = stacked.height * logoScale
const [, viewTop] = stacked.viewBox.split(' ').map(Number)
const ogImage = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${navy}"/>
<g transform="translate(${(1200 - logoWidth) / 2} ${(630 - logoHeight) / 2 - 30}) scale(${logoScale}) translate(0 ${-(viewTop ?? 0)})">
  <path d="${stacked.arc}" fill="none" stroke="#fff" stroke-width="${stacked.stroke}" stroke-linecap="round"/>
  <path d="${wordmark.d}" fill="#fff"/>
</g>
<text x="600" y="${(630 + logoHeight) / 2 + 40}" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="34" fill="#fff" opacity="0.75">AI booking assistant · 24/7 · every language</text>
</svg>`

mkdirSync('public', { recursive: true })
writeFileSync('public/favicon.svg', favicon)

const png = (svg: string, size: number, file: string) =>
  sharp(Buffer.from(svg), { density: 600 }).resize(size, size).png().toFile(`public/${file}`)

await png(favicon, 32, 'favicon-32.png')
await png(appIcon, 180, 'apple-touch-icon.png')
await png(appIcon, 192, 'icon-192.png')
await png(appIcon, 512, 'icon-512.png')
await sharp(Buffer.from(ogImage)).png().toFile('public/og-image.png')

writeFileSync(
  'public/site.webmanifest',
  JSON.stringify(
    {
      name: 'Samatrica',
      short_name: 'Samatrica',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
      theme_color: navy,
      background_color: '#ffffff',
      display: 'standalone',
    },
    null,
    2,
  ) + '\n',
)

console.log('Icons written to public/')
