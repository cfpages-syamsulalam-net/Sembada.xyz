import { StarryBackground } from '@/components/ui/StarryBackground'
import { SEO } from '@/components/ui/SEO'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Shield, Clock, Square, CheckCircle2, Droplets } from 'lucide-react'

export function CubicleToiletPage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Cubicle Toilet' }
  ]
  const cubiclePortfolios = portfolioData['cubicle-toilet']
  const variants = [
    { name: 'Premium', desc: 'Phenolic Resin untuk lalu lintas tinggi — ideal untuk gedung perkantoran dan hotel bintang 4', image: '/images/cubicle-toilet/cubicle%20toilet%20Premium.png' },
    { name: 'Standard', desc: 'Fasilitas kantor & publik — partisi phenolic resin tahan benturan dan air', image: '/images/cubicle-toilet/cubicle%20toilet%20standard.jpg', offset: 'md:translate-y-8' },
    { name: 'Two Tone', desc: 'Warna kontras modern — kombinasi dua warna phenolic untuk kesan elegan', image: '/images/cubicle-toilet/cubicle%20toilet%20two%20tone.png' },
    { name: 'PVC Board', desc: 'Tahan air ekonomis — pilihan hemat dengan ketahanan terhadap kelembapan', image: '/images/cubicle-toilet/cubicle%20toilet%20pvc%20board.png', offset: 'md:translate-y-8' },
    { name: 'Full Height', desc: 'Privasi lantai ke langit-langit — partisi full tinggi untuk keamanan maksimal', image: '/images/cubicle-toilet/cubicle%20toilet%20full%20height.png' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title="Cubicle Toilet - Partisi Toilet Premium - Sembada Batu Beling"
        description="Cubicle toilet phenolic resin untuk mall, kantor, dan stasiun. Tahan air, mudah dipasang, berbagai varian Premium, Standard, PVC. Hubungi 0852 5746 0869."
        url="https://sembada.xyz/produk/cubicle-toilet"
        type="product"
      />
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cubicle Toilet",
            "description": "Partisi toilet modern berbahan tipis, ringan, namun sangat kuat. Menghemat tempat, pemasangan cepat, tampilan elegan. Umum dipakai di mall, kantor, dan stasiun.",
            "brand": {
              "@type": "Brand",
              "name": "Sembada Batu Beling"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "PT. Batu Beling"
            },
            "category": "Partisi Toilet",
            "image": [
              "https://sembada.xyz/images/cubicle-toilet/cubicle%20toilet%20Premium.png",
              "https://sembada.xyz/images/cubicle-toilet/cubicle%20toilet%20standard.jpg"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "offerCount": "5",
              "offers": variants.map(v => ({
                "@type": "Offer",
                "name": `Cubicle Toilet ${v.name}`,
                "description": v.desc
              }))
            }
          })
        }}
      />
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
        <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
          Architectural Excellence
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-gold-gradient uppercase mb-4 md:mb-6">
          Cubicle Toilet
        </h1>
        <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
          Sistem partisi toilet modern dari panel tipis phenolic resin — ringan, kuat, dan elegan. Dipasang cepat, tahan lama.
        </p>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Apa itu Cubicle Toilet */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">Cubicle Toilet</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Cubicle Toilet adalah sistem partisi toilet modern yang terdiri dari <span className="text-[#f2ca50] font-bold">panel tipis phenolic resin</span> yang dihubungkan dengan aksesoris khusus. Ditujukan untuk pengguna fasilitas publik seperti perkantoran, hotel, dan rumah sakit.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Dipasang dengan proses yang sangat mudah, cepat, dan sederhana melalui perakitan partisi yang terhubung — menghemat tempat karena dindingnya tipis namun kuat, serta memberikan kesan bersih dan elegan.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/cubicle-toilet/cubicle%20toilet%20kantor%20modern.jpg" alt="Cubicle Toilet Modern" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Cubicle Toilet */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">Cubicle Toilet</span> adalah Investasi Terbaik?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Square, title: 'Efisiensi Ruang Maksimal', desc: 'Dinding tipis namun kuat — menghemat space toilet tanpa mengorbankan kualitas' },
              { icon: Clock, title: 'Pemasangan Cepat', desc: 'Proses perakitan sederhana dan cepat — minim gangguan operasional gedung' },
              { icon: Shield, title: 'Tahan Benturan & Air', desc: 'Material phenolic resin premium — tidak lapuk, tahan kelembapan tinggi' },
              { icon: CheckCircle2, title: 'Kesan Bersih & Elegan', desc: 'Tampilan modern dan higienis — meningkatkan pengalaman pengguna fasilitas' },
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
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Pilihan Varian</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Varian <span className="text-[#f2ca50]">Cocok untuk Setiap Kebutuhan</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {variants.map((v, i) => (
              <div key={i} className={`p-6 transition-all duration-300 hover:-translate-y-2 ${v.offset || ''}`}
                style={{ background: 'rgba(17, 18, 22, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
              >
                <div className="h-40 mb-4 overflow-hidden transition-all duration-700">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-gold-gradient mb-2">{v.name}</h3>
                <p className="text-xs text-[#e3e2e8]/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {['/images/cubicle-toilet/cubicle%20toilet%20hotel%20bintang%204.jpg', '/images/cubicle-toilet/cubicle%20toilet%20rumah%20sakit%20umum.jpg'].map((img, i) => (
                <div key={i} className="aspect-square transition-all duration-700" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Keunggulan <span className="text-[#f2ca50]">Phenolic Resin</span></h2>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Ketahanan Tinggi', desc: 'Material phenolic resin premium tahan benturan dan kelembaban — cocok untuk lalu lintas tinggi' },
                  { icon: Clock, title: 'Instalasi Cepat', desc: 'Pemasangan cepat menghemat waktu dan biaya — perakitan partisi yang terhubung' },
                  { icon: Droplets, title: 'Tahan Air & Lapuk', desc: 'Phenolic resin tidak menyerap air, tidak lapuk — aman untuk area basah intensif' },
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
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-1.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-2.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-3.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-4.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-5.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-6.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-7.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-8.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-9.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-10.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-11.jpg',
              '/images/cubicle-toilet/cubicle-toilet-harga-murah-12.jpg',
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src={img} alt={`Cubicle Toilet Project ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
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
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Konsultasikan kebutuhan partisi toilet Anda dengan tim kami. Tersedia berbagai varian phenolic resin untuk setiap kebutuhan.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
