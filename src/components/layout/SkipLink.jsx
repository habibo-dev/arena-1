import { useLanguage } from '../../context/LanguageContext'

export function SkipLink() {
  const { lang } = useLanguage()
  const label = lang === 'ar' ? 'تخطى إلى المحتوى' : 'Aller au contenu'
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-forest-950 focus:font-semibold focus:shadow-elevated"
    >
      {label}
    </a>
  )
}

export default SkipLink
