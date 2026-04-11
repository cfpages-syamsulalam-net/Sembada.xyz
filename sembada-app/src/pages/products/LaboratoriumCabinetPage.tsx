import { StarryBackground } from '@/components/ui/StarryBackground'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { FlaskConical, Droplet, Building2, CheckCircle2, Beaker, ShieldCheck } from 'lucide-react'

export function LaboratoriumCabinetPage() {
  const labPortfolios = portfolioData['laboratorium-cabinet']
  const features = [
    { icon: FlaskConical, title: 'Resistensi Kimia', desc: 'Tahan berbagai bahan kimia laboratorium — asam, basa, hingga pelarut organik' },
    { icon: Droplet, title: 'Tahan Air & Lembab', desc: 'Cocok untuk area basah — kolam renang, lab kimia, dan fasilitas cuci' },
    { icon: Building2, title: 'Struktur Monolitik', desc: 'Konstruksi solid dan kokoh dari phenolic resin padat — tidak mudah rusak' },
    { icon: ShieldCheck, title: 'Permukaan HPL Mewah', desc: 'Lapisan HPL halus — kesan mewah dan mudah dibersihkan setelah kontaminasi' },
  ]

  const variants = [
    { name: 'Cabinet Pulau (Island)', tagline: 'Pusat Kolaborasi Riset', desc: 'Kabinet tengah untuk kolaborasi tim — akses dari semua sisi, ideal untuk lab riset bersama', img: '/images/laboratorium-cabinet/laboratorium%20cabinet%20pulau%20(island).png', span: 'col-span-12 md:col-span-4' },
    { name: 'Cabinet Lemari Asam', tagline: 'Keamanan Zat Volatil', desc: 'Sistem exhaust terintegrasi — aman untuk penanganan bahan kimia berbahaya dan volatil', img: '/images/laboratorium-cabinet/laboratorium%20cabinet%20lemari%20asam.png', span: 'col-span-12 md:col-span-5' },
    { name: 'Cabinet Dinding', tagline: 'Optimasi Ruang Vertikal', desc: 'Kabinet dinding untuk penyimpanan vertikal — hemat space, kapasitas maksimal', img: '/images/laboratorium-cabinet/laboratorium%20cabinet%20dinding.png', span: 'col-span-12 md:col-span-3' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          <img src="/images/laboratorium-cabinet/laboratorium%20cabinet%201.png" alt="" className="w-full aspect-[21/9] object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/80 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center py-24">
          <span className="text-[#f2ca50] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Premium Laboratory Solutions</span>
          <h1 className="text-[3.75rem] md:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">Laboratorium Cabinet</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light italic border-l-2 border-[#f2ca50]/40 pl-6 text-left">
            Furnitur lab tahan kimia dari phenolic resin — tahan air, tahan zat kimia, permukaan halus, kesan mewah berkat lapisan HPL.
          </p>
        </div>
      </section>

      {/* Apa itu Laboratorium Cabinet */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">Laboratorium Cabinet</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Laboratorium Cabinet adalah <span className="text-[#f2ca50] font-bold">furnitur khusus laboratorium</span> seperti kabinet dinding, lemari asam, dan kabinet pulau. Ditujukan untuk teknisi laboratorium atau peneliti yang bekerja dengan bahan-bahan sensitif.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Dibuat dari <span className="text-[#f2ca50] font-bold">material phenolic resin padat</span> yang dirancang khusus untuk kondisi lingkungan ekstrem — tahan air, tahan kimia, permukaan halus, dan memiliki kesan mewah berkat lapisan HPL.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/laboratorium-cabinet/laboratorium%20cabinet%20laboratorium%20kimia.png" alt="Laboratorium Cabinet" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Laboratorium Cabinet */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">Laboratorium Cabinet</span> kami paling tahan?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Beaker, title: 'Tahan Paparan Kimia Intens', desc: 'Phenolic resin padat menahan asam, basa, dan pelarut — aman untuk lab kimia dan biologi' },
              { icon: Droplet, title: 'Tahan Air & Area Basah', desc: 'Cocok untuk kolam renang, area cuci, dan lab basah — tidak menyerap air' },
              { icon: ShieldCheck, title: 'Permukaan HPL Mewah', desc: 'Lapisan HPL halus dan elegan — mudah dibersihkan, kesan premium untuk lab' },
              { icon: CheckCircle2, title: 'Dirancang untuk Kondisi Ekstrem', desc: 'Phenolic resin padat — konstruksi monolitik yang tidak mudah retak atau rusak' },
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
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] border-y border-[#f2ca50]/10 overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6 md:mb-8">Material Keunggulan</h2>
              <div className="space-y-6">
                {features.map((f, i) => (
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

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {['/images/laboratorium-cabinet/laboratorium%20cabinet%202.png', '/images/laboratorium-cabinet/laboratorium%20cabinet%203.png', '/images/laboratorium-cabinet/laboratorium%20cabinet%204.png', '/images/laboratorium-cabinet/laboratorium%20cabinet%20toilet%20fasilitas%20umum.jpg'].map((img, i) => (
                <div key={i} className={`aspect-square transition-all duration-700 ${i % 2 === 1 ? 'translate-y-12' : ''}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 block">Varian Sistem Modul</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient">Koleksi Varian</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {variants.map((v, i) => (
              <div key={i} className={`group relative overflow-hidden ${v.span}`} style={{ background: 'rgba(17, 18, 22, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="p-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#e3e2e8] mb-1">{v.name}</h3>
                      <p className="text-xs md:text-sm text-[#94A3B8] mb-1">{v.tagline}</p>
                      <p className="text-xs text-[#e3e2e8]/60 mb-3 leading-relaxed">{v.desc}</p>
                      <a href="/hubungi-kami" className="inline-block text-[10px] uppercase tracking-[0.2em] text-[#f2ca50] font-black hover:text-white transition-colors">Konsultasi →</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection
        items={labPortfolios}
        productHref="/portofolio"
        viewAllLabel="Lihat Semua Proyek Laboratorium Cabinet"
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="relative">
            {/* Decorative hex dots */}
            <div className="flex justify-center gap-3 mb-8">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-3 h-3 bg-[#f2ca50]" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />
              ))}
            </div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 italic">Siap Membangun Laboratorium Impian Anda?</h2>
            <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Konsultasikan kebutuhan furnitur laboratorium Anda dengan tim ahli kami. Tahan kimia, tahan air, tahan lama.</p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(242,202,80,0.5)]">Minta Penawaran</a>
              <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
