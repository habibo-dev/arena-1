import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage, useLocalized } from '../../context/LanguageContext'
import Card from '../ui/Card'
import Image from '../ui/Image'

export function DestinationCard({ destination }) {
  const { t, isRTL } = useLanguage()
  const L = useLocalized()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const to = `/voyages/${destination.slug}`

  return (
    <Card to={to} className="group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          src={destination.image}
          alt={L(destination.name)}
          aspect="aspect-[4/3]"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-5">
          <h3 className="font-display text-2xl text-sand-50 mb-1">{L(destination.name)}</h3>
          <p className="text-sand-200/90 text-sm line-clamp-2">{L(destination.shortDescription)}</p>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between gap-3 mt-auto">
        <div className="flex items-center gap-2 text-sm text-ink-muted">
          <Clock className="size-4 text-gold-600" aria-hidden />
          {L(destination.duration)}
        </div>
        <div className="text-end">
          <p className="text-xs text-ink-soft">{t.common.price}</p>
          <p className="text-sm font-semibold text-forest-900">{L(destination.price?.display)}</p>
        </div>
      </div>
      <div className="px-5 pb-5">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:gap-2.5 transition-all">
          {t.common.details}
          <Arrow className="size-4" />
        </span>
      </div>
    </Card>
  )
}

export default DestinationCard
