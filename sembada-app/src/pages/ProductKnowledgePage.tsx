import { Link } from 'react-router-dom'

const products = [
  {
    name: 'Portable Toilet',
    icon: 'wash',
    description: 'Unit sanitasi movable yang fleksibel untuk berbagai kebutuhan',
    tags: ['Low Price', 'Standard/Deluxe', 'Emergency'],
    offset: '',
    href: '/produk/portable-toilet',
  },
  {
    name: 'Cubicle Toilet',
    icon: 'door_front',
    description: 'Partisi toilet modern berbahan tipis, ringan, namun sangat kuat',
    tags: ['Premium', 'Standard', 'PVC Board', 'Full Height'],
    offset: 'lg:translate-y-8',
    href: '/produk/cubicle-toilet',
  },
  {
    name: 'Office Cubicle',
    icon: 'work',
    description: 'Sekat antar ruang kerja berbahan Phenolic Resin Premium',
    tags: ['Material: Phenolic Resin'],
    offset: '',
    href: '/produk/office-cubicle',
  },
  {
    name: 'Movable Door',
    icon: 'unfold_more',
    description: 'Partisi ruangan yang dapat digeser untuk membagi ruang utama',
    tags: ['Fitur: Sound Insulation'],
    offset: 'lg:translate-y-8',
    href: '/produk/movable-door',
  },
  {
    name: 'CNC Ornament',
    icon: 'architecture',
    description: 'Pekerjaan ornamen berbasis komputerisasi yang menghasilkan presisi',
    tags: ['Teknologi: Computerized Precision'],
    offset: '',
    href: '/produk/cnc-ornament',
  },
  {
    name: 'Cellustone',
    icon: 'grid_view',
    description: 'Material komposit ramah lingkungan untuk area Indoor maupun Outdoor',
    tags: ['Eco-Friendly Wall Panel'],
    offset: 'lg:translate-y-8',
    href: '/produk/cellustone-ornament',
  },
  {
    name: 'Laboratorium Cabinet',
    icon: 'biotech',
    description: 'Furnitur berbahan Phenolic Resin yang tahan terhadap air dan bahan kimia',
    tags: ['Material: Chemical Resistant Phenolic'],
    offset: 'lg:col-start-2',
    href: '/produk/laboratorium-cabinet',
  },
]

export function ProductKnowledgePage() {
  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
        <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
          Solusi Arsitektur Premium
        </span>
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight">
          Pengetahuan Produk
        </h1>
        <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
          Solusi Arsitektur & Interior Berstandar Internasional
        </p>
        <div className="w-20 md:w-24 h-[2px] bg-[#f2ca50]/40 mx-auto mt-6 md:mt-8" />
      </section>

      {/* Product Hex Grid */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 gap-y-12 md:gap-y-16">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.href}
                className={`group relative ${product.offset}`}
              >
                {/* Product Card */}
                <div
                  className="relative p-6 md:p-8 transition-all duration-300 hover:border-[#f2ca50]/60 hover:shadow-[0_0_20px_rgba(242,202,80,0.1)]"
                  style={{
                    background: 'rgba(17, 18, 22, 0.7)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                  }}
                >
                  {/* Hex Icon */}
                  <div className="relative -mt-12 md:-mt-16 mb-4 md:mb-6 flex justify-center">
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-all duration-300 group-hover:bg-[#f2ca50]"
                      style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        background: 'rgba(17, 18, 22, 1)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                      }}
                    >
                      <span className="material-symbols-outlined text-3xl md:text-4xl text-[#f2ca50] transition-colors duration-300 group-hover:text-[#0B0C10]">
                        {product.icon}
                      </span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#f2ca50] mb-2 md:mb-3 text-center">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#e3e2e8]/70 leading-relaxed text-center mb-4 md:mb-6">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {product.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-black px-3 py-1 border border-[#f2ca50]/30 text-[#94A3B8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quality Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] mt-16 md:mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6 leading-tight">
                Kualitas Material Unggulan
              </h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-6 md:mb-8">
                Kami hanya menggunakan material terbaik yang telah teruji kualitasnya untuk memastikan produk yang tahan lama dan berkualitas tinggi.
              </p>

              {/* Feature Rows */}
              <div className="space-y-4 md:space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                    }}
                  >
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-[#f2ca50]">
                      verified
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#e3e2e8] mb-2">
                      Material Terverifikasi
                    </h3>
                    <p className="text-sm md:text-base text-[#e3e2e8]/70 leading-relaxed">
                      Semua material telah melalui uji kualitas ketat dan memenuhi standar internasional
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                    }}
                  >
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-[#f2ca50]">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#e3e2e8] mb-2">
                      Presisi Tinggi
                    </h3>
                    <p className="text-sm md:text-base text-[#e3e2e8]/70 leading-relaxed">
                      Teknologi komputerisasi menghasilkan produk dengan presisi sempurna
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Background Hex Offset */}
                <div
                  className="absolute inset-0 translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    background: 'rgba(212, 175, 55, 0.1)',
                  }}
                />
                {/* Main Image */}
                <div
                  className="relative aspect-square w-full max-w-md grayscale hover:grayscale-0 transition-all duration-700"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop"
                    alt="Kualitas Material"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] mb-16 md:mb-24">
        <div className="container mx-auto">
          <div
            className="p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
            style={{
              background: 'rgba(11, 12, 16, 0.7)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
            }}
          >
            {/* Blurred Glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                filter: 'blur(120px)',
              }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6 text-gold-gradient leading-tight">
                Butuh Solusi Custom?
              </h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-6 md:mb-8 max-w-2xl mx-auto">
                Kami dapat menyesuaikan produk dengan kebutuhan spesifik proyek Anda. Konsultasikan dengan tim ahli kami untuk solusi terbaik.
              </p>
              <Link
                to="/hubungi-kami"
                className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white"
                style={{
                  boxShadow: '0 0 20px rgba(242, 202, 80, 0.3)',
                }}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
