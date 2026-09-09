export function Badge({ children, tone = 'gold', className = '' }) {
  const tones = {
    gold: 'bg-gold-50 text-gold-600 border-gold-100',
    forest: 'bg-forest-50 text-forest-800 border-forest-100',
    soft: 'bg-sand-100 text-ink-muted border-border',
    demo: 'bg-amber-50 text-amber-800 border-amber-200',
    light: 'bg-white/15 text-sand-50 border-white/20 backdrop-blur',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone] || tones.gold} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
