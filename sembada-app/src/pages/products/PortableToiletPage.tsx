import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { ShowerHead, Star, CheckCircle2 } from 'lucide-react'

export function PortableToiletPage() {
  const portablePortfolios = portfolioData['portable-toilet']
  const variants = [
    {
      name: 'Low Price',
      description: 'Varian ekonomis dengan harga terjangkau, cocok untuk proyek konstruksi dan event.',
      features: ['Material HDPE berkualitas', 'Ventilasi udara memadai', 'Tangki 150L', 'Instalasi cepat'],
      image: '/images/toilet-portable/toilet%20portable%202.jpg',
    },
    {
      name: 'Standard/Deluxe',
      description: 'Varian premium dengan fitur lengkap dan desain modern elegan.',
      features: ['Material phenolic resin', 'Interior modern', 'Lampu & kran air', 'Mudah dipindahkan'],
      image: '/images/toilet-portable/toilet%20portable%203.webp',
      highlight: true,
    },
    {
      name: 'Emergency',
      description: 'Dirancang untuk mobilitas tinggi dan penempatan cepat di lokasi darurat.',
      features: ['Ringan & portable', 'Rapid deployment', 'Sanitasi kimia', 'Cocok untuk bencana'],
      image: '/images/toilet-portable/toilet%20portable%204.webp',
    },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/toilet-portable/toilet%20portable.jpg"
            alt="Portable Toilet Hero"
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/80 to-[#0B0C10]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center py-24">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
            Premium Sanitation Solutions
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-black tracking-tighter leading-[0.85] text-gold-gradient uppercase mb-4 md:mb-6">
            Portable Toilet
          </h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-8 md:mb-12">
            Unit sanitasi movable yang fleksibel untuk berbagai kebutuhan. Dibuat dengan material terbaik, interior dan eksterior modern elegan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="/hubungi-kami"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white"
            >
              Minta Penawaran
            </a>
            <a
              href="https://wa.me/6285257460869"
              className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-[#111216]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: '01', title: 'Durabilitas Tinggi' },
              { num: '02', title: 'Instalasi Cepat', offset: 'md:mt-8' },
              { num: '03', title: 'Desain Elegan' },
              { num: '04', title: 'Eco-Friendly', offset: 'md:mt-8' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-4 md:p-6 border-l-4 border-[#f2ca50] ${stat.offset || ''}`}
                style={{
                  background: 'rgba(17, 18, 22, 0.7)',
                }}
              >
                <div className="text-2xl md:text-3xl font-black text-[#f2ca50] mb-1">{stat.num}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-black">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">
              Varian Produk
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {variants.map((variant, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 ${
                  variant.highlight
                    ? 'bg-[#f2ca50]/10 border-[#f2ca50] scale-105 relative z-10 shadow-[0_0_50px_rgba(242,202,80,0.15)]'
                    : ''
                }`}
                style={{
                  background: variant.highlight ? undefined : 'rgba(17, 18, 22, 0.7)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: `1px solid ${variant.highlight ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0.2)'}`,
                }}
              >
                {variant.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#f2ca50] text-[#0B0C10] text-[9px] font-black uppercase tracking-[0.2em]">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    background: 'rgba(212, 175, 55, 0.2)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                  }}
                >
                  {variant.highlight ? <Star className="w-8 h-8 text-[#f2ca50]" /> : <ShowerHead className="w-8 h-8 text-[#f2ca50]" />}
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-[#f2ca50] mb-3 text-center">
                  {variant.name}
                </h3>
                <p className="text-sm text-[#e3e2e8]/70 leading-relaxed mb-6 text-center">
                  {variant.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {variant.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#e3e2e8]/60">
                      <CheckCircle2 className="w-4 h-4 text-[#f2ca50]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/hubungi-kami"
                  className={`block text-center py-3 uppercase text-xs font-black tracking-widest transition-all duration-300 ${
                    variant.highlight
                      ? 'bg-[#f2ca50] text-[#0B0C10] hover:bg-white'
                      : 'border border-[#f2ca50]/50 text-[#f2ca50] hover:bg-[#f2ca50]/10'
                  }`}
                >
                  {variant.highlight ? 'Select Deluxe' : 'Pilih Varian'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Images */}
            <div className="grid grid-cols-2 gap-4">
              {[
                '/images/toilet-portable/toilet%20portable%20instansi%20pemerintahan.jpg',
                '/images/toilet-portable/toilet%20portable%20sektor%20konstruksi%20&%20pergudangan.webp',
                '/images/toilet-portable/toilet%20portable%20dinas%20kesehatan.webp',
                '/images/toilet-portable/toilet%20portable%20tempat%20wisata%20&%20perkantoran.jpg',
              ].map((img, i) => (
                <div
                  key={i}
                  className={`aspect-square grayscale hover:grayscale-0 transition-all duration-700 ${
                    i % 2 === 1 ? 'pt-12' : ''
                  }`}
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Right - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6 md:mb-8">
                Core Features
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'High-Grade Insulation',
                    desc: 'Material berkualitas tinggi untuk ketahanan maksimal terhadap cuaca dan penggunaan intensif.',
                  },
                  {
                    num: '02',
                    title: 'Modular Engineering',
                    desc: 'Desain modular memungkinkan instalasi cepat dan mudah dipindahkan sesuai kebutuhan.',
                  },
                  {
                    num: '03',
                    title: 'Advanced Waste Management',
                    desc: 'Sistem pengelolaan limbah modern dengan tangki berkapasitas besar dan sanitasi kimia.',
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#f2ca50] text-[#0B0C10] font-black text-lg"
                      style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      }}
                    >
                      {feature.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#e3e2e8] mb-1">{feature.title}</h3>
                      <p className="text-sm text-[#e3e2e8]/60 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection 
        items={portablePortfolios} 
        productHref="/portofolio" 
        viewAllLabel="Lihat Semua Proyek Portable Toilet" 
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">
            Tertarik dengan Portable Toilet?
          </h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Dapatkan penawaran terbaik untuk kebutuhan sanitasi proyek Anda. Konsultasi gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="/hubungi-kami"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white"
            >
              Minta Penawaran
            </a>
            <a
              href="https://wa.me/6285257460869"
              className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
