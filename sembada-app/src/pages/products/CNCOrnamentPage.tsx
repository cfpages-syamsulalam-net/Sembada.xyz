import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'

export function CNCOrnamentPage() {
  const cncPortfolios = portfolioData['cnc-ornament']
  const showcases = [
    { title: 'Fasad Politeknik', cat: 'Pendidikan', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=500&fit=crop', span: 'col-span-8', h: 'h-[400px] md:h-[500px]' },
    { title: 'Mushola KAI', cat: 'Transportasi', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=500&fit=crop', span: 'col-span-4', h: 'h-[400px] md:h-[500px]', offset: 'md:translate-y-12' },
    { title: 'Masjid Baitul Fadli', cat: 'Ibadah', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop', span: 'col-span-12', h: 'h-[500px] md:h-[600px]', offset: 'mt-8 md:mt-24' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="h-[600px] md:h-[819px] flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/50 to-[#0B0C10]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Inovasi Arsitektur Premium</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">CNC Ornament</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">Pekerjaan ornamen berbasis komputerisasi yang menghasilkan presisi sempurna dan proporsi pas.</p>
          <a href="/portofolio" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">Lihat Katalog</a>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: 'precision_manufacturing', t: 'Presisi Tinggi', d: 'Toleransi 0.1mm' },
              { icon: 'architecture', t: 'Kustom Desain', d: 'Desain sesuai kebutuhan', offset: 'mt-12 md:mt-0' },
              { icon: 'layers', t: 'Multi Material', d: 'Kayu, acrylic, metal' },
            ].map((f, i) => (
              <div key={i} className={`text-center ${f.offset || ''}`}>
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', background: 'rgba(11, 12, 16, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                  <span className="material-symbols-outlined text-5xl text-[#f2ca50]">{f.icon}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#f2ca50] mb-2">{f.t}</h3>
                <p className="text-sm text-[#e3e2e8]/60">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="relative py-16 md:py-24 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Implementasi Portofolio</h2>
            <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto" />
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {showcases.map((s, i) => (
              <div key={i} className={`group relative overflow-hidden ${s.span} ${s.h} ${s.offset || ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-black mb-1 block">{s.cat}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#e3e2e8]">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection 
        items={cncPortfolios} 
        productHref="/portofolio" 
        viewAllLabel="Lihat Semua Proyek CNC" 
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="p-8 md:p-12 relative overflow-hidden" style={{ background: 'rgba(11, 12, 16, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6 relative z-10">Wujudkan Desain Ornamen Anda</h2>
            <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light relative z-10">Konsultasikan desain ornamen CNC custom Anda dengan tim ahli kami.</p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10">
              <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
              <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
