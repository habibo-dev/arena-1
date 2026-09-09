import { Compass, Map, Headphones, Heart, Building2, Sparkles } from 'lucide-react'
import { useLanguage, useLocalized } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { Section, SectionHeader } from '../ui/Section'

const iconMap = {
  compass: Compass,
  map: Map,
  headset: Headphones,
  heart: Heart,
  building: Building2,
  sparkles: Sparkles,
}

export function WhySection() {
  const { t } = useLanguage()
  const { whyTawars } = useCompany()
  const L = useLocalized()

  return (
    <Section tone="cream">
      <SectionHeader title={t.home.whyTitle} subtitle={t.home.whySubtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyTawars.map((item, i) => {
          const Icon = iconMap[item.icon] || Compass
          return (
            <article
              key={item.id}
              className="group relative rounded-2xl border border-border bg-surface p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-forest-900 text-gold-400 group-hover:scale-105 transition-transform">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="font-display text-3xl text-gold-100 group-hover:text-gold-200 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-xl text-forest-900 mb-2">{L(item.title)}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{L(item.text)}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default WhySection
