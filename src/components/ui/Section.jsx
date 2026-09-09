export function Section({
  children,
  className = '',
  id,
  tone = 'default',
  container = true,
  tight = false,
}) {
  const tones = {
    default: 'bg-sand-50',
    cream: 'bg-sand-100',
    white: 'bg-surface',
    forest: 'gradient-forest text-sand-50',
    goldSoft: 'bg-gold-50',
  }

  return (
    <section
      id={id}
      className={[tones[tone] || tones.default, tight ? 'py-10 md:py-14' : 'section-padding', className]
        .filter(Boolean)
        .join(' ')}
    >
      {container ? <div className="container-page">{children}</div> : children}
    </section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false, className = '' }) {
  const alignCls =
    align === 'start'
      ? 'text-start items-start'
      : align === 'end'
        ? 'text-end items-end'
        : 'text-center items-center mx-auto'

  return (
    <div className={`flex flex-col gap-3 max-w-3xl mb-10 md:mb-14 ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.14em] uppercase ${
            light ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          <span className={`h-px w-6 ${light ? 'bg-gold-400' : 'bg-gold-500'}`} aria-hidden />
          {eyebrow}
          <span className={`h-px w-6 ${light ? 'bg-gold-400' : 'bg-gold-500'}`} aria-hidden />
        </span>
      )}
      {title && (
        <h2
          className={`text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-balance ${
            light ? 'text-sand-50' : 'text-forest-900'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-sand-200/90' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default Section
