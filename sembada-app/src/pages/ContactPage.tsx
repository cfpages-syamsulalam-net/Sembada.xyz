import { StarryBackground } from '@/components/ui/StarryBackground'
import { SEO } from '@/components/ui/SEO'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { MapPin, Phone, Mail } from 'lucide-react'

export function ContactPage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Hubungi Kami' }
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title="Hubungi Kami - Sembada Batu Beling"
        description="Hubungi Sembada BatuBeling untuk penawaran produk arsitektur premium. Alamat: Jl. Bogorami No. 05, Surabaya. WhatsApp: 0852 5746 0869."
        url="https://sembada.xyz/hubungi-kami"
        type="website"
      />
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sembada Batu Beling",
            "image": "https://sembada.xyz/og-image.jpg",
            "telephone": "+62-852-5746-0869",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Bogorami No. 05",
              "addressLocality": "Surabaya",
              "addressRegion": "Jawa Timur",
              "postalCode": "60123",
              "addressCountry": "ID"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "14:00"
              }
            ],
            "priceRange": "$$"
          })
        }}
      />
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
        <span className="text-[#f2ca50] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
          Arsitektur Masa Depan Dimulai Dengan Satu Percakapan
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight">
          Hubungi Kami
        </h1>
        <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-2xl mx-auto leading-relaxed font-light">
          Siap membantu mewujudkan proyek impian Anda. Hubungi kami sekarang.
        </p>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Grid */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Left (7 cols) - Contact Form */}
            <div className="lg:col-span-7">
              <div
                className="relative p-6 md:p-8 lg:p-12"
                style={{
                  background: 'rgba(17, 18, 22, 0.7)',
                  backdropFilter: 'blur(32px)',
                  WebkitBackdropFilter: 'blur(32px)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                {/* Decorative Corners */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#f2ca50]" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#f2ca50]" />

                {/* Form */}
                <form className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nama Lengkap */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-black mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-[#f2ca50]/20 py-2 text-[#e3e2e8] outline-none focus:border-[#f2ca50] transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-black mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-[#f2ca50]/20 py-2 text-[#e3e2e8] outline-none focus:border-[#f2ca50] transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* No. WhatsApp */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-black mb-2">
                        No. WhatsApp
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-transparent border-b border-[#f2ca50]/20 py-2 text-[#e3e2e8] outline-none focus:border-[#f2ca50] transition-colors"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>

                    {/* Perusahaan */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-black mb-2">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-[#f2ca50]/20 py-2 text-[#e3e2e8] outline-none focus:border-[#f2ca50] transition-colors"
                        placeholder="PT. Example"
                      />
                    </div>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-black mb-2">
                      Pesan *
                    </label>
                    <textarea
                      className="w-full bg-transparent border-b border-[#f2ca50]/20 py-2 text-[#e3e2e8] outline-none focus:border-[#f2ca50] transition-colors resize-none min-h-[120px]"
                      placeholder="Ceritakan kebutuhan proyek Anda..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="px-10 md:px-12 py-4 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white hover:-translate-y-1"
                      style={{
                        boxShadow: '0 4px 20px rgba(242, 202, 80, 0.4)',
                      }}
                    >
                      Kirim Permintaan
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right (5 cols) - Contact Info */}
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              {/* Contact Info Blocks */}
              <div className="space-y-6 md:space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      background: 'rgba(212, 175, 55, 0.2)',
                    }}
                  >
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#f2ca50]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[#e3e2e8] mb-1">
                      Alamat
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      Jl. Bogorami No. 05, Surabaya, Jawa Timur 60123
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      background: 'rgba(212, 175, 55, 0.2)',
                    }}
                  >
                  <Phone className="w-8 h-8 md:w-10 md:h-10 text-[#f2ca50]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[#e3e2e8] mb-1">
                      Telepon / WhatsApp
                    </h3>
                    <a href="tel:+6285257460869" className="text-sm text-[#f2ca50] hover:text-[#f2ca50]/80 transition-colors">
                      0852 5746 0869
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      background: 'rgba(212, 175, 55, 0.2)',
                    }}
                  >
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#f2ca50]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[#e3e2e8] mb-1">
                      Email
                    </h3>
                    <a href="mailto:info@sembadabatubeling.com" className="text-sm text-[#f2ca50] hover:text-[#f2ca50]/80 transition-colors">
                      info@sembadabatubeling.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full h-64 md:h-80 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img
                  src="/images/office-cubicle/office%20cubicle%202.jpg"
                  alt="Map Location"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0B0C10]/50">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs transition-all duration-300 hover:bg-[#f2ca50] hover:text-[#0B0C10]"
                  >
                    Lihat di Google Maps
                  </a>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base font-light italic text-white/40 text-center">
                "Kami siap membantu Anda mewujudkan proyek impian dengan kualitas terbaik."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
