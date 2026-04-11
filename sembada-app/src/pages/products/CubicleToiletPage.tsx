import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Shield, Clock, Square } from 'lucide-react'

export function CubicleToiletPage() {
  const cubiclePortfolios = portfolioData['cubicle-toilet']
  const variants = [
    { name: 'Premium', desc: 'Phenolic Resin untuk lalu lintas tinggi', image: '/images/cubicle-toilet/cubicle%20toilet%20Premium.png' },
    { name: 'Standard', desc: 'Fasilitas kantor & publik', image: '/images/cubicle-toilet/cubicle%20toilet%20standard.jpg', offset: 'md:translate-y-8' },
    { name: 'Two Tone', desc: 'Warna kontras modern', image: '/images/cubicle-toilet/cubicle%20toilet%20two%20tone.png' },
    { name: 'PVC Board', desc: 'Tahan air ekonomis', image: '/images/cubicle-toilet/cubicle%20toilet%20pvc%20board.png', offset: 'md:translate-y-8' },
    { name: 'Full Height', desc: 'Privasi lantai ke langit-langit', image: '/images/cubicle-toilet/cubicle%20toilet%20full%20height.png' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
        <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
          Architectural Excellence
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-gold-gradient uppercase mb-4 md:mb-6">
          Cubicle Toilet
        </h1>
        <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
          Partisi toilet modern berbahan tipis, ringan, namun sangat kuat. Pemasangan cepat dan tampilan elegan.
        </p>
      </section>

      {/* Variants */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Pilihan Varian</h2>
            <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {variants.map((v, i) => (
              <div key={i} className={`p-6 transition-all duration-300 hover:-translate-y-2 ${v.offset || ''}`}
                style={{ background: 'rgba(17, 18, 22, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
              >
                <div className="h-48 mb-4 overflow-hidden transition-all duration-700">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#f2ca50] mb-2">{v.name}</h3>
                <p className="text-xs text-[#e3e2e8]/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {['/images/cubicle-toilet/cubicle%20toilet%20kantor%20modern.jpg', '/images/cubicle-toilet/cubicle%20toilet%20hotel%20bintang%204.jpg'].map((img, i) => (
                <div key={i} className="aspect-square transition-all duration-700" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Keunggulan</h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Ketahanan Tinggi', desc: 'Material premium tahan benturan dan kelembaban' },
                  { icon: Clock, title: 'Instalasi Cepat', desc: 'Pemasangan cepat menghemat waktu dan biaya' },
                  { icon: Square, title: 'Efisiensi Ruang', desc: 'Desain tipis mengoptimalkan space' },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', background: 'rgba(212, 175, 55, 0.1)' }}>
                      <f.icon className="w-8 h-8 text-[#f2ca50]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#e3e2e8] mb-1">{f.title}</h3>
                      <p className="text-sm text-[#e3e2e8]/60">{f.desc}</p>
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
        items={cubiclePortfolios} 
        productHref="/portofolio" 
        viewAllLabel="Lihat Semua Proyek Cubicle Toilet" 
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Tertarik dengan Cubicle Toilet?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Konsultasikan kebutuhan partisi toilet Anda dengan tim kami.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
