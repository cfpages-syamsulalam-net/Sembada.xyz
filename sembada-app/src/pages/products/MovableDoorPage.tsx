import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { VolumeX, Settings2, Shield } from 'lucide-react'

export function MovableDoorPage() {
  const movablePortfolios = portfolioData['movable-door']
  const variants = [
    { name: 'Rubi', tag: 'Eksklusif', desc: 'Partisi fleksibel semi-permanen', img: '/images/partisi-ruangan/movable%20door%20rubi.jpg' },
    { name: 'Kalimaya', tag: 'Akustik', desc: 'Isolasi suara tingkat menengah', img: '/images/partisi-ruangan/movable%20door%20kalimaya.png', offset: 'translate-y-8 md:translate-y-12' },
    { name: 'Batu Beling', tag: 'Signature', desc: 'Peredam suara maksimal', img: '/images/partisi-ruangan/movable%20door%20batu%20beling.jpg' },
    { name: 'Emerald', tag: 'Premium', desc: 'Performa akustik industri', img: '/images/partisi-ruangan/movable%20door%20emerald.jpg', offset: 'translate-y-8 md:translate-y-12' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          <img src="/images/partisi-ruangan/movable%20door%201.jpg" alt="" className="w-full h-full object-cover grayscale opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/70 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Sembada Architectural Solutions</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">Movable Door</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light italic mb-8">Partisi ruangan yang dapat digeser untuk membagi ruang utama menjadi beberapa fungsi dengan privasi penuh.</p>
          <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Lihat Katalog</a>
        </div>
      </section>

      {/* Variants */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Varian Produk</h2>
            <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {variants.map((v, i) => (
              <div key={i} className={`relative p-8 transition-all duration-300 hover:-translate-y-2 ${v.offset}`} style={{ background: 'rgba(17, 18, 22, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                {/* Watermark number */}
                <div className="absolute top-4 right-4 text-8xl font-black opacity-5 text-[#f2ca50]">{String(i + 1).padStart(2, '0')}</div>
                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-black mb-2 block">{v.tag}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#e3e2e8] mb-2">{v.name}</h3>
                  <p className="text-sm text-[#94A3B8] mb-6">{v.desc}</p>
                  <div className="mt-auto pt-6 border-t border-[#f2ca50]/30">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-black">Detail Produk →</span>
                  </div>
                </div>
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
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Fitur Utama</h2>
              <div className="space-y-6">
                {[{ icon: VolumeX, t: 'Sound Proofing', d: 'Reduksi suara 45-50 dB' }, { icon: Settings2, t: 'Precision Track', d: 'Rel aluminium ekstrusi' }, { icon: Shield, t: 'Mechanical Locking', d: 'Sistem pengaman multi-point' }].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', background: 'rgba(212, 175, 55, 0.1)' }}>
                      <f.icon className="w-8 h-8 text-[#f2ca50]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#e3e2e8] mb-1">{f.t}</h3>
                      <p className="text-sm text-[#e3e2e8]/60">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['/images/partisi-ruangan/movable%20door%20rubi.jpg', '/images/partisi-ruangan/movable%20door%20kalimaya.png', '/images/partisi-ruangan/movable%20door%20batu%20beling.jpg', '/images/partisi-ruangan/movable%20door%20emerald.jpg'].map((img, i) => (
                <div key={i} className={`aspect-square transition-all duration-700 ${i % 2 === 0 ? 'translate-y-12' : '-mt-12'}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection 
        items={movablePortfolios} 
        productHref="/portofolio" 
        viewAllLabel="Lihat Semua Proyek Movable Door" 
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Tertarik dengan Movable Door?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Solusi partisi fleksibel dengan peredam suara untuk ruang yang adaptif dan privat.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
