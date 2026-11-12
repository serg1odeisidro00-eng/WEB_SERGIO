// Genera public/m047-portfolio.pdf a partir de los contenidos de la web.
// Uso: node scripts/build-portfolio.cjs [imagen_portada.jpg]
// (necesita Playwright/Chromium; la portada por defecto es public/og/m047.jpg)
const fs = require('fs')
const path = require('path')
const { chromium } = require('playwright')

const root = path.join(__dirname, '..')
const pub = (p) => 'file://' + path.join(root, 'public', p)
const data = require('./portfolio-data.cjs')
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')

;(async () => {
  const { projectItems } = await import(path.join(root, 'src/content/projects.js'))
  const cover = process.argv[2] ? 'file://' + path.resolve(process.argv[2]) : pub('og/m047.jpg')
  const studio = fs.readFileSync(path.join(root, 'src/components/StudioPage.jsx'), 'utf8')
  const studioText = eval(studio.slice(studio.indexOf('const studioGroups = ') + 21, studio.indexOf('\n]\n') + 2)).flat()

  const projectPages = projectItems.map((item, n) => {
    const d = data[item.id]
    if (!d) return ''
    const icon = item.iconSrc
    return `<section class="page project">
      <div class="photo"><img src="${pub(item.imageSrc.slice(1))}"></div>
      <div class="info">
        <img class="diagram" src="${pub(icon.slice(1))}">
        <h2>${esc(d.title)}</h2>
        <p class="loc">${esc(d.location)}</p>
        ${d.paragraphs.map((p) => `<p class="txt">${esc(p)}</p>`).join('')}
        <div class="facts">${d.facts.map((f) => `<div><b>${esc(f.label)}</b><span>${esc(f.value)}</span></div>`).join('')}</div>
      </div>
      <footer><span>ESTUDIO M047</span><span>${String(n + 1).padStart(2, '0')}</span></footer>
    </section>`
  }).join('')

  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
    @font-face { font-family: DDIN; src: url('${pub('fonts/condensed/D-DINCondensed.woff2')}'); font-weight: 400; }
    @font-face { font-family: DDIN; src: url('${pub('fonts/condensed/D-DINCondensed-Bold.woff2')}'); font-weight: 700; }
    @page { size: 297mm 210mm; margin: 0; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: DDIN, sans-serif; color: #111; }
    .page { position: relative; width: 297mm; height: 210mm; padding: 14mm 14mm 16mm; page-break-after: always; overflow: hidden; }
    footer { position: absolute; left: 14mm; right: 14mm; bottom: 7mm; display: flex; justify-content: space-between; font-size: 8pt; color: #838281; letter-spacing: .03em; }
    .cover img { width: 100%; height: 150mm; object-fit: cover; display: block; }
    .cover h1 { margin: 7mm 0 0; font-size: 46pt; line-height: .9; }
    .cover p { margin: 1.5mm 0 0; font-size: 13pt; color: #555; }
    .studio { display: grid; grid-template-columns: 1.1fr 1fr; gap: 10mm; }
    .studio img { width: 100%; height: 170mm; object-fit: cover; }
    .studio h2, .contact h2 { margin: 0 0 6mm; font-size: 40pt; line-height: .9; }
    .studio p { margin: 0 0 3.2mm; font-size: 10.5pt; line-height: 1.25; }
    .project { display: grid; grid-template-columns: 1.6fr 1fr; gap: 10mm; align-items: start; }
    .project .photo { height: 160mm; }
    .info { height: 170mm; }
    .project .photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .info { display: flex; flex-direction: column; }
    .diagram { width: 62mm; height: auto; margin: -2mm 0 2mm -6mm; }
    .info h2 { margin: 0; font-size: 22pt; line-height: .95; }
    .loc { margin: 1mm 0 4mm; font-weight: 700; font-size: 9.5pt; }
    .txt { margin: 0 0 2.6mm; font-size: 9.5pt; line-height: 1.22; }
    .facts { margin-top: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 2.5mm 6mm; font-size: 8.5pt; }
    .facts b { display: block; } .facts span { color: #333; }
    .contact { display: grid; align-content: center; justify-items: start; }
    .contact p { margin: 0 0 2mm; font-size: 15pt; }
    .contact .muted { color: #838281; }
  </style></head><body>
    <section class="page cover"><img src="${cover}"><h1>ESTUDIO M047</h1><p>Diseño de interiores · Paisajismo · Escenografía · Diseño gráfico · Dirección de arte</p><p>Portfolio ${new Date().getFullYear()} · Madrid</p></section>
    <section class="page studio"><img src="${pub('pages/estudio.png')}"><div><h2>M047</h2>${studioText.map((p) => `<p>${esc(p)}</p>`).join('')}</div><footer><span>ESTUDIO M047</span><span>José Luis de Isidro con su hijo Sergio de Isidro</span></footer></section>
    ${projectPages}
    <section class="page contact"><h2>Cuéntanos tu proyecto</h2><p>contacto@m047.es</p><p>(+34) 633 878 755</p><p>28047 Madrid, España</p><p class="muted">m047.es · Instagram @m047.studio · Behance M047</p></section>
  </body></html>`

  const tmp = path.join(require('os').tmpdir(), 'm047-portfolio.html')
  fs.writeFileSync(tmp, html)
  const browser = await chromium.launch({ args: ['--allow-file-access-from-files'] })
  const page = await browser.newPage()
  await page.goto('file://' + tmp, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  // Las imagenes se pasan a JPEG antes de imprimir para que el PDF pese poco.
  await page.evaluate(async () => {
    for (const img of document.images) {
      await img.decode().catch(() => {})
      const scale = Math.min(1, 1600 / img.naturalWidth)
      const c = document.createElement('canvas')
      c.width = Math.round(img.naturalWidth * scale)
      c.height = Math.round(img.naturalHeight * scale)
      const x = c.getContext('2d')
      x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height)
      x.drawImage(img, 0, 0, c.width, c.height)
      img.src = c.toDataURL('image/jpeg', 0.84)
      await img.decode().catch(() => {})
    }
  })
  const out = path.join(root, 'public', 'm047-portfolio.pdf')
  await page.pdf({ path: out, width: '297mm', height: '210mm', printBackground: true })
  await browser.close()
  console.log('PDF:', out, Math.round(fs.statSync(out).size / 1024), 'KB')
})()
