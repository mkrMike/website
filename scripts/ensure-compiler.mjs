/**
 * Astro 7 compiles .astro files with a native module. Some Windows machines
 * (Smart App Control / Application Control) block it; Astro then falls back to
 * its WebAssembly build, which isn't installed by default. Install it only
 * where the native one can't load. Runs after `npm install`.
 */
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

try {
  await import('@astrojs/compiler-binding')
} catch {
  const { version } = JSON.parse(
    readFileSync(new URL('../node_modules/@astrojs/compiler-binding/package.json', import.meta.url), 'utf8'),
  )
  console.log(`Native Astro compiler blocked: installing the WebAssembly build (${version}).`)
  execSync(`npm install --no-save --force @astrojs/compiler-binding-wasm32-wasi@${version}`, { stdio: 'inherit' })
}
