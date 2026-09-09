import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { CompanyProvider } from './context/CompanyContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CompanyProvider>
          <App />
        </CompanyProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
