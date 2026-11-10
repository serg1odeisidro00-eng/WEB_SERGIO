import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { newsArticles, newsListCopy } from '../content/news'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function NewsPage({ activePage, onBack, onNavigate }) {
  const { language } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="projects-page news-page">
      <PageHeader activePage={activePage} onBack={onBack} onNavigate={onNavigate} />

      <h1 className="news-visually-hidden">{newsListCopy[language].title}</h1>

      <div className="news-grid">
        {newsArticles.map((article) => (
          <button
            key={article.id}
            type="button"
            className="news-card"
            onClick={() => onNavigate?.(article.id)}
          >
            <span className="news-card-media">
              <img
                src={article.cover.src}
                width={article.cover.w}
                height={article.cover.h}
                alt=""
                loading="lazy"
              />
            </span>
            <span className="news-card-title">{article.cardTitle[language]}</span>
          </button>
        ))}
      </div>

      <PageFooter />
    </section>
  )
}
