import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function ShopPage({ activePage, onBack, onNavigate }) {
  const [isSpanish, setIsSpanish] = useState(false)
  const { language } = useLanguage()
  const comingSoon = { es: 'Próximamente...', en: 'Coming soon...', it: 'Prossimamente...' }[language]

  return (
    <section className="projects-page shop-page">
      <div className="shop-page-backdrop" aria-hidden="true">
        <img
          className="shop-page-background"
          src="/pages/fondo_tienda.png"
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
      </div>

      <PageFooter />
    </section>
  )
}
