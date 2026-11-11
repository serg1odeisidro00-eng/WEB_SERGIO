import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import { ProjectNavigationProvider } from './context/ProjectNavigationContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ProjectNavigationProvider>
        <App />
        {/* Estadistica de visitas sin cookies (se activa en Vercel > Analytics). */}
        <Analytics />
      </ProjectNavigationProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
