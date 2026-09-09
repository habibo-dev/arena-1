import { Clock, MapPin, Building2, ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage, useLocalized } from '../../context/LanguageContext'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Image from '../ui/Image'

export function PackageCard({ pkg, basePath = '/omra' }) {
  const { t, isRTL } = useLanguage()
  const L = useLocalized()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const to = `${basePath}/${pkg.slug}`
  const highlights = L(pkg.highlights)

  return (
    <Card className="flex flex-col h-full">
      <div className="relative">
        <Image src={pkg.image} alt={L(pkg.name)} aspect="aspect-[16/11]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 start-3 flex flex-wrap gap-2">
          {pkg.hotel?.category && <Badge tone="light">{pkg.hotel.category}</Badge>}
        </div>
        <div className="absolute bottom-3 start-3 end-3">
          <h3 className="font-display text-xl md:text-2xl text-sand-50 drop-shadow-sm">
            {L(pkg.name)}
          </h3>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6 gap-4">
        <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">
          {L(pkg.shortDescription)}
        </p>

        <ul className="space-y-2 text-sm text-ink-muted">
          {pkg.duration && (
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-gold-600 shrink-0" aria-hidden />
              <span>{L(pkg.duration)}</span>
            </li>
          )}
          {pkg.departureCity && (
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-600 shrink-0" aria-hidden />
              <span>
                {t.common.departure}: {L(pkg.departureCity)}
              </span>
            </li>
          )}
          {pkg.hotel && (
            <li className="flex items-center gap-2">
              <Building2 className="size-4 text-gold-600 shrink-0" aria-hidden />
              <span className="line-clamp-1">{L(pkg.hotel.name)}</span>
            </li>
          )}
        </ul>

        {Array.isArray(highlights) && highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {highlights.map((h) => (
              <Badge key={h} tone="soft">
                {h}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-auto pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs text-ink-soft tracking-wide">{t.common.price}</p>
            <p className="font-semibold text-forest-900">{L(pkg.price?.display)}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button to={to} variant="outline" size="sm">
              {t.common.details}
            </Button>
            <Button
              to={`/booking?package=${pkg.slug}&service=${pkg.category || 'omra'}`}
              variant="gold"
              size="sm"
            >
              {t.common.bookNow}
              <Arrow className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PackageCard
