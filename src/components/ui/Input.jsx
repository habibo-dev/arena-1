export function Field({ label, htmlFor, error, required, hint, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-semibold text-forest-900">
          {label}
          {required && (
            <span className="text-gold-600 ms-1" aria-hidden>
              *
            </span>
          )}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-xs text-ink-soft">{hint}</p>}
      {error && (
        <p className="text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const baseInput =
  'w-full rounded-lg border bg-surface-elevated px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-soft/80 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 disabled:opacity-60'

export function Input({ error, className = '', ...props }) {
  return (
    <input
      className={`${baseInput} ${error ? 'border-red-400' : 'border-border'} ${className}`}
      aria-invalid={error ? 'true' : undefined}
      {...props}
    />
  )
}

export function Textarea({ error, className = '', rows = 4, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`${baseInput} resize-y min-h-[7rem] ${error ? 'border-red-400' : 'border-border'} ${className}`}
      aria-invalid={error ? 'true' : undefined}
      {...props}
    />
  )
}

export function Select({ error, className = '', children, ...props }) {
  return (
    <select
      className={`${baseInput} ${error ? 'border-red-400' : 'border-border'} ${className}`}
      aria-invalid={error ? 'true' : undefined}
      {...props}
    >
      {children}
    </select>
  )
}
