import { useState } from 'react'

/**
 * Resilient image with lazy loading and graceful fallback.
 * Filenames under /images are replaceable without code changes.
 */
export function Image({
  src,
  alt = '',
  className = '',
  aspect = 'aspect-[16/10]',
  objectFit = 'object-cover',
  priority = false,
  fallbackGradient = true,
}) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const isFill = typeof aspect === 'string' && aspect.includes('absolute')

  return (
    <div
      className={`overflow-hidden bg-sand-200 ${isFill ? '' : 'relative'} ${aspect} ${className}`}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 size-full ${objectFit} transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : fallbackGradient ? (
        <div
          className="absolute inset-0 gradient-forest flex items-center justify-center"
          role="img"
          aria-label={alt}
        >
          <div className="text-center px-4">
            <div className="mx-auto mb-2 size-10 rounded-full border border-gold-500/40 flex items-center justify-center">
              <span className="text-gold-400 text-lg font-display">ت</span>
            </div>
            <p className="text-sand-200/80 text-xs max-w-[12rem] line-clamp-2">{alt}</p>
          </div>
        </div>
      ) : null}
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-sand-200 via-sand-100 to-forest-100" />
      )}
    </div>
  )
}

export default Image
