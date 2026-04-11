import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Settings, Building2, Layers, CheckCircle2, Target, Clock } from 'lucide-react'

export function CNCOrnamentPage() {
  const cncPortfolios = portfolioData['cnc-ornament']
  const showcases = [
    { title: 'Fasad Politeknik', cat: 'Pendidikan', img: '/images/cnc-ornament/cnc%20ornament%20fasad%20politeknik.webp', span: 'col-span-8', h: 'h-[400px] md:h-[500px]' },
    { title: 'Mushola KAI', cat: 'Transportasi', img: '/images/cnc-ornament/cnc%20ornament%20mushola%20kereta%20makan%20kai.webp', span: 'col-span-4', h: 'h-[400px] md:h-[500px]', offset: 'md:translate-y-12' },
    { title: 'Masjid Baitul Fadli', cat: 'Ibadah', img: '/images/cnc-ornament/cnc%20ornament%20masjid%20baitul%20fadli.webp', span: 'col-span-12', h: 'h-[500px] md:h-[600px]', offset: 'mt-8 md:mt-24' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="h-[600px] md:h-[819px] flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="star" style={{ position: 'absolute', top: `${15 + i * 15}%`, left: `${10 + i * 15}%`, width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`, backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(242,202,80,0.8)', borderRadius: '50%', animation: `twinkle ${3 + i}s ease-in-out infinite` }} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/60 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Inovasi Arsitektur Premium</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">CNC Ornament</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">Ornamen presisi tinggi dengan ukiran digital — dipercaya oleh PT KAI, DPRD Surabaya, dan Politeknik Surabaya.</p>
          <a href="/portofolio" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">Lihat Portofolio</a>
        </div>
      </section>

      {/* Apa itu CNC Ornament */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">CNC Ornament</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                CNC Ornament adalah produk ornamen dengan <span className="text-[#f2ca50] font-bold">teknik gaya ukir khusus</span> yang diproses melalui sistem komputerisasi. Digunakan oleh klien besar seperti PT KAI, DPRD Surabaya, hingga instansi pendidikan seperti Politeknik Surabaya.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Menggunakan material terbaik yang dipotong dan diukir secara presisi menggunakan mesin CNC sesuai desain digital — menawarkan motif beragam dengan tema kustom yang mampu meningkatkan nilai estetika properti.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/cnc-ornament/cnc%20ornament%20gedung%20dprd%20surabaya.webp" alt="CNC Ornament DPRD Surabaya" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa CNC Ornament */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">CNC Ornament</span> kami berbeda?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: 'Presisi 0.1mm', desc: 'Mesin CNC komputerisasi menghasilkan ukiran dengan akurasi sempurna — tidak ada kesalahan manual' },
              { icon: Clock, title: 'Tepat Waktu', desc: 'Proses produksi terotomatisasi — pengerjaan cepat dan selalu sesuai jadwal pengiriman' },
              { icon: Layers, title: 'Desain Kustom', desc: 'Motif beragam sesuai tema proyek — dari ornamen tradisional hingga kontemporer' },
              { icon: CheckCircle2, title: 'Dipercaya Instansi Besar', desc: 'Telah digunakan oleh PT KAI, DPRD, masjid, dan institusi pendidikan nasional' },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-6" style={{ background: 'rgba(11, 12, 16, 0.5)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', background: 'rgba(212, 175, 55, 0.1)' }}>
                  <f.icon className="w-6 h-6 text-[#f2ca50]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#e3e2e8] mb-1">{f.title}</h3>
                  <p className="text-sm text-[#e3e2e8]/60 leading-relaxed">{f.desc}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Settings, t: 'Presisi Tinggi', d: 'Toleransi 0.1mm — akurasi sempurna untuk setiap detail ukiran' },
              { icon: Building2, t: 'Kustom Desain', d: 'Desain sesuai kebutuhan proyek — dari tradisional hingga modern', offset: 'mt-12 md:mt-0' },
              { icon: Layers, t: 'Multi Material', d: 'Kayu, acrylic, metal — fleksibel untuk berbagai aplikasi ornamen' },
            ].map((f, i) => (
              <div key={i} className={`text-center ${f.offset || ''}`}>
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', background: 'rgba(11, 12, 16, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
                  <f.icon className="w-12 h-12 text-[#f2ca50]" />
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
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
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
            <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light relative z-10">Konsultasikan desain ornamen CNC custom Anda dengan tim ahli kami. Presisi komputerisasi untuk hasil sempurna.</p>
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
