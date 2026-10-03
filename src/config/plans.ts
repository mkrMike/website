/**
 * PLACEHOLDER plans, prices and limits: not decided yet, and the platform admin
 * will edit them. Change them here only.
 *
 * Shaped like the future GET /api/public/plans so switching to it is trivial:
 * - amountMinor is in fils/cents (19900 = 199.00);
 * - a null limit means unlimited;
 * - a missing price means the plan isn't sold in that currency/interval.
 */

export type Currency = 'AED' | 'USD' | 'EUR'
export type Interval = 'MONTH' | 'YEAR'
export type PlanCode = 'STARTER' | 'PRO' | 'BUSINESS'

export interface PlanPrice {
  currency: Currency
  interval: Interval
  amountMinor: number
}

export interface Plan {
  code: PlanCode
  /** Shown as is; translated taglines are in the i18n files, by code. */
  name: string
  sortOrder: number
  /** Highlighted as "Most popular"; set by the platform admin. */
  featured: boolean
  limits: {
    maxAiConversationsPerMonth: number | null
    maxEmployees: number | null
    maxResources: number | null
    maxWidgets: number | null
  }
  prices: PlanPrice[]
}

export const currencies: Currency[] = ['AED', 'USD', 'EUR']

export const trialDays = 14

/** Monthly and yearly (≈ 2 months free) prices in every currency. */
const prices = (aed: number, usd: number, eur: number): PlanPrice[] =>
  (
    [
      ['AED', aed],
      ['USD', usd],
      ['EUR', eur],
    ] as const
  ).flatMap(([currency, monthly]) => [
    { currency, interval: 'MONTH' as const, amountMinor: monthly * 100 },
    { currency, interval: 'YEAR' as const, amountMinor: monthly * 10 * 100 },
  ])

export const plans: Plan[] = [
  {
    code: 'STARTER',
    name: 'Starter',
    sortOrder: 1,
    featured: false,
    limits: { maxAiConversationsPerMonth: 300, maxEmployees: 2, maxResources: 3, maxWidgets: 1 },
    prices: prices(179, 49, 45),
  },
  {
    code: 'PRO',
    name: 'Pro',
    sortOrder: 2,
    featured: true,
    limits: { maxAiConversationsPerMonth: 1500, maxEmployees: 10, maxResources: 15, maxWidgets: 3 },
    prices: prices(469, 129, 119),
  },
  {
    code: 'BUSINESS',
    name: 'Business',
    sortOrder: 3,
    featured: false,
    limits: { maxAiConversationsPerMonth: 5000, maxEmployees: null, maxResources: null, maxWidgets: 10 },
    prices: prices(1099, 299, 279),
  },
]

export const priceOf = (plan: Plan, currency: Currency, interval: Interval) =>
  plan.prices.find((price) => price.currency === currency && price.interval === interval)
