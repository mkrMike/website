import { type SubmitEvent, useEffect, useMemo, useState } from 'react'
import type { Currency, Interval, PlanCode } from '../config/plans'
import { preferredCurrency, preferredInterval, rememberCurrency, rememberInterval } from '../scripts/billing'

/**
 * Signup: checked in the browser only. Not wired yet: the backend endpoint
 * and Stripe Checkout come later, so submitting shows a "coming soon" state.
 */

export interface SignupStrings {
  businessName: string
  businessPhone: string
  phoneHint: string
  timezone: string
  adminEmail: string
  adminEmailHint: string
  plan: string
  currency: string
  billing: string
  monthly: string
  yearly: string
  /** With "{terms}" and "{privacy}" where the two links go. */
  acceptTerms: string
  termsLink: string
  privacyLink: string
  submit: string
  required: string
  invalidEmail: string
  invalidPhone: string
  mustAccept: string
  comingSoonTitle: string
  comingSoonText: string
  back: string
}

interface Props {
  strings: SignupStrings
  plans: { code: PlanCode; name: string }[]
  currencies: Currency[]
  termsHref: string
  privacyHref: string
}

type Field = 'businessName' | 'phone' | 'timezone' | 'adminEmail' | 'terms'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Digits, spaces, dashes, dots and brackets, optional leading +; 7–15 digits. */
function isPhone(value: string) {
  if (!/^\+?[\d\s().-]+$/.test(value)) {
    return false
  }
  const digits = value.replace(/\D/g, '').length
  return digits >= 7 && digits <= 15
}

/** "I accept the {terms}…" → text with the links in place (any word order). */
function withLinks(template: string, links: Record<string, [label: string, href: string]>) {
  return template.split(/(\{\w+\})/).map((part, index) => {
    const link = links[part.slice(1, -1)]
    return link ? (
      <a key={index} href={link[1]} target="_blank" rel="noopener">
        {link[0]}
      </a>
    ) : (
      part
    )
  })
}

const browserZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'Asia/Dubai'
  }
}

export default function SignupForm({ strings: s, plans, currencies, termsHref, privacyHref }: Props) {
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [timezone, setTimezone] = useState('Asia/Dubai')
  const [adminEmail, setAdminEmail] = useState('')
  const [plan, setPlan] = useState<PlanCode>('PRO')
  const [currency, setCurrency] = useState<Currency>('AED')
  const [interval, setInterval] = useState<Interval>('MONTH')
  const [terms, setTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [done, setDone] = useState(false)

  const zones = useMemo(() => {
    try {
      return Intl.supportedValuesOf('timeZone')
    } catch {
      return ['Asia/Dubai', 'Europe/London', 'Europe/Paris', 'America/New_York']
    }
  }, [])

  // Browser-only defaults: the visitor's zone, remembered billing, and the plan
  // chosen on the pricing page (?plan=PRO&currency=EUR&interval=YEAR).
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setTimezone(browserZone())
    const fromPlan = params.get('plan')
    if (plans.some((p) => p.code === fromPlan)) {
      setPlan(fromPlan as PlanCode)
    }
    const fromCurrency = params.get('currency')
    setCurrency(currencies.includes(fromCurrency as Currency) ? (fromCurrency as Currency) : preferredCurrency())
    const fromInterval = params.get('interval')
    setInterval(fromInterval === 'YEAR' || fromInterval === 'MONTH' ? fromInterval : preferredInterval())
  }, [plans, currencies])

  function validate() {
    const found: Partial<Record<Field, string>> = {}
    if (!businessName.trim()) found.businessName = s.required
    if (!phone.trim()) found.phone = s.required
    else if (!isPhone(phone.trim())) found.phone = s.invalidPhone
    if (!timezone) found.timezone = s.required
    if (!adminEmail.trim()) found.adminEmail = s.required
    else if (!emailPattern.test(adminEmail.trim())) found.adminEmail = s.invalidEmail
    if (!terms) found.terms = s.mustAccept
    return found
  }

  // After a first attempt, errors update as the visitor types.
  useEffect(() => {
    if (submitted) {
      setErrors(validate())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessName, phone, timezone, adminEmail, terms, submitted])

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    const found = validate()
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`signup-${first}`)?.focus()
      return
    }
    rememberCurrency(currency)
    rememberInterval(interval)
    // TODO: POST to the signup endpoint, then redirect to Stripe Checkout.
    setDone(true)
  }

  if (done) {
    return (
      <div className="signup-done" role="status">
        <div className="signup-done-icon" aria-hidden="true">
          ✓
        </div>
        <h2>{s.comingSoonTitle}</h2>
        <p>{s.comingSoonText}</p>
        <button type="button" className="btn btn-ghost" onClick={() => setDone(false)}>
          {s.back}
        </button>
      </div>
    )
  }

  const describedBy = (field: Field, hint?: boolean) =>
    [hint ? `signup-${field}-hint` : '', errors[field] ? `signup-${field}-error` : ''].filter(Boolean).join(' ') ||
    undefined

  const error = (field: Field) =>
    errors[field] ? (
      <span className="error" id={`signup-${field}-error`}>
        {errors[field]}
      </span>
    ) : null

  return (
    <form className="signup-form" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="signup-businessName">{s.businessName}</label>
        <input
          id="signup-businessName"
          className="input"
          autoComplete="organization"
          maxLength={255}
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
          aria-invalid={errors.businessName ? 'true' : undefined}
          aria-describedby={describedBy('businessName')}
        />
        {error('businessName')}
      </div>

      <div className="field">
        <label htmlFor="signup-phone">{s.businessPhone}</label>
        <input
          id="signup-phone"
          className="input"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          dir="ltr"
          maxLength={32}
          placeholder="+971 4 234 5678"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          aria-invalid={errors.phone ? 'true' : undefined}
          aria-describedby={describedBy('phone', true)}
        />
        <span className="hint" id="signup-phone-hint">
          {s.phoneHint}
        </span>
        {error('phone')}
      </div>

      <div className="field">
        <label htmlFor="signup-timezone">{s.timezone}</label>
        <select
          id="signup-timezone"
          className="input"
          value={timezone}
          onChange={(event) => setTimezone(event.target.value)}
          aria-invalid={errors.timezone ? 'true' : undefined}
          aria-describedby={describedBy('timezone')}
        >
          {zones.map((zone) => (
            <option key={zone} value={zone}>
              {zone.replaceAll('_', ' ')}
            </option>
          ))}
        </select>
        {error('timezone')}
      </div>

      <div className="field">
        <label htmlFor="signup-adminEmail">{s.adminEmail}</label>
        <input
          id="signup-adminEmail"
          className="input"
          type="email"
          autoComplete="email"
          dir="ltr"
          value={adminEmail}
          onChange={(event) => setAdminEmail(event.target.value)}
          aria-invalid={errors.adminEmail ? 'true' : undefined}
          aria-describedby={describedBy('adminEmail', true)}
        />
        <span className="hint" id="signup-adminEmail-hint">
          {s.adminEmailHint}
        </span>
        {error('adminEmail')}
      </div>

      <div className="signup-row">
        <div className="field">
          <label htmlFor="signup-plan">{s.plan}</label>
          <select id="signup-plan" className="input" value={plan} onChange={(event) => setPlan(event.target.value as PlanCode)}>
            {plans.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="signup-currency">{s.currency}</label>
          <select
            id="signup-currency"
            className="input"
            value={currency}
            onChange={(event) => setCurrency(event.target.value as Currency)}
          >
            {currencies.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="signup-interval">{s.billing}</label>
          <select
            id="signup-interval"
            className="input"
            value={interval}
            onChange={(event) => setInterval(event.target.value as Interval)}
          >
            <option value="MONTH">{s.monthly}</option>
            <option value="YEAR">{s.yearly}</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="checkbox" htmlFor="signup-terms">
          <input
            id="signup-terms"
            type="checkbox"
            checked={terms}
            onChange={(event) => setTerms(event.target.checked)}
            aria-invalid={errors.terms ? 'true' : undefined}
            aria-describedby={describedBy('terms')}
          />
          <span>{withLinks(s.acceptTerms, { terms: [s.termsLink, termsHref], privacy: [s.privacyLink, privacyHref] })}</span>
        </label>
        {error('terms')}
      </div>

      <button type="submit" className="btn btn-primary signup-submit">
        {s.submit} <span className="arrow" aria-hidden="true">→</span>
      </button>
    </form>
  )
}
