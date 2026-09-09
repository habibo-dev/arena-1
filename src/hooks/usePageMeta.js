import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { setPageMeta, injectLocalBusinessJsonLd } from '../utils/seo'
import { useCompany } from '../context/CompanyContext'

export function usePageMeta({ title, description, path }) {
  const { lang } = useLanguage()
  const { company } = useCompany()

  useEffect(() => {
    setPageMeta({ title, description, path, lang })
    injectLocalBusinessJsonLd(company, lang)
  }, [title, description, path, lang, company])
}
