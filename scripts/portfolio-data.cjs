// Saca de cada *ProjectPage.jsx el texto en espanol (titulo, lugar, parrafos y datos)
// para montar el portfolio en PDF (scripts/build-portfolio.cjs).
const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname, '..', 'src', 'components')
const routerSrc = fs.readFileSync(path.join(dir, 'AppPageRouter.jsx'), 'utf8')
const map = Object.fromEntries([...routerSrc.matchAll(/'project-([a-z0-9-]+)': (\w+),/g)].map((m) => [m[2], m[1]]))
const out = {}
for (const [comp, id] of Object.entries(map)) {
  const s = fs.readFileSync(path.join(dir, comp + '.jsx'), 'utf8')
  const i = s.search(/(const\s+copy|export const \w+Copy)\s*=\s*\{/)
  let j = s.indexOf('{', i), d = 0, k = j
  for (; k < s.length; k++) {
    const c = s[k]
    if (c === "'" || c === '"' || c === '`') { const q = c; k++; while (s[k] !== q) { if (s[k] === '\\') k++; k++ } continue }
    if (c === '{') d++
    if (c === '}') { d--; if (!d) break }
  }
  const link = ''
  const copy = eval('(' + s.slice(j, k + 1) + ')')
  const es = copy.es
  const facts = (es.facts || []).map((f) => Array.isArray(f) ? { label: f[0], value: f[1] } : f)
    .filter((f) => !/proyecto|launch/i.test(f.label))
  const image = (s.match(/['"](\/pages\/proyectos\/[^'"]+)['"]/) || [])[1]
  out[id] = { title: es.title, location: es.location, paragraphs: es.paragraphs, facts, image }
}
module.exports = out
if (require.main === module) console.log(JSON.stringify(out, null, 1))
