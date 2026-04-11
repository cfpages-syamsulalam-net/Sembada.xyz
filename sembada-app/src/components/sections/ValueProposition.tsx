import { Target, Clock, Gem, Leaf } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    label: 'Presisi',
    description: 'Presisi komputerisasi dalam setiap detail produk untuk hasil sempurna.',
  },
  {
    icon: Clock,
    label: 'Efisiensi',
    description: 'Tepat waktu dan hemat biaya dengan proses produksi teroptimasi.',
  },
  {
    icon: Gem,
    label: 'Elegan',
    description: 'Desain premium yang meningkatkan nilai estetika properti Anda.',
  },
  {
    icon: Leaf,
    label: 'Berkelanjutan',
    description: 'Ramah lingkungan dengan material berkualitas dan tahan lama.',
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 px-10 bg-[#0B0C10]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Side - Pillars */}
          <div>
            {/* Eyebrow */}
            <span className="text-[#94A3B8] uppercase tracking-[0.5em] text-[11px] font-black mb-6 block">
              Filosofi Kami
            </span>

            {/* H2 */}
            <h2 className="text-5xl md:text-6xl font-black mb-10 uppercase tracking-tight text-gold-gradient">
              Pilar Utama
            </h2>

            {/* Description */}
            <p className="text-[#e3e2e8]/80 text-lg leading-relaxed font-light mb-10">
              Kami membangun setiap produk dengan standar tertinggi untuk memberikan nilai terbaik bagi klien kami.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  {/* Hexagon Icon */}
                  <div
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      background: 'rgba(11, 12, 16, 0.7)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                    }}
                  >
                    <pillar.icon className="w-8 h-8 text-[#f2ca50]" />
                  </div>

                  {/* Label - Gold Gradient */}
                  <h3 className="text-sm text-gold-gradient font-black uppercase tracking-widest mb-2">
                    {pillar.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#e3e2e8]/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Quote Card */}
          <div className="relative">
            {/* Blurred Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                filter: 'blur(140px)',
              }}
            />

            {/* Glass Card */}
            <div
              className="relative p-12"
              style={{
                background: 'rgba(11, 12, 16, 0.7)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
              }}
            >
              {/* Blueprint Image */}
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
                alt="Blueprint"
                className="w-full opacity-20 mb-8 md:mb-10"
              />

              {/* Blockquote */}
              <blockquote className="text-lg md:text-2xl font-black italic text-[#e3e2e8]/90 leading-relaxed mb-4 md:mb-6">
                "Kualitas bukanlah kebetulan, melainkan hasil dari niat tulus dan kerja keras yang konsisten."
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-12 md:w-16 h-[2px]" style={{
                  background: 'linear-gradient(to right, transparent, #f2ca50, transparent)',
                }} />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#f2ca50] font-black">
                  Tim Sembada Batu Beling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
