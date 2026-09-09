import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export function Breadcrumbs({ items = [] }) {
  const { t, isRTL } = useLanguage()
  const Chevron = isRTL ? ChevronLeft : ChevronRight

  return (
    <nav aria-label={t.common.breadcrumbs} className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
              {i > 0 && <Chevron className="size-3.5 opacity-60" aria-hidden />}
              {last || !item.to ? (
                <span className="text-forest-800 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className="hover:text-forest-800 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
