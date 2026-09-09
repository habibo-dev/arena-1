import { useLanguage, useLocalized } from '../context/LanguageContext'
import { useCompany } from '../context/CompanyContext'
import { usePageMeta } from '../hooks/usePageMeta'
import PageHero from '../components/sections/PageHero'
import { Section, SectionHeader } from '../components/ui/Section'
import WhySection from '../components/sections/WhySection'
import CtaBand from '../components/sections/CtaBand'
import Button from '../components/ui/Button'
import Image from '../components/ui/Image'

export default function AboutPage() {
  const { t } = useLanguage()
  const { company } = useCompany()
  const L = useLocalized()

  usePageMeta({
    title: t.about.title,
    description: t.about.subtitle,
    path: '/about',
  })

  return (
    <>
      <PageHero
        title={t.about.title}
        subtitle={t.about.subtitle}
        image="/images/about-agency.jpg"
        breadcrumbs={[
          { label: t.common.home, to: '/' },
          { label: t.nav.about },
        ]}
      />

      <Section tone="default">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border">
            <Image
              src="/images/about-agency.jpg"
              alt={L(company.name)}
              aspect="aspect-[4/3]"
            />
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-forest-950/90 to-transparent">
              <p className="font-display text-xl text-sand-50">{L(company.name)}</p>
              <p className="text-sm text-sand-200">
                {L(company.location.city)} · {L(company.location.country)}
              </p>
            </div>
          </div>
          <div>
            <SectionHeader
              title={t.about.storyTitle}
              subtitle={L(company.longDescription)}
              align="start"
              className="mb-6"
            />
            <div className="rounded-2xl border border-gold-200 bg-gold-50/70 p-5">
              <h3 className="font-display text-xl text-forest-900 mb-2">{t.about.philosophyTitle}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{L(company.philosophy)}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeader title={t.about.focusTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.focusItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft text-center"
            >
              <div className="mx-auto mb-4 h-1 w-10 gradient-gold rounded-full" />
              <h3 className="font-display text-xl text-forest-900 mb-2">{item.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <WhySection />

      <Section tone="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl text-forest-900 mb-3">{t.about.ctaTitle}</h2>
          <p className="text-ink-muted mb-6">{t.about.ctaText}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/contact" variant="gold" size="lg">
              {t.nav.contact}
            </Button>
            <Button to="/booking" variant="outline" size="lg">
              {t.nav.bookNow}
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
