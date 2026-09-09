import { Link } from 'react-router-dom'
import { forwardRef } from 'react'

const variants = {
  primary:
    'bg-forest-900 text-sand-50 hover:bg-forest-800 shadow-soft border border-transparent',
  gold: 'gradient-gold text-forest-950 hover:brightness-105 shadow-gold border border-transparent font-semibold',
  outline:
    'bg-transparent text-forest-900 border border-forest-900/20 hover:border-forest-900 hover:bg-forest-50',
  outlineLight:
    'bg-transparent text-sand-50 border border-white/30 hover:bg-white/10 hover:border-white/60',
  ghost: 'bg-transparent text-forest-900 hover:bg-forest-50 border border-transparent',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-soft border border-transparent font-semibold',
  soft: 'bg-gold-50 text-forest-900 hover:bg-gold-100 border border-gold-100',
}

const sizes = {
  sm: 'h-9 px-3.5 text-sm gap-1.5 rounded-md',
  md: 'h-11 px-5 text-[0.95rem] gap-2 rounded-lg',
  lg: 'h-12 px-6 text-base gap-2.5 rounded-lg',
  xl: 'h-14 px-8 text-base gap-2.5 rounded-xl',
}

export const Button = forwardRef(function Button(
  {
    as,
    to,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    type = 'button',
    disabled,
    external,
    ...props
  },
  ref,
) {
  const classes = [
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500',
    'disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  const Comp = as || 'button'
  return (
    <Comp ref={ref} type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </Comp>
  )
})

export default Button
