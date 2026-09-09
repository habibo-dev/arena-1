import { Link } from 'react-router-dom'

export function Card({ children, className = '', hover = true, as: Comp = 'div', to, ...props }) {
  const classes = [
    'bg-surface rounded-2xl border border-border shadow-soft overflow-hidden',
    hover ? 'transition-all duration-300 hover:shadow-card hover:-translate-y-0.5' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={`${classes} block`} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  )
}

export default Card
