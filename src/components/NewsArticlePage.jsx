import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { newsById, newsListCopy } from '../content/news'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

export default function NewsArticlePage({ articleId, onBack, onNavigate }) {
  const { language } = useLanguage()
  const article = newsById[articleId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [articleId])

  if (!article) return null

  return (
    <section className="projects-page news-page">
      <PageHeader activePage="news" onBack={onBack} onNavigate={onNavigate} />

      <article className="news-article">
        <header className="news-article-header">
          <h1 className="news-article-title">{article.title[language]}</h1>
          <p className="news-article-date">{article.date}</p>
          <p className="news-article-subtitle">{article.subtitle[language]}</p>
        </header>

        {article.blocks.map((block, index) =>
          block.img ? (
            <figure key={index} className="news-article-figure">
              <img
                src={`/noticias/${block.img}`}
                width={block.w}
                height={block.h}
                alt={block.caption ? block.caption[language] : ''}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              {block.caption ? <figcaption>{block.caption[language]}</figcaption> : null}
            </figure>
          ) : (
            <p key={index} className="news-article-text">{block.p[language]}</p>
          ),
        )}

        <button type="button" className="news-article-back" onClick={() => onNavigate?.('news')}>
          ← {newsListCopy[language].back}
        </button>
      </article>

      <PageFooter />
    </section>
  )
}
