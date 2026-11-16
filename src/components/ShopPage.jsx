import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function ShopPage({ activePage, onBack, onNavigate }) {
  const [isSpanish, setIsSpanish] = useState(false)
  const { language } = useLanguage()
  const notify = {
    es: { label: 'AVÍSAME CUANDO ABRA', subject: 'Avísame cuando abra la tienda', body: 'Hola, M047: quiero que me aviséis cuando abra la tienda online.' },
    en: { label: 'LET ME KNOW WHEN IT OPENS', subject: 'Let me know when the shop opens', body: 'Hello, M047: please let me know when the online shop opens.' },
    it: { label: 'AVVISAMI QUANDO APRE IL NEGOZIO ONLINE', subject: 'Avvisatemi quando apre il negozio', body: 'Ciao, M047: avvisatemi quando apre il negozio online.' },
  }[language]
  const comingSoon = { es: 'Próximamente...', en: 'Coming soon...', it: 'Prossimamente...' }[language]

  return (
    <section className="projects-page shop-page">
      <div className="shop-page-backdrop" aria-hidden="true">
        <img
          className="shop-page-background"
          src="/pages/fondo_tienda.webp"
          alt=""
          aria-hidden="true"
        />
      </div>

      <PageHeader
        activePage={activePage}
        isSpanish={isSpanish}
        onBack={onBack}
        onNavigate={onNavigate}
        onSetSpanish={setIsSpanish}
      />

      <div className="shop-page-stage">
        <div className="shop-page-message">{comingSoon}</div>
        <a className="academy-button shop-page-notify" href={`mailto:info@m047.es?subject=${encodeURIComponent(notify.subject)}&body=${encodeURIComponent(notify.body)}`}>
          {notify.label}
        </a>
      </div>

      <PageFooter />
    </section>
  )
}
