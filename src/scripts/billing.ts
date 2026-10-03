/**
 * The visitor's currency and billing interval, shared by the pricing and
 * signup pages and remembered across visits.
 */
import { currencies, type Currency, type Interval } from '../config/plans'

const CURRENCY_KEY = 'samatrica-currency'
const INTERVAL_KEY = 'samatrica-interval'

const read = (key: string) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Private mode: just not remembered.
  }
}

/** UAE visitors pay in AED; French, Spanish and Greek pages in EUR; else USD. */
function guessCurrency(): Currency {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const regions = (navigator.languages ?? [navigator.language]).map((tag) => tag.split('-')[1]?.toUpperCase())
  if (zone === 'Asia/Dubai' || regions.includes('AE')) {
    return 'AED'
  }
  const page = document.documentElement.lang
  return ['fr', 'es', 'el'].includes(page) ? 'EUR' : 'USD'
}

export function preferredCurrency(): Currency {
  const saved = read(CURRENCY_KEY)
  return currencies.includes(saved as Currency) ? (saved as Currency) : guessCurrency()
}

export function preferredInterval(): Interval {
  return read(INTERVAL_KEY) === 'YEAR' ? 'YEAR' : 'MONTH'
}

export const rememberCurrency = (currency: Currency) => write(CURRENCY_KEY, currency)
export const rememberInterval = (interval: Interval) => write(INTERVAL_KEY, interval)
