import { StarryBackground } from '@/components/ui/StarryBackground'
import { SEO } from '@/components/ui/SEO'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { Leaf, Shield, Droplets, Sun, CheckCircle2 } from 'lucide-react'

export function CellustonePage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Cellustone' }
  ]
  const cellustonePortfolios = portfolioData['cellustone']
  const features = [
    { icon: Leaf, title: 'Ramah Lingkungan', desc: 'Material komposit dari bahan alam dengan cellulosa fibre — pilihan bijak untuk bangunan hijau' },
    { icon: Shield, title: 'Minim Muai Susut', desc: 'Risiko retak hampir nol, tahan terhadap perubahan cuaca ekstrem' },
    { icon: Droplets, title: 'Tahan Air & Cuaca', desc: 'Aman untuk aplikasi outdoor maupun indoor dengan daya tahan tinggi' },
    { icon: Sun, title: 'Autoclave Processed', desc: 'Diproses dengan teknik pengeringan autoclave untuk kekuatan maksimal' },
  ]

  const applications = [
    { name: 'Cellustone Fasad', desc: 'Tampak luar bangunan yang tahan cuaca dan estetis', img: '/images/cellustone/cellustone%20fasad.jpg' },
    { name: 'Cellustone Wall Panel', desc: 'Interior dinding ramah lingkungan yang mempercantik ruangan', img: '/images/cellustone/cellustone%20wall%20panel.jpg', offset: 'md:mt-24' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title="Cellustone - Wall Panel Ramah Lingkungan - Sembada Batu Beling"
        description="Cellustone wall panel untuk fasad dan interior. Material komposit alam, tahan air, minim muai-susut. Cocok untuk indoor & outdoor. Hubungi 0852 5746 0869."
        url="https://sembada.xyz/produk/cellustone-ornament"
        type="product"
      />
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cellustone Ornament",
            "description": "Material komposit dari bahan alam, diperkuat adhesive berkualitas, featured cement, dan cellulosa fibre. Ramah lingkungan, minim muai-susut, tahan untuk area Indoor maupun Outdoor.",
            "brand": {
              "@type": "Brand",
              "name": "Sembada Batu Beling"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "PT. Batu Beling"
            },
            "category": "Wall Panel",
            "image": [
              "https://sembada.xyz/images/cellustone/cellustone%20fasad%201.jpg",
              "https://sembada.xyz/images/cellustone/cellustone%20wall%20panel%201.jpg"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      {/* Hero */}
      <section className="h-[600px] md:h-[819px] flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="star" style={{ position: 'absolute', top: `${15 + i * 15}%`, left: `${10 + i * 15}%`, width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`, backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(242,202,80,0.8)', borderRadius: '50%', animation: `twinkle ${3 + i}s ease-in-out infinite` }} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/60 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Arsitektur Masa Depan</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">Cellustone</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">Panel dinding, ornamen, dan fasad dari material komposit bahan alam — ramah lingkungan, tahan cuaca, estetis.</p>
          <div className="w-px h-24 mx-auto bg-gradient-to-b from-[#f2ca50] to-transparent" />
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Apa itu Cellustone */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">Cellustone</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Cellustone adalah panel dinding, ornamen, dan fasad yang terbuat dari <span className="text-[#f2ca50] font-bold">material komposit bahan alam</span>. Diproduksi oleh Batubeling untuk pemilik properti yang mengedepankan estetika dan keberlanjutan.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Material diperkuat dengan <span className="text-[#f2ca50] font-bold">adhesive berkualitas dan serat selulosa</span>, lalu diproses dengan teknik pengeringan autoclave untuk menghasilkan produk dengan daya tahan tinggi dan risiko retak minimal.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/cellustone/cellustone%201.jpg" alt="Cellustone Material" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Cellustone */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">Cellustone</span> adalah Pilihan Terbaik?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle2, title: 'Minim Risiko Retak', desc: 'Material tahan muai susut akibat perubahan suhu dan cuaca — cocok untuk area tropis' },
              { icon: Leaf, title: 'Ramah Lingkungan', desc: 'Terbuat dari bahan alam dengan cellulosa fibre — pilihan untuk bangunan hijau berkelanjutan' },
              { icon: Shield, title: 'Daya Tahan Tinggi', desc: 'Diproses dengan teknik autoclave menghasilkan kekuatan material yang optimal' },
              { icon: Droplets, title: 'Aplikasi Fleksibel', desc: 'Dapat digunakan untuk interior maupun eksterior bangunan tanpa khawatir kerusakan cuaca' },
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Text */}
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Keunggulan <span className="text-[#f2ca50]">Struktural</span></h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-6 md:mb-8">Ramah lingkungan dengan performa tinggi untuk aplikasi interior dan eksterior.</p>
              <div className="space-y-4">
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

            {/* Image Grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {[
                '/images/cellustone/cellustone%202.jpg',
                '/images/cellustone/cellustone%203.jpg',
                '/images/cellustone/cellustone%204.jpg',
                '/images/cellustone/cellustone%20fasad.jpg',
              ].map((img, i) => (
                <div key={i} className={`aspect-square transition-all duration-700 ${['translate-y-12', '-translate-y-6', 'translate-y-6', ''][i]}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-2">Aplikasi Produk</h3>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient">Variasi Sempurna</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {applications.map((app, i) => (
              <div key={i} className={`group relative aspect-[4/5] overflow-hidden ${app.offset || ''}`}>
                <img src={app.img} alt={app.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#e3e2e8] mb-2">{app.name}</h3>
                  <p className="text-sm md:text-base text-[#94A3B8] mb-4">{app.desc}</p>
                  <a href="/hubungi-kami" className="inline-block px-6 py-3 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs hover:bg-[#f2ca50]/10 transition-colors">Konsultasi Gratis</a>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              '/images/cellustone/cellustone-5.JPG',
              '/images/cellustone/cellustone-6.JPG',
              '/images/cellustone/cellustone-7.JPG',
              '/images/cellustone/cellustone-8.JPG',
              '/images/cellustone/cellustone-9.JPG',
              '/images/cellustone/cellustone-10.JPG',
              '/images/cellustone/cellustone-11.JPG',
              '/images/cellustone/cellustone-12.JPG',
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src={img} alt={`Cellustone Project ${i + 5}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection
        items={cellustonePortfolios}
        productHref="/portofolio"
        viewAllLabel="Lihat Semua Proyek Cellustone"
      />

      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Tertarik dengan Cellustone?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Solusi wall panel eco-friendly untuk interior dan eksterior bangunan Anda. Konsultasikan kebutuhan Anda dengan tim ahli kami.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
