import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({ items = [], className = '' }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)
  const baseId = useId()

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id
        const panelId = `${baseId}-panel-${item.id}`
        const buttonId = `${baseId}-btn-${item.id}`
        return (
          <div
            key={item.id}
            className={`rounded-xl border bg-surface transition-colors ${
              isOpen ? 'border-gold-300 shadow-soft' : 'border-border'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
              >
                <span className="font-semibold text-forest-900 text-[0.98rem] md:text-base leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? 'px-5 pb-5' : ''}
            >
              {isOpen && (
                <p className="text-ink-muted leading-relaxed text-[0.95rem] border-t border-border/70 pt-3">
                  {item.answer}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
