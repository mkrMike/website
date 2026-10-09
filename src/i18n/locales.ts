export const locales = ['en', 'fr', 'ar', 'es', 'ru', 'el'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** In its own language, for the switcher. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
  es: 'Español',
  ru: 'Русский',
  el: 'Ελληνικά',
}

export const isRtl = (locale: Locale) => locale === 'ar'

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale)

/** For getStaticPaths of every /[lang]/... page. */
export const localePaths = () => locales.map((lang) => ({ params: { lang } }))

/**
 * The site's pages, without the language. "" is the home page.
 * Every page exists in every language.
 */
export type PagePath =
  | ''
  | 'clinics'
  | 'salons'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'refund'
  | 'brand'

export const href = (locale: Locale, page: PagePath = '', hash = '') =>
  `/${locale}/${page ? `${page}/` : ''}${hash ? `#${hash}` : ''}`
