import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'tawars-lang'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'ar'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'fr' || saved === 'ar' ? saved : 'ar'
  })

  const setLang = useCallback((next) => {
    setLangState(next === 'fr' ? 'fr' : 'ar')
  }, [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'ar' ? 'fr' : 'ar'))
  }, [])

  useEffect(() => {
    const t = translations[lang]
    document.documentElement.lang = t.locale
    document.documentElement.dir = t.dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const t = translations[lang]

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      dir: t.dir,
      isRTL: lang === 'ar',
      isLTR: lang === 'fr',
    }),
    [lang, setLang, toggleLang, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Resolve bilingual field { ar, fr } or plain string */
export function useLocalized() {
  const { lang } = useLanguage()
  return useCallback(
    (field) => {
      if (field == null) return ''
      if (typeof field === 'string') return field
      if (typeof field === 'object') return field[lang] ?? field.ar ?? field.fr ?? ''
      return String(field)
    },
    [lang],
  )
}
