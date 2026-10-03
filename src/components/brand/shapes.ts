/**
 * Logo geometry. "Sama" (سماء) is the sky: a thin, calm arc (a horizon, a sky
 * dome) above the name. Serious and simple: solid colours, no gradient.
 */
import { letterS, wordmark } from './paths.ts'

export const navy = '#0B2545'
export const teal = '#0F766E'

/** The ink colour of the logo. */
export type LogoTone = 'navy' | 'white' | 'black'

/** The arc: the teal accent, or the same colour as the lettering. */
export type ArcColor = 'teal' | 'same'

export const toneColor: Record<LogoTone, string> = { navy, white: '#ffffff', black: '#000000' }

/**
 * A shallow circular arc, `width` wide, apex at (cx, top), ends `sag` lower:
 * a horizon, not a rainbow.
 */
export function arcPath(cx: number, top: number, width: number, sag: number): string {
  const radius = (width * width) / (8 * sag) + sag / 2
  const round = (n: number) => Math.round(n * 100) / 100
  return `M${round(cx - width / 2)} ${round(top + sag)}A${round(radius)} ${round(radius)} 0 0 1 ${round(cx + width / 2)} ${round(top + sag)}`
}

/** The wordmark with its arc, in the wordmark's units (100-unit type). */
export const stacked = (() => {
  const stroke = wordmark.capHeight * 0.07
  const width = wordmark.width * 0.76
  const sag = 22
  const gap = 12 // between the arc's ends and the top of the letters
  const top = -(gap + sag + stroke / 2)
  const pad = stroke
  return {
    arc: arcPath(wordmark.width / 2, top, width, sag),
    stroke,
    viewBox: `0 ${top - pad} ${wordmark.width} ${wordmark.height - top + pad}`,
    width: wordmark.width,
    height: wordmark.height - top + pad,
  }
})()

/**
 * The icon (64×64): a bold "s" with the same arc above it. Below 32 px the arc
 * would blur, so the small version is a bigger "s" alone.
 */
function iconLayout(withArc: boolean) {
  const sHeight = withArc ? 29 : 38
  const scale = sHeight / letterS.height
  const sWidth = letterS.width * scale
  const sTop = withArc ? 24 : (64 - sHeight) / 2
  return {
    s: `translate(${(64 - sWidth) / 2} ${sTop}) scale(${scale})`,
    arc: withArc ? arcPath(32, 12, 34, 3.6) : null,
    arcStroke: 3.2,
  }
}

export const icon = { large: iconLayout(true), small: iconLayout(false) }

export { letterS, wordmark }
