import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PageFooter from './PageFooter'
import ProjectImage from './ProjectImage'
import ProjectPager from './ProjectPager'
import PageHeader from './PageHeader'
import ProjectsFilterBar from './ProjectsFilterBar'
import ProjectBackLink from './ProjectBackLink'
import { getItalianProjectContent } from '../content/italianProjectContent'

export default function ProjectDetailPage({ onBack, onNavigate, activeFilter, image, copy, variants }) {
  const { language } = useLanguage()
  const [variantIndex, setVariantIndex] = useState(0)
  const selectedVariant = variants?.[variantIndex]
  const selectedCopy = selectedVariant?.copy ?? copy
  const selectedImage = selectedVariant?.image ?? image
  const content = language === 'it' ? getItalianProjectContent(selectedCopy) : selectedCopy[language] ?? selectedCopy.en

  return (
    <section className="projects-page project-detail-page">
      <PageHeader activePage="projects" onBack={onBack} onNavigate={onNavigate} />
      <ProjectsFilterBar activeFilter={activeFilter} /><ProjectBackLink filterId={activeFilter} />
      <div className="project-detail-layout">
        <div className="project-detail-visual">
          <ProjectImage src={selectedImage} alt={content.alt} />
        </div>
        <aside className="project-detail-sidebar">
          <h1>{content.title}</h1>
          <p className="project-detail-location">{content.location}</p>
          <div className="project-detail-copy">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="project-detail-meta">
            <h2>{content.details}</h2>
            <div className="project-detail-facts">
              {content.facts.map((fact) => (
                <div key={fact.label} className="project-detail-fact">
                  <p className="project-detail-fact-label">{fact.label}</p>
                  {fact.href ? <a className="project-detail-fact-link" href={fact.href} target="_blank" rel="noreferrer">{fact.value}</a> : <p className="project-detail-fact-value">{fact.value}</p>}
                </div>
              ))}
            </div>
          </div>
          {variants?.length > 1 ? <nav className="project-detail-pagination" aria-label="Propuestas MITECO">{variants.map((variant, index) => <button key={variant.image} type="button" className={`project-detail-pagination-button${variantIndex === index ? ' is-active' : ''}`} aria-current={variantIndex === index ? 'page' : undefined} onClick={() => setVariantIndex(index)}>{index + 1}</button>)}</nav> : null}
        </aside>
      </div>
      <ProjectPager /><PageFooter />
    </section>
  )
}
