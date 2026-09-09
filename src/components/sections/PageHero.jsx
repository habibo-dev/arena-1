import Badge from '../ui/Badge'
import Breadcrumbs from '../ui/Breadcrumbs'
import Image from '../ui/Image'

export function PageHero({
  title,
  subtitle,
  badge,
  image,
  breadcrumbs = [],
  children,
  compact = false,
}) {
  return (
    <section className="relative overflow-hidden">
      <div className={`relative ${compact ? 'min-h-[240px] md:min-h-[280px]' : 'min-h-[320px] md:min-h-[400px]'}`}>
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              aspect="absolute inset-0 size-full"
              className="!absolute inset-0 size-full aspect-auto"
              priority
            />
            <div className="absolute inset-0 gradient-hero-overlay" />
          </>
        ) : (
          <div className="absolute inset-0 gradient-forest" />
        )}

        {/* decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #C9A24A 0.6px, transparent 0.7px), radial-gradient(circle at 80% 60%, #C9A24A 0.6px, transparent 0.7px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden
        />

        <div className="relative container-page py-12 md:py-16 lg:py-20 flex flex-col justify-end min-h-[inherit]">
          {breadcrumbs.length > 0 && (
            <div className="mb-4 [&_a]:text-sand-200/80 [&_a:hover]:text-gold-300 [&_span]:text-sand-50 [&_svg]:text-sand-300/60">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}
          {badge && (
            <div className="mb-3">
              <Badge tone="light">{badge}</Badge>
            </div>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-sand-50 max-w-3xl text-balance leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-sand-100/85 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
      <div className="h-1 gradient-gold opacity-80" aria-hidden />
    </section>
  )
}

export default PageHero
