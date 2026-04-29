import { StarryBackground } from '@/components/ui/StarryBackground'
import { SEO } from '@/components/ui/SEO'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { ShowerHead, Star, CheckCircle2, MapPin, Calendar, AlertTriangle, Truck, Shield } from 'lucide-react'

export function PortableToiletPage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Toilet Portable' }
  ]
  const portablePortfolios = portfolioData['portable-toilet']
  const variants = [
    {
      name: 'Low Price',
      description: 'Varian ekonomis dengan harga terjangkau — cocok untuk proyek konstruksi dan event dengan budget terbatas.',
      features: ['Material HDPE berkualitas', 'Ventilasi udara memadai', 'Tangki 150L', 'Instalasi cepat'],
      image: '/images/toilet-portable/toilet%20portable%202.jpg',
    },
    {
      name: 'Standard/Deluxe',
      description: 'Varian premium dengan fitur lengkap dan desain modern elegan — pilihan utama untuk fasilitas publik berkualitas.',
      features: ['Material phenolic resin', 'Interior modern', 'Lampu & kran air', 'Mudah dipindahkan'],
      image: '/images/toilet-portable/toilet%20portable%203.webp',
      highlight: true,
    },
    {
      name: 'Emergency',
      description: 'Dirancang untuk mobilitas tinggi dan penempatan cepat di lokasi darurat atau zona bencana.',
      features: ['Ringan & portable', 'Rapid deployment', 'Sanitasi kimia', 'Cocok untuk bencana'],
      image: '/images/toilet-portable/toilet%20portable%204.webp',
    },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title="Toilet Portable - Solusi Sanitasi Movable - Sembada Batu Beling"
        description="Toilet portable premium dengan material phenolic resin untuk proyek konstruksi, event, dan tanggap darurat. Mudah dipindah, tahan lama. Hubungi 0852 5746 0869."
        url="https://sembada.xyz/produk/portable-toilet"
        type="product"
      />
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Portable Toilet",
            "description": "Unit sanitasi movable yang fleksibel untuk berbagai kebutuhan. Material premium tahan air, desain modern elegan, mudah dipindahkan. Cocok untuk proyek konstruksi, event, tempat wisata, dan tanggap darurat.",
            "brand": {
              "@type": "Brand",
              "name": "Sembada Batu Beling"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "PT. Batu Beling"
            },
            "category": "Sanitasi Portable",
            "image": [
              "https://sembada.xyz/images/toilet-portable/toilet%20portable.webp",
              "https://sembada.xyz/images/toilet-portable/toilet%20portable%201.jpg",
              "https://sembada.xyz/images/toilet-portable/toilet%20portable%202.jpg"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "offerCount": "3",
              "offers": variants.map(v => ({
                "@type": "Offer",
                "name": `Portable Toilet ${v.name}`,
                "description": v.description
              }))
            }
          })
        }}
      />
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/toilet-portable/toilet%20portable.webp"
            alt="Portable Toilet Hero"
            className="w-full h-full object-cover opacity-20"
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
            Unit sanitasi movable yang fleksibel — siap digunakan kapan saja dan di mana saja. Tersedia tipe deluxe hingga emergency.
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-[#111216]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: '01', title: 'Fleksibel & Movable', icon: Truck },
              { num: '02', title: 'Instalasi Cepat', icon: CheckCircle2, offset: 'md:mt-8' },
              { num: '03', title: 'Desain Modern', icon: Star },
              { num: '04', title: 'Siap Darurat', icon: AlertTriangle, offset: 'md:mt-8' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
              <div
                key={i}
                className={`p-4 md:p-6 border-l-4 border-[#f2ca50] ${stat.offset || ''}`}
                style={{ background: 'rgba(17, 18, 22, 0.7)' }}
              >
                <Icon className="w-5 h-5 text-[#f2ca50] mb-2" />
                <div className="text-2xl md:text-3xl font-black text-[#f2ca50] mb-1">{stat.num}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#94A3B8] font-black">
                  {stat.title}
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Apa itu Portable Toilet */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">Portable Toilet</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Portable Toilet adalah <span className="text-[#f2ca50] font-bold">unit sanitasi movable (bisa dipindah)</span> yang dilengkapi dengan fasilitas interior lengkap. Digunakan oleh instansi pemerintah, sektor konstruksi, dinas kesehatan, dan tim tanggap darurat.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Unit dirakit menggunakan material terbaik sehingga siap pakai dan mudah untuk direlokasi — fleksibel, memiliki desain modern/elegan, dan tersedia dalam berbagai tipe dari deluxe hingga emergency.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/toilet-portable/toilet%20portable%20instansi%20pemerintahan.jpg" alt="Portable Toilet Instansi Pemerintahan" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Portable Toilet */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">Portable Toilet</span> kami solusi terbaik?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: 'Digunakan di Mana Saja', desc: 'Lokasi proyek konstruksi, tempat wisata, area pergudangan, atau zona bencana — semua bisa' },
              { icon: Calendar, title: 'Siap Pakai Kapan Saja', desc: 'Tidak perlu instalasi permanen — langsung digunakan setelah penempatan' },
              { icon: Shield, title: 'Material Premium', desc: 'Phenolic resin & HDPE berkualitas — tahan benturan, mudah dibersihkan, awet' },
              { icon: AlertTriangle, title: 'Tersedia Tipe Emergency', desc: 'Untuk situasi darurat dan bencana — rapid deployment, ringan, sanitasi kimia' },
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
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Pilih Varian <span className="text-[#f2ca50]">Sesuai Kebutuhan</span></h2>
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
                  }}
                >
                  {variant.highlight ? <Star className="w-8 h-8 text-[#f2ca50]" /> : <ShowerHead className="w-8 h-8 text-[#f2ca50]" />}
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-gold-gradient mb-3 text-center">
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
                  {variant.highlight ? 'Pilih Deluxe' : 'Pilih Varian'}
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
                '/images/toilet-portable/toilet%20portable%20sektor%20konstruksi%20&%20pergudangan.webp',
                '/images/toilet-portable/toilet%20portable%20dinas%20kesehatan.webp',
                '/images/toilet-portable/toilet%20portable%20tempat%20wisata%20&%20perkantoran.jpg',
                '/images/toilet-portable/toilet%20portable%20pon%20(pekan%20olahraga%20nasional).png',
              ].map((img, i) => (
                <div
                  key={i}
                  className={`aspect-square transition-all duration-700 ${
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
                Mengapa <span className="text-[#f2ca50]">Unit Kami</span> Unggul?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: '01',
                    title: 'Durabilitas Tinggi',
                    desc: 'Material berkualitas tinggi untuk ketahanan maksimal terhadap cuaca dan penggunaan intensif.',
                  },
                  {
                    num: '02',
                    title: 'Instalasi Cepat',
                    desc: 'Desain modular memungkinkan instalasi cepat dan mudah dipindahkan sesuai kebutuhan.',
                  },
                  {
                    num: '03',
                    title: 'Advanced Sanitation',
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
              '/images/toilet-portable/toilet-portable-harga-murah-1.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-2.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-3.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-4.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-5.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-6.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-7.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-8.jpg',
              '/images/toilet-portable/toilet-portable-harga-murah-9.jpg',
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src={img} alt={`Portable Toilet Project ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
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
            Butuh Sanitasi Fleksibel?
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
