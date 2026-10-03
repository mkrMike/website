import { ar } from './ar'
import { el } from './el'
import { en, type Dictionary } from './en'
import { es } from './es'
import { fr } from './fr'
import type { Locale } from './locales'
import { ru } from './ru'

export * from './locales'
export type { Dictionary }

const dictionaries: Record<Locale, Dictionary> = { en, fr, ar, es, ru, el }

export const useTranslations = (locale: Locale): Dictionary => dictionaries[locale]
