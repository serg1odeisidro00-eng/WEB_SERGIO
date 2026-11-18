// Catalogo de servicios M047 con la estetica del portfolio de Sergio
// (bloques negros con numero, titulos verticales en franja negra, pies numerados).
const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')
const P = 'file:///home/user/WEB_SERGIO/public'
const OUT = process.argv[2]
const foto = (id) => `${P}/proyectos/fotos/${id}.webp`

const css = `
@font-face{font-family:D;src:url(${P}/fonts/condensed/D-DINCondensed.woff2)}
@font-face{font-family:D;font-weight:700;src:url(${P}/fonts/condensed/D-DINCondensed-Bold.woff2)}
@page{size:A4;margin:0}
*{box-sizing:border-box}
html,body{margin:0;color:#111;font-family:'Liberation Sans',Arial,sans-serif}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;background:#fff}
.k{font-family:D;font-weight:700;letter-spacing:-.025em;line-height:.86}
.num{position:absolute;background:#111;color:#fff;font-family:D;font-weight:700;letter-spacing:-.04em;line-height:1;display:flex;align-items:center;justify-content:flex-end}
.band{position:absolute;left:0;width:15mm;background:#111;color:#fff;display:flex;align-items:center;justify-content:center}
.band span{writing-mode:vertical-rl;transform:rotate(180deg);font-family:D;font-weight:700;letter-spacing:-.02em;font-size:38pt;white-space:nowrap}
.cap{font-size:8.6pt;font-weight:700;letter-spacing:.005em}
.cap b{display:inline-block;width:5.5mm}
.txt{font-size:8.2pt;line-height:1.38;color:#6b6b6b;font-weight:400}
.txt.just{text-align:justify;hyphens:auto}
.lbl{font-size:6.8pt;font-weight:700;letter-spacing:.02em;text-transform:uppercase;margin-bottom:2mm}
.vcap{position:absolute;writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}
img{display:block;object-fit:cover}
.for{margin:0;padding:0;list-style:none}
.for li{font-size:8.2pt;line-height:1.35;color:#6b6b6b;padding:1.3mm 0;border-top:.6pt solid #cfcfcf}
.for li:last-child{border-bottom:.6pt solid #cfcfcf}
.for li strong{color:#111;font-weight:700}
.foot{position:absolute;bottom:7mm;right:12mm;font-size:6.5pt;color:#8a8a8a;letter-spacing:.06em}
`

const foot = (n) => `<div class=foot>M047 · CATÁLOGO DE SERVICIOS · ${n}</div>`
const pages = []

// 1 · PORTADA (como la del portfolio: imagen a sangre + datos de revista arriba a la derecha)
pages.push(`<div class=page>
  <img src="${P}/../docs/perfil-google/portada_edificio.jpg" style="position:absolute;left:0;top:0;width:210mm;height:297mm;object-position:46% 50%;filter:grayscale(1) contrast(1.02)">
  <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.94) 0,rgba(255,255,255,.94) 41%,rgba(255,255,255,0) 58%)"></div>
  <div style="position:absolute;right:12mm;top:12mm;text-align:right;font-size:7pt;line-height:1.3;color:#111">Estudio M047<br>Aluche · Madrid<br>Edición 2026<br><br>Interiorismo<br>Dirección de arte<br>Diseño gráfico<br>Paisajismo<br>Academia<br>Escenografía</div>
  <div class=k style="position:absolute;left:12mm;top:20mm;font-size:118pt">Catá-<br>logo</div>
  <div class=num style="left:0;top:118mm;width:122mm;height:30mm;font-size:66pt;padding-right:6mm">Servicios</div>
  <div style="position:absolute;left:128mm;top:122mm;font-size:8.2pt;line-height:1.35;color:#6b6b6b;width:68mm">Diseñamos el espacio y la imagen de un proyecto como una sola cosa: cómo se vive, cómo se ve y cómo se cuenta.</div>
</div>`)

// 2 · ESTUDIO + ÍNDICE (como la primera hoja del portfolio: CV a la izquierda, índice a la derecha)
const idx = [
  ['01', 'Diseño de interiores', 'nave-16', '50% 55%'],
  ['02', 'Dirección de arte', 'album-musical', '50% 40%'],
  ['03', 'Diseño gráfico', 'hargok', '50% 45%'],
  ['04', 'Paisajismo', 'miteco', '50% 50%'],
  ['05', 'Academia', '__acad', '50% 30%'],
  ['06', 'Escenografía', 'ufv', '50% 40%'],
]
pages.push(`<div class=page>
  <div style="position:absolute;left:12mm;top:14mm;width:80mm">
    <div class=lbl>Estudio</div>
    <p class="txt just" style="margin:0 0 6mm">Estudio M047 es un estudio de diseño de Aluche (Madrid) fundado por un padre y un hijo, arquitectos de interiores formados en la ETSAM. Trabajamos el interiorismo, la dirección de arte, el diseño gráfico, el paisajismo y la escenografía con un mismo criterio: soluciones creativas, rebeldes y útiles, cuidadas desde la primera idea hasta el resultado final.</p>
    <div class=lbl>Quién es quién</div>
    <p class=txt style="margin:0 0 1mm"><strong style="color:#111">Sergio de Isidro</strong><br>Cofundador · Interiorismo y dirección creativa<br>Grado en Diseño de Interiores, ETSAM-UPM (2020-2024)</p>
    <p class=txt style="margin:2.5mm 0 6mm"><strong style="color:#111">José Luis de Isidro</strong><br>Cofundador · Interiorismo y proyecto<br>Arquitectura de Interiores, ETSAM</p>
    <div class=lbl>Reconocimientos</div>
    ${[
      ['2025', 'Profesor adjunto del Grado en Diseño de Interiores (GDI) de la ETSAM.'],
      ['2024', 'Proyecto ganador del concurso de la ETSAM para la rehabilitación de su capilla.'],
      ['2024', 'Cartel finalista de las fiestas locales de San Rafael (Segovia).'],
      ['2023', 'Cartel seleccionado por la UFV para «Los intereses creados»; escenografía finalista.'],
      ['2023', 'Guía en Open House Madrid.'],
      ['2022', 'Mención honorífica y finalista en «La oficina del futuro» de Steelcase.'],
      ['2022', 'Cartel seleccionado por FAMAFEST para la campaña benéfica por Ucrania, expuesto en Matadero.'],
    ].map(([y, t]) => `<p class=txt style="margin:0 0 2mm"><span style="color:#111">${y}</span><br>${t}</p>`).join('')}
  </div>
  <div style="position:absolute;left:104mm;top:14mm;width:94mm">
    <div class=k style="font-size:44pt">Índice</div>
    <div style="height:9mm;background:#111;width:52mm;margin-top:1.5mm"></div>
  </div>
  ${idx.map(([n, t, id, pos], i) => `
    <div style="position:absolute;left:104mm;top:${52 + i * 37}mm;width:94mm;height:30mm;display:flex;align-items:flex-end;gap:3.5mm">
      <img src="${id === '__acad' ? P + '/pages/academia_aula.webp' : foto(id)}" style="width:52mm;height:15mm;object-position:${pos}">
      <div class=k style="font-size:23pt;line-height:.9">${n}<br>${t}</div>
    </div>`).join('')}
  ${foot(2)}
</div>`)

// Paginas de departamento
const section = ({ n, title, band, lead, forWho, works, layout }) => `<div class=page>
  <div class=band style="top:0;bottom:0"><span>${band}</span></div>
  <div class=num style="right:0;top:12mm;width:58mm;height:27mm;font-size:76pt;padding-right:5mm">${n}</div>
  <div style="position:absolute;left:24mm;top:13mm;width:108mm">
    <div class=k style="font-size:34pt">${title}</div>
    <p class="txt just" style="margin:5mm 0 0">${lead}</p>
  </div>
  <div style="position:absolute;left:24mm;top:58mm;width:108mm">
    <div class=lbl>Para quién</div>
    <ul class=for>${forWho.map(([a, b]) => `<li><strong>${a}</strong> · ${b}</li>`).join('')}</ul>
  </div>
  ${layout(works)}
  ${foot(n)}
</div>`

const work = (w, i) => `<div class=cap><b>${i + 1}</b>${w.t}</div><div class=txt style="margin:1mm 0 0 5.5mm">${w.d}</div>`

// maqueta A: una grande + dos pequenas (como Diseno de interiores del portfolio)
const layoutA = (ws) => `
  <img src="${foto(ws[0].id)}" style="position:absolute;left:24mm;top:96mm;width:174mm;height:88mm;object-position:${ws[0].pos || '50% 50%'}">
  <div style="position:absolute;left:24mm;top:187mm;width:150mm">${work(ws[0], 0)}</div>
  <img src="${foto(ws[1].id)}" style="position:absolute;left:24mm;top:216mm;width:84mm;height:50mm;object-position:${ws[1].pos || '50% 50%'}">
  <div class=vcap style="left:110mm;top:216mm;height:50mm"><div class=cap>2&nbsp;&nbsp;&nbsp;${ws[1].t}</div></div>
  <div class=txt style="position:absolute;left:24mm;top:268mm;width:84mm">${ws[1].d}</div>
  <img src="${foto(ws[2].id)}" style="position:absolute;left:120mm;top:216mm;width:78mm;height:50mm;object-position:${ws[2].pos || '50% 50%'}">
  <div style="position:absolute;left:120mm;top:268mm;width:78mm">${work(ws[2], 2)}</div>`

// maqueta B: rejilla de cuatro (grafico)
const layoutB = (ws) => ws.slice(0, 4).map((w, i) => {
  const x = 24 + (i % 2) * 89, y = 100 + Math.floor(i / 2) * 88
  return `<img src="${foto(w.id)}" style="position:absolute;left:${x}mm;top:${y}mm;width:85mm;height:54mm;object-position:${w.pos || '50% 50%'}">
  <div style="position:absolute;left:${x}mm;top:${y + 56}mm;width:85mm">${work(w, i)}</div>`
}).join('')

// maqueta C: dos grandes apiladas
const layoutC = (ws) => ws.slice(0, 2).map((w, i) => `
  <img src="${foto(w.id)}" style="position:absolute;left:24mm;top:${100 + i * 92}mm;width:${i ? 140 : 174}mm;height:${i ? 74 : 72}mm;object-position:${w.pos || '50% 50%'}">
  <div style="position:absolute;left:24mm;top:${174 + i * 92 + (i ? 2 : 0)}mm;width:140mm">${work(w, i)}</div>`).join('')

pages.push(section({
  n: '01', title: 'Diseño de interiores', band: 'Diseño de interiores',
  lead: 'Proyectos de interior pensados desde el uso y la atmósfera: distribución, materiales, luz y mobiliario resueltos con un mismo concepto. Acompañamos todo el proceso, de la primera idea a los planos, las imágenes y el seguimiento de la obra.',
  forWho: [['Tu casa', 'vivienda, reforma y mobiliario a medida'], ['Tu negocio', 'local, oficina o stand'], ['Tu evento', 'espacios efímeros y exposiciones']],
  works: [
    { id: 'nave-16', t: 'Residencia artística en Nave 16 · Madrid', d: 'Transforma la nave de Matadero Madrid en una ciudad interior para artistas, inspirada en la memoria productiva del lugar y en la vida de los antiguos mercados y plazas.' },
    { id: 'capilla', t: 'Diseño e iluminación de capilla · Madrid', d: 'Proyecto ganador del concurso de la ETSAM-UPM: un espacio de recogimiento y silencio, acogedor y protegido, para la oración, la reflexión y la pausa.' },
    { id: 'telefonica', t: 'Oficinas en Edificio Telefónica · Madrid', d: 'Basado en el Metabolismo japonés de Kisho Kurokawa y en las utopías de Archigram: cápsulas independientes que se montan, sustituyen o combinan.' },
  ],
  layout: layoutA,
}))

pages.push(section({
  n: '02', title: 'Dirección de arte', band: 'Dirección de arte',
  lead: 'La identidad de un proyecto más allá del logotipo: el universo visual que une espacio, gráfica, objeto y relato. Definimos el concepto, la paleta, los materiales y las piezas para que todo cuente la misma historia.',
  forWho: [['Tu marca', 'identidad y su espacio'], ['Tu lanzamiento', 'disco, producto o campaña'], ['Tu escena', 'teatro, escaparate o rodaje']],
  works: [
    { id: 'album-musical', t: 'Dirección de arte para álbum musical · Madrid', d: 'Un universo visual que une portada, identidad gráfica y camiseta en una misma narrativa: paisaje rural, texturas envejecidas, sellos postales y una paleta cálida.' },
    { id: 'soldrink', t: 'Branding y etiquetas para bodega · Toledo', d: 'Identidad para una marca de cócteles embotellados que entiende la bebida como una experiencia social, espontánea y llena de energía.' },
  ],
  layout: layoutC,
}))

pages.push(section({
  n: '03', title: 'Diseño gráfico', band: 'Diseño gráfico',
  lead: 'Identidad corporativa, carteles, tipografía, packaging, ilustración y objeto. Cada pieza nace de una idea propia y se dibuja a mano antes de pasar a digital.',
  forWho: [['Tu marca', 'logotipo, identidad corporativa y aplicaciones'], ['Tu cartel', 'cultura, fiestas y campañas'], ['Tu producto', 'packaging, editorial y objeto']],
  works: [
    { id: 'el-rastro', t: 'Identidad corporativa El Rastro', d: 'Logo e identidad para una residencia artística: una tipografía de líneas rectas que recuerda a la fachada de un edificio.' },
    { id: 'hargok', t: 'Tipografía Hargok', d: 'Cartel tipográfico y diseño de una tipografía inspirada en la expresión del cuerpo humano.' },
    { id: 'cartel-teatro', t: 'Cartel de teatro · UFV', d: 'Seleccionado por la UFV para «Los intereses creados» de Jacinto Benavente.' },
    { id: 'haz', t: 'Lámpara HAZ', d: 'Lámpara de compañía de luz indirecta, de madera, papel pergamino y cartón reciclados.' },
  ],
  layout: layoutB,
}))

pages.push(section({
  n: '04', title: 'Paisajismo', band: 'Paisajismo',
  lead: 'Espacios exteriores, jardines y paisaje urbano pensados con la vegetación como material de proyecto: recorridos, estancias y especies elegidas para cada lugar y cada estación.',
  forWho: [['Tu jardín', 'patios, terrazas y jardines privados'], ['Tu ciudad', 'espacio público y paisaje urbano'], ['Tu institución', 'entornos de edificios y equipamientos']],
  works: [
    { id: 'miteco', t: 'Proyecto de paisajismo MITECO · Madrid', d: 'Marea: una estructura continua inspirada en el anillo verde de Madrid, que activa el lugar sin fragmentarlo y conecta distintas actividades.' },
    { id: 'playground', t: 'Vivienda experimental y Playground · Pontevedra', d: 'Pabellón efímero que hace visible la compleja red de túneles y conexiones de un hormiguero y la transforma en una experiencia espacial abierta.' },
  ],
  layout: layoutC,
}))

pages.push(section({
  n: '05', title: 'Academia', band: 'Academia',
  lead: 'Abrimos el estudio como mesa técnica de trabajo individual para estudiantes de diseño y proyectistas emergentes. Proyectar con criterio, defender con resultados.',
  forWho: [['Contraste', 'revisión monográfica previa a entrega · 1 h 30 min'], ['Seguimiento', 'acompañamiento en proyectos de curso · bono mensual'], ['Dirección de TFG', 'del concepto al discurso final · por fases'], ['Portfolio y venta', 'estructura, edición y defensa · pack de 3 sesiones']],
  works: [
    { id: 'el-bosque', t: 'Centro cultural El Bosque · ETSAM', d: 'Propuesta ganadora de un concurso interno de la ETSAM.' },
    { id: 'cross', t: 'Silla CROSS · ETSAM', d: 'Silla baja de madera de chopo con uniones machihembradas y encoladas.' },
  ],
  layout: (ws) => `
    <img src="${P}/pages/academia_aula.webp" style="position:absolute;left:24mm;top:108mm;width:174mm;height:100mm;object-fit:contain;object-position:50% 50%">
    <div class=txt style="position:absolute;left:24mm;top:212mm;width:174mm">Online o presencial, en el estudio de Aluche. Tarifas a consultar según formato y fase del proyecto.</div>`,
}))

pages.push(section({
  n: '06', title: 'Escenografía', band: 'Escenografía',
  lead: 'Espacios para contar algo durante un tiempo: teatro, stands, exposiciones e instalaciones efímeras. Pensadas para montarse, desmontarse y sorprender.',
  forWho: [['Tu obra', 'escenografía para teatro y eventos'], ['Tu stand', 'ferias y puntos de venta temporales'], ['Tu exposición', 'espacios expositivos e instalaciones']],
  works: [
    { id: 'ufv', t: 'Escenografía UFV · Madrid', d: 'Escenografía finalista para «Los intereses creados»: sugiere los espacios sin construirlos por completo, con elementos reconocibles en cada escena.' },
    { id: 'efimero', t: 'Stand efímero de venta · Madrid', d: 'Stand de SAÇAÍ: materiales cálidos, formas esenciales y una atmósfera de refugio, como un lugar de pausa dentro del ritmo cotidiano.' },
    { id: 'espacio-expositivo', t: 'Espacio expositivo temporal 2021 · Madrid', d: 'Mangle: inspirado en las raíces entrelazadas de los manglares, explora la repetición modular y el equilibrio entre orden y aparente caos.' },
  ],
  layout: layoutA,
}))

// Contraportada / contacto
pages.push(`<div class=page>
  <div class=num style="left:0;top:14mm;width:120mm;height:34mm;font-size:96pt;padding-right:6mm">M047</div>
  <div class=k style="position:absolute;left:12mm;top:70mm;font-size:60pt">¿Tienes un<br>proyecto<br>en mente?</div>
  <div style="height:9mm;background:#111;width:70mm;position:absolute;left:12mm;top:136mm"></div>
  <div style="position:absolute;left:12mm;top:150mm;width:120mm">
    <div class=lbl>Cuéntanoslo</div>
    <p class=txt style="font-size:10pt;line-height:1.6;color:#111;margin:0">contacto@m047.es<br>+34 633 878 755<br>www.m047.es<br>Instagram @m047.studio</p>
    <p class=txt style="margin:6mm 0 0">Presupuesto a medida según proyecto.<br>Estudio M047 · Aluche, Madrid.</p>
  </div>
  <img src="${P}/../docs/perfil-google/portada_edificio.jpg" style="position:absolute;left:0;bottom:0;width:210mm;height:84mm;object-position:46% 78%;filter:grayscale(1)">
</div>`)

const html = `<!doctype html><html lang=es><head><meta charset=utf-8><style>${css}</style></head><body>${pages.join('')}</body></html>`
const htmlPath = path.join(path.dirname(OUT), 'catalogo.html')
fs.writeFileSync(htmlPath, html)
;(async () => {
  const b = await chromium.launch()
  const p = await b.newPage()
  await p.goto('file://' + htmlPath, { waitUntil: 'networkidle' })
  await p.evaluate(() => document.fonts.ready)
  await p.pdf({ path: OUT, format: 'A4', printBackground: true, preferCSSPageSize: true })
  await b.close()
})()
