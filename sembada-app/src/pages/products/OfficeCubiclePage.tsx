import { StarryBackground } from '@/components/ui/StarryBackground'
import { SEO } from '@/components/ui/SEO'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Shield, Droplet, CheckCircle2, Layers, Cable } from 'lucide-react'

export function OfficeCubiclePage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Office Cubicle' }
  ]
  const officePortfolios = portfolioData['office-cubicle']
  const variants = [
    { name: 'Advance Staff', size: '1200mm x 600mm', material: 'Phenolic 12mm', features: 'Cable Management', image: '/images/office-cubicle/office%20cubicle%20advance%20staff.jpg' },
    { name: 'Leader Staff', size: '1500mm x 750mm', material: 'Dual-tone Phenolic', features: 'Acoustic Panels', image: '/images/office-cubicle/office%20cubicle%20leader%20staff.jpg', offset: 'md:mt-12' },
    { name: 'Supervisor', size: '1800mm x 900mm', material: 'Floor-to-Ceiling', features: 'Luxury Finishes', image: '/images/office-cubicle/office%20cubicle%20supervisor.jpg', offset: 'md:-mt-8' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title="Office Cubicle - Sekat Ruang Kerja Phenolic - Sembada Batu Beling"
        description="Office cubicle phenolic resin untuk sekat ruang kerja modern. Tahan benturan, tidak lapuk, tersedia Advance, Leader, Supervisor. Hubungi 0852 5746 0869."
        url="https://sembada.xyz/produk/office-cubicle"
        type="product"
      />
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Office Cubicle",
            "description": "Sekat antar ruang kerja/meja berbahan Phenolic Resin Premium. Tahan benturan, tidak lapuk, aman untuk suhu dingin/lembab. Dilengkapi fitur wire hole, stop kontak, dan aksesoris aluminium.",
            "brand": {
              "@type": "Brand",
              "name": "Sembada Batu Beling"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "PT. Batu Beling"
            },
            "category": "Partisi Kantor",
            "image": [
              "https://sembada.xyz/images/office-cubicle/office%20cubicle%201.jpg",
              "https://sembada.xyz/images/office-cubicle/office%20cubicle%20advance%20staff.jpg"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "offerCount": "3",
              "offers": variants.map(v => ({
                "@type": "Offer",
                "name": `Office Cubicle ${v.name}`,
                "description": `${v.size}, ${v.material}, ${v.features}`
              }))
            }
          })
        }}
      />
      {/* Hero */}
      <section className="h-[600px] md:h-[819px] flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          <img src="/images/office-cubicle/office%20cubicle%201.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/60 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#f2ca50] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Architectural Solution</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6">Office Cubicle</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-6 md:mb-8">Sekat ruang kerja dari phenolic resin premium — tahan benturan, tidak lapuk, aman untuk suhu dingin & lembab.</p>
          <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Apa itu Office Cubicle */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">Office Cubicle</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Office Cubicle adalah sekat ruang atau meja kerja kantor yang menggunakan <span className="text-[#f2ca50] font-bold">material phenolic resin premium</span>. Diperuntukkan bagi staf tingkat lanjut, pemimpin staf (leader), hingga supervisor.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Panel phenolic dipadukan dengan meja, stop kontak, lubang kabel (wire hole), dan aksesoris aluminium — menciptakan ruang kerja yang privat, rapi, dan nyaman bagi karyawan di area perkantoran.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/office-cubicle/office%20cubicle%20advance%20staff%20workstations.webp" alt="Office Cubicle Workstation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Office Cubicle */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">Office Cubicle</span> kami unggul?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'Tahan Benturan & Gores', desc: 'Phenolic resin premium — tidak mudah rusak, tahan benturan sehari-hari di area kerja' },
              { icon: Droplet, title: 'Tahan Air & Kelembapan', desc: 'Cocok untuk kantor dengan suhu dingin atau tingkat kelembapan tinggi — tidak lapuk' },
              { icon: Layers, title: 'Konfigurasi Modular', desc: 'Tersedia untuk Advance Staff, Leader, hingga Supervisor — sesuaikan dengan struktur kantor' },
              { icon: CheckCircle2, title: 'Tampilan Bersih & Rapi', desc: 'Memberikan kesan kantor yang profesional, bersih, dan terorganisir' },
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

      {/* Variants */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 block">Sistem Modular</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Varian <span className="text-[#f2ca50]">Sesuai Jabatan</span></h2>
            <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto mb-4" />
            <p className="text-sm md:text-base text-[#e3e2e8]/70 max-w-2xl mx-auto">Tiga konfigurasi modular untuk memenuhi kebutuhan ruang kerja setiap level karyawan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {variants.map((v, i) => (
              <div key={i} className={`p-8 md:p-10 transition-transform duration-500 hover:-translate-y-4 ${v.offset || ''}`} style={{ background: 'rgba(17, 18, 22, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="h-64 mb-6 overflow-hidden transition-all duration-700">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-gold-gradient mb-3">{v.name}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <Shield className="w-3 h-3 text-[#f2ca50]" />
                    <span className="font-black uppercase tracking-widest">Ukuran: {v.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <Layers className="w-3 h-3 text-[#f2ca50]" />
                    <span className="font-black uppercase tracking-widest">Material: {v.material}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <Cable className="w-3 h-3 text-[#f2ca50]" />
                    <span className="font-black uppercase tracking-widest">Fitur: {v.features}</span>
                  </div>
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
              {['/images/office-cubicle/office%20cubicle%20leader%20staff%20workstations.jpg', '/images/office-cubicle/office%20cubicle%20supervisor%20workstations.jpg'].map((img, i) => (
                <div key={i} className="aspect-square transition-all duration-700" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Keunggulan <span className="text-[#f2ca50]">Phenolic Resin</span></h2>
              <div className="space-y-6">
                {[{ n: '01', t: 'Anti Benturan & Gores', desc: 'Phenolic resin premium tidak mudah rusak oleh benturan atau goresan sehari-hari' }, { n: '02', t: 'Ketahanan Kimia & Air', desc: 'Tidak menyerap air, tidak lapuk — aman untuk area kantor dengan AC intensif' }, { n: '03', t: 'Instalasi Modular Presisi', desc: 'Panel phenolic + meja + aksesoris terintegrasi — pemasangan cepat dan rapi' }].map((f, i) => (
                  <div key={i}>
                    <span className="text-2xl font-black tracking-tighter italic text-[#f2ca50]">{f.n}</span>
                    <h3 className="text-lg font-bold text-[#e3e2e8] mt-1">{f.t}</h3>
                    <p className="text-sm text-[#e3e2e8]/60">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Extra Images */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Portofolio Lengkap</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Galeri <span className="text-[#f2ca50]">Proyek Kami</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              '/images/office-cubicle/office-cubicle-harga-murah-1.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-2.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-3.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-4.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-5.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-6.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-7.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-8.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-9.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-10.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-11.jpg',
              '/images/office-cubicle/office-cubicle-harga-murah-12.jpg',
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src={img} alt={`Office Cubicle Project ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
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
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Siap Menata Ruang Kerja?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Konsultasikan kebutuhan sekat kantor Anda dengan tim kami. Solusi phenolic resin untuk ruang kerja yang profesional dan nyaman.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
