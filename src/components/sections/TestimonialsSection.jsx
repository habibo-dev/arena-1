import { Quote } from 'lucide-react'
import { useLanguage, useLocalized } from '../../context/LanguageContext'
import { useCompany } from '../../context/CompanyContext'
import { Section, SectionHeader } from '../ui/Section'
import Badge from '../ui/Badge'

export function TestimonialsSection() {
  const { t } = useLanguage()
  const { testimonials } = useCompany()
  const L = useLocalized()

  return (
    <Section tone="cream">
      <SectionHeader title={t.home.testimonialsTitle} subtitle={t.home.testimonialsSubtitle} />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.id}
            className="relative rounded-2xl border border-border bg-surface p-6 shadow-soft flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <Quote className="size-8 text-gold-300" aria-hidden />
              {item.isDemo && <Badge tone="demo">{t.common.demo}</Badge>}
            </div>
            <blockquote className="text-ink-muted leading-relaxed flex-1 text-[0.95rem]">
              “{L(item.text)}”
            </blockquote>
            <figcaption className="mt-5 pt-4 border-t border-border">
              <p className="font-semibold text-forest-900">{L(item.name)}</p>
              <p className="text-xs text-ink-soft mt-0.5">
                {L(item.location)} · {L(item.service)}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ink-soft">{t.common.demoNote}</p>
    </Section>
  )
}

export default TestimonialsSection
