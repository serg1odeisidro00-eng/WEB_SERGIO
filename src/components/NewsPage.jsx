import { useState } from 'react'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function NewsPage({ activePage, onBack, onNavigate }) {
  const [isSpanish, setIsSpanish] = useState(false)

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
        <div className="shop-page-message">Coming soon...</div>
      </div>

      <PageFooter />
    </section>
  )
}
