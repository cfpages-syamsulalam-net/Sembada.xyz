import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-24 flex items-center justify-center overflow-hidden bg-[#0B0C10]">
      {/* Animated Stars Background */}
      <div className="stars-container" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        {/* 14 manually placed stars */}
        {[
          { top: '15%', left: '10%', size: '2px', duration: '4s', color: 'rgba(255,255,255,0.8)' },
          { top: '25%', left: '85%', size: '1px', duration: '3s', color: 'rgba(255,255,255,0.6)' },
          { top: '45%', left: '20%', size: '3px', duration: '6s', color: 'rgba(242,202,80,0.9)' },
          { top: '60%', left: '70%', size: '2px', duration: '5s', color: 'rgba(255,255,255,0.7)' },
          { top: '80%', left: '30%', size: '1px', duration: '4s', color: 'rgba(255,255,255,0.8)' },
          { top: '35%', left: '50%', size: '2px', duration: '7s', color: 'rgba(242,202,80,0.8)' },
          { top: '70%', left: '90%', size: '1px', duration: '3s', color: 'rgba(255,255,255,0.6)' },
          { top: '20%', left: '65%', size: '2px', duration: '5s', color: 'rgba(255,255,255,0.9)' },
          { top: '55%', left: '5%', size: '1px', duration: '6s', color: 'rgba(255,255,255,0.7)' },
          { top: '90%', left: '75%', size: '3px', duration: '4s', color: 'rgba(242,202,80,0.9)' },
          { top: '10%', left: '40%', size: '1px', duration: '3s', color: 'rgba(255,255,255,0.8)' },
          { top: '40%', left: '95%', size: '2px', duration: '5s', color: 'rgba(255,255,255,0.6)' },
          { top: '75%', left: '15%', size: '1px', duration: '7s', color: 'rgba(242,202,80,0.7)' },
          { top: '85%', left: '55%', size: '2px', duration: '4s', color: 'rgba(255,255,255,0.9)' },
        ].map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              position: 'absolute',
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              borderRadius: '50%',
              animation: `twinkle ${star.duration} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(11,12,16,0.2) 50%, rgba(11,12,16,1) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-6 md:mb-8 text-gold-gradient break-words">
            Solusi Konstruksi<br />Premium
          </h1>

          {/* Tagline */}
          <div
            className="inline-block px-6 md:px-8 py-3 md:py-4 mb-8 md:mb-12 max-w-full"
            style={{
              background: 'rgba(11, 12, 16, 0.7)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight italic text-[#e3e2e8] leading-tight">
              Integritas untuk Sukses dan Barokah
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/produk"
            className="group relative inline-block px-10 md:px-16 py-4 md:py-6 uppercase text-[10px] md:text-xs font-black tracking-widest overflow-hidden border border-[#f2ca50]/50 text-[#f2ca50] transition-all duration-300 hover:border-[#f2ca50]"
            style={{
              background: 'rgba(11, 12, 16, 0.7)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Slide-up fill effect */}
            <span className="absolute inset-0 bg-[#f2ca50] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative group-hover:text-[#0B0C10] z-10">
              Jelajahi Layanan Kami
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
