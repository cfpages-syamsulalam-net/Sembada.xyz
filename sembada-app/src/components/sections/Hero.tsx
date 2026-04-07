import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'

interface HeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function Hero({
  title = 'Sembada Batu Beling',
  subtitle = 'Integritas untuk Sukses dan Barokah',
  primaryCTA = { label: 'Eksplorasi Produk Kami', href: '/produk' },
  secondaryCTA = { label: 'Tentang Kami', href: '/tentang-kami' },
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-starry overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <Heading 
            level={1} 
            variant="gold"
            className="mb-6 animate-fade-in-up"
          >
            {title}
          </Heading>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-light italic text-text-primary mb-12 leading-snug">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" size="lg">
              {primaryCTA.label}
            </Button>
            <Button variant="secondary" size="lg">
              {secondaryCTA.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-xs font-black uppercase tracking-[0.5em] text-text-muted">
          Scroll
        </span>
      </div>
    </section>
  )
}
