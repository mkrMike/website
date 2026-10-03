/**
 * Pricing page: every price is already in the HTML; this shows the chosen
 * currency and interval, and passes them on to the signup links.
 */
import type { Currency, Interval } from '../config/plans'
import { preferredCurrency, preferredInterval, rememberCurrency, rememberInterval } from './billing'

export function initPricing() {
  let currency = preferredCurrency()
  let interval = preferredInterval()

  const render = () => {
    document.querySelectorAll<HTMLButtonElement>('[data-pricing-controls] [data-currency]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.currency === currency))
    })
    document.querySelectorAll<HTMLButtonElement>('[data-pricing-controls] [data-interval]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.interval === interval))
    })

    document.querySelectorAll<HTMLElement>('[data-plan]').forEach((plan) => {
      let available = false
      plan.querySelectorAll<HTMLElement>('.price-option').forEach((option) => {
        const shown = option.dataset.currency === currency && option.dataset.interval === interval
        option.hidden = !shown
        if (shown) {
          available = option.dataset.available === 'true'
        }
      })

      const choose = plan.querySelector<HTMLAnchorElement>('.choose')
      if (choose) {
        choose.href = `${choose.dataset.baseHref}&currency=${currency}&interval=${interval}`
        if (available) {
          choose.removeAttribute('aria-disabled')
          choose.removeAttribute('tabindex')
        } else {
          // Not sold in this currency or interval.
          choose.setAttribute('aria-disabled', 'true')
          choose.setAttribute('tabindex', '-1')
        }
      }
    })
  }

  document.querySelectorAll<HTMLButtonElement>('[data-pricing-controls] button').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.currency) {
        currency = button.dataset.currency as Currency
        rememberCurrency(currency)
      }
      if (button.dataset.interval) {
        interval = button.dataset.interval as Interval
        rememberInterval(interval)
      }
      render()
    })
  })

  render()
}
