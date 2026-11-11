import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { legalData, legalPages } from '../content/legal'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const onlySpanish = {
  en: 'This legal text is available in Spanish only.',
  it: 'Questo testo legale è disponibile solo in spagnolo.',
}

export default function LegalPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()
  const page = legalPages[activePage] ?? legalPages.legal

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  return (
    <section className="projects-page legal-page" lang="es">
      <PageHeader activePage={activePage} onBack={onBack} onNavigate={onNavigate} />
      <article className="legal">
        <h1 className="legal-title">{page.title}</h1>
        {onlySpanish[language] ? <p className="legal-note" lang={language}>{onlySpanish[language]}</p> : null}
        {page.sections.map(([heading, paragraphs]) => (
          <section key={heading} className="legal-section">
            <h2>{heading}</h2>
            {paragraphs.map((text) => <p key={text.slice(0, 30)}>{text}</p>)}
          </section>
        ))}
        <p className="legal-note">Última actualización: {legalData.updated}.</p>
      </article>
      <PageFooter />
    </section>
  )
}
