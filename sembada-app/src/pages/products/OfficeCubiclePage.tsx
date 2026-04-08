import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'

export function OfficeCubiclePage() {
  const officePortfolios = portfolioData['office-cubicle']
  const variants = [
    { name: 'Advance Staff', size: '1200mm x 600mm', material: 'Phenolic 12mm', features: 'Cable Management', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },
    { name: 'Leader Staff', size: '1500mm x 750mm', material: 'Dual-tone Phenolic', features: 'Acoustic Panels', image: 'https://images.unsplash.com/photo-1497366754035-f200968e1414?w=400&h=300&fit=crop', offset: 'md:mt-12' },
    { name: 'Supervisor', size: '1800mm x 900mm', material: 'Floor-to-Ceiling', features: 'Luxury Finishes', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop', offset: 'md:-mt-8' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="h-[600px] md:h-[819px] flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" alt="" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/60 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#f2ca50] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Architectural Solution</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6">Office Cubicle</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-6 md:mb-8">Sekat antar ruang kerja/meja berbahan Phenolic Resin Premium. Tahan benturan, tidak lapuk, aman untuk suhu dingin/lembab.</p>
          <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Lihat Katalog Teknis</a>
        </div>
      </section>

      {/* Variants */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 block">Sistem Modular</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Variant Spesifikasi</h2>
            <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto mb-4" />
            <p className="text-sm md:text-base text-[#e3e2e8]/70 max-w-2xl mx-auto">Dua konfigurasi modular untuk memenuhi kebutuhan ruang kerja Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {variants.map((v, i) => (
              <div key={i} className={`p-8 md:p-10 transition-transform duration-500 hover:-translate-y-4 ${v.offset || ''}`} style={{ background: 'rgba(17, 18, 22, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="h-64 mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#f2ca50] mb-3">{v.name}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-[#94A3B8] font-black uppercase tracking-widest">Ukuran: {v.size}</p>
                  <p className="text-xs text-[#94A3B8] font-black uppercase tracking-widest">Material: {v.material}</p>
                  <p className="text-xs text-[#94A3B8] font-black uppercase tracking-widest">Fitur: {v.features}</p>
                </div>
                <a href="/hubungi-kami" className="block text-center py-3 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs hover:bg-[#f2ca50]/10 transition-colors">Pilih Varian</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="grid grid-cols-2 gap-4 pt-20">
              {['https://images.unsplash.com/photo-1497366754035-f200968e1414?w=300&h=300&fit=crop', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop'].map((img, i) => (
                <div key={i} className="aspect-square grayscale hover:grayscale-0 transition-all duration-700" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Keunggulan</h2>
              <div className="space-y-6">
                {[{ n: '01', t: 'Anti Benturan & Gores' }, { n: '02', t: 'Ketahanan Kimia & Air' }, { n: '03', t: 'Instalasi Modular Presisi' }].map((f, i) => (
                  <div key={i}>
                    <span className="text-2xl font-black tracking-tighter italic text-[#f2ca50]">{f.n}</span>
                    <h3 className="text-lg font-bold text-[#e3e2e8] mt-1">{f.t}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection 
        items={officePortfolios} 
        productHref="/portofolio" 
        viewAllLabel="Lihat Semua Proyek Office Cubicle" 
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Tertarik dengan Office Cubicle?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Solusi partisi kantor premium untuk ruang kerja yang efisien dan profesional.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
