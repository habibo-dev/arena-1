import { useLanguage } from '../context/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  const { t } = useLanguage()
  usePageMeta({ title: t.notFound.title, path: '/404' })

  return (
    <section className="section-padding">
      <div className="container-page text-center max-w-lg mx-auto">
        <p className="font-display text-7xl text-gold-300 mb-4">404</p>
        <h1 className="font-display text-3xl text-forest-900 mb-3">{t.notFound.title}</h1>
        <p className="text-ink-muted mb-8">{t.notFound.text}</p>
        <Button to="/" variant="gold" size="lg">
          {t.notFound.cta}
        </Button>
      </div>
    </section>
  )
}
