import { StarryBackground } from '@/components/ui/StarryBackground'
import { SEO } from '@/components/ui/SEO'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { portfolioData } from '@/data/portfolios'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { VolumeX, Settings2, Shield, CheckCircle2, DoorOpen, Maximize2 } from 'lucide-react'

export function MovableDoorPage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Movable Door' }
  ]
  const movablePortfolios = portfolioData['movable-door']
  const variants = [
    { name: 'Rubi', tag: 'Eksklusif', desc: 'Partisi fleksibel semi-permanen — desain premium dengan sistem geser halus', img: '/images/partisi-ruangan/movable%20door%20rubi.jpg' },
    { name: 'Kalimaya', tag: 'Akustik', desc: 'Isolasi suara tingkat menengah — ideal untuk ruang pertemuan dan aula', img: '/images/partisi-ruangan/movable%20door%20kalimaya.png', offset: 'translate-y-8 md:translate-y-12' },
    { name: 'Batu Beling', tag: 'Signature', desc: 'Peredam suara maksimal — privasi total antar ruang dengan full soundproof', img: '/images/partisi-ruangan/movable%20door%20batu%20beling.jpg' },
    { name: 'Emerald', tag: 'Premium', desc: 'Performa akustik industri — cocok untuk ruang konferensi dan ballroom hotel', img: '/images/partisi-ruangan/movable%20door%20emerald.jpg', offset: 'translate-y-8 md:translate-y-12' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title="Movable Door - Partisi Ruangan Geser - Sembada Batu Beling"
        description="Movable door/partisi ruangan geser dengan fitur sound insulation. Varian Rubi, Kalimaya, Batu Beling, Emerald. Custom desain. Hubungi 0852 5746 0869."
        url="https://sembada.xyz/produk/movable-door"
        type="product"
      />
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Movable Door",
            "description": "Partisi ruangan yang dapat digeser/dipindahkan untuk membagi ruang utama menjadi beberapa fungsi. Memberikan privasi dengan spesifikasi full peredam suara. Bisa custom design.",
            "brand": {
              "@type": "Brand",
              "name": "Sembada Batu Beling"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "PT. Batu Beling"
            },
            "category": "Partisi Ruangan",
            "image": [
              "https://sembada.xyz/images/partisi-ruangan/movable%20door%201.jpg",
              "https://sembada.xyz/images/partisi-ruangan/movable%20door%20rubi.jpg"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "offerCount": "4",
              "offers": variants.map(v => ({
                "@type": "Offer",
                "name": `Movable Door ${v.name}`,
                "description": v.desc
              }))
            }
          })
        }}
      />
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          <img src="/images/partisi-ruangan/movable%20door%201.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/70 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Sembada Architectural Solutions</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">Movable Door</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light italic mb-8">Partisi ruangan yang dapat digeser — fungsi ganda pada satu ruangan besar dengan privasi total dan full peredam suara.</p>
          <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Apa itu Movable Door */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengenal Produk</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Apa itu <span className="text-[#f2ca50]">Movable Door</span>?</h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Movable Door adalah <span className="text-[#f2ca50] font-bold">partisi ruangan yang dapat digeser atau dipindahkan</span> sesuai kebutuhan pembagian ruang. Ideal untuk pemilik gedung yang membutuhkan fleksibilitas fungsi ruangan.
              </p>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Menggunakan sistem pintu geser dengan desain kustom yang tersedia dalam tipe Kalimaya, Emerald, atau Rubi — memungkinkan privasi total antar ruang dengan sistem kedap suara untuk ruang pertemuan dan aula besar.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src="/images/partisi-ruangan/movable%20door%20batu%20beling.jpg" alt="Movable Door Batu Beling" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Movable Door */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Mengapa Memilih Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4">Kenapa <span className="text-[#f2ca50]">Movable Door</span> solusi ruang cerdas?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Maximize2, title: 'Fungsi Ganda Satu Ruangan', desc: 'Satu aula besar bisa dibagi menjadi beberapa ruang kecil — hemat space dan biaya konstruksi' },
              { icon: VolumeX, title: 'Full Peredam Suara', desc: 'Privasi total antar ruang — sistem kedap suara untuk ruang pertemuan dan konferensi' },
              { icon: DoorOpen, title: 'Desain Kustom', desc: 'Tersedia dalam tipe Kalimaya, Emerald, dan Rubi — sesuaikan dengan estetika gedung' },
              { icon: CheckCircle2, title: 'Mudah Digeser', desc: 'Sistem rel geser yang halus — satu orang bisa mengoperasikan tanpa usaha berat' },
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">Pilih Tipe <span className="text-[#f2ca50]">Sesuai Kebutuhan</span></h2>
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
                  <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">{v.desc}</p>
                  <a href="/hubungi-kami" className="block text-center py-3 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs hover:bg-[#f2ca50]/10 transition-colors">Konsultasi</a>
                </div>
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
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Fitur <span className="text-[#f2ca50]">Teknis</span></h2>
              <div className="space-y-6">
                {[{ icon: VolumeX, t: 'Sound Proofing', d: 'Reduksi suara 45-50 dB — privasi penuh antar ruang' }, { icon: Settings2, t: 'Precision Track', d: 'Rel aluminium ekstrusi — geseran halus dan presisi' }, { icon: Shield, t: 'Mechanical Locking', d: 'Sistem pengaman multi-point — terkunci aman saat tertutup' }].map((f, i) => (
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
              {['/images/partisi-ruangan/movable%20door%20kalimaya.png', '/images/partisi-ruangan/movable%20door%20emerald.jpg', '/images/partisi-ruangan/movable%20door%20rubi.jpg', '/images/partisi-ruangan/movable%20door%204.jpg'].map((img, i) => (
                <div key={i} className={`aspect-square transition-all duration-700 ${i % 2 === 0 ? 'translate-y-12' : '-mt-12'}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
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
              '/images/partisi-ruangan/movable-door-5.jpg',
              '/images/partisi-ruangan/movable-door-6.jpg',
              '/images/partisi-ruangan/movable-door-7.jpg',
              '/images/partisi-ruangan/movable-door-8.jpg',
              '/images/partisi-ruangan/movable-door-9.jpg',
              '/images/partisi-ruangan/movable-door-10.jpg',
              '/images/partisi-ruangan/movable-door-11.jpg',
              '/images/partisi-ruangan/movable-door-12.jpg',
              '/images/partisi-ruangan/movable-door-13.jpg',
              '/images/partisi-ruangan/movable-door-14.jpg',
              '/images/partisi-ruangan/movable-door-15.jpg',
              '/images/partisi-ruangan/movable-door-16.jpg',
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <img src={img} alt={`Movable Door Project ${i + 5}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
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
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Butuh Fleksibilitas Ruang?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Solusi partisi geser dengan peredam suara untuk ruang yang adaptif dan privat. Konsultasikan kebutuhan Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
