/**
 * Fades and slides [data-reveal] elements in as they scroll into view.
 * With reduced motion, the CSS shows them straight away.
 */
const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

if (!('IntersectionObserver' in window)) {
  elements.forEach((element) => element.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  elements.forEach((element) => observer.observe(element))
}
