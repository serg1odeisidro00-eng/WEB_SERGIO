import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { legalCopy, legalData, legalPages } from '../content/legal'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function LegalPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()
  const pages = legalPages[language] ?? legalPages.es
  const page = pages[activePage] ?? pages.legal
  const copy = legalCopy[language] ?? legalCopy.es

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  return (
    <section className="projects-page legal-page">
      <PageHeader activePage={activePage} onBack={onBack} onNavigate={onNavigate} />
      <article className="legal">
        <h1 className="legal-title">{page.title}</h1>
        {copy.prevails ? <p className="legal-note">{copy.prevails}</p> : null}
        {page.sections.map(([heading, paragraphs]) => (
          <section key={heading} className="legal-section">
            <h2>{heading}</h2>
            {paragraphs.map((text) => <p key={text.slice(0, 30)}>{text}</p>)}
          </section>
        ))}
        <p className="legal-note">{copy.updated}: {legalData.updated[language] ?? legalData.updated.es}.</p>
      </article>
      <PageFooter />
    </section>
  )
}
