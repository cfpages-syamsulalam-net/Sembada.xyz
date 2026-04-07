import { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Politeknik Surabaya',
    category: 'Pendidikan',
    location: 'Surabaya, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=600&fit=crop',
    offset: '',
  },
  {
    title: 'Mushola Kereta Makan KAI',
    category: 'Transportasi',
    location: 'Jakarta, Indonesia',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=600&h=600&fit=crop',
    offset: 'md:mt-24',
  },
  {
    title: 'Gedung DPRD Surabaya',
    category: 'Pemerintahan',
    location: 'Surabaya, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=600&fit=crop',
    offset: '',
  },
  {
    title: 'Villa Obsidian',
    category: 'Residensial',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=600&fit=crop',
    offset: 'md:mt-24',
  },
]

export function PortfolioPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 bg-[#0B0C10]">
        <div className="container mx-auto text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
            Dokumentasi Proyek
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight mx-auto max-w-4xl">
            Portofolio & Proyek
          </h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
            Dokumentasi proyek-proyek yang telah kami kerjakan di seluruh Indonesia. Setiap proyek mencerminkan komitmen kami terhadap kualitas dan kepuasan klien.
          </p>
        </div>
      </section>

      {/* Project Gallery Hex Grid */}
      <section className="px-6 md:px-12 pb-16 md:pb-32 bg-[#0B0C10]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${project.offset}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hexagon Image Container */}
                <div
                  className="relative aspect-square overflow-hidden transition-all duration-500 group-hover:-translate-y-4"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  }}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover grayscale transition-all duration-700 ${
                      hoveredIndex === index ? 'grayscale-0 scale-100' : 'scale-110'
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(11, 12, 16, 1) 0%, transparent 60%)',
                      opacity: 0.6,
                    }}
                  />

                  {/* Info Overlay at Bottom */}
                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 md:p-6 transition-all duration-300"
                    style={{
                      background: 'rgba(11, 12, 16, 0.7)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                  >
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-black text-[#f2ca50] mb-1 md:mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-[#e3e2e8] mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#94A3B8]">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#111216] border-t border-[#f2ca50]/10">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">
            Tertarik Memulai Proyek Anda?
          </h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light">
            Mari diskusikan kebutuhan proyek Anda dengan tim ahli kami. Kami siap membantu mewujudkan visi arsitektur Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/hubungi-kami"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(242,202,80,0.5)]"
            >
              Mulai Proyek
            </Link>
            <Link
              to="/produk"
              className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
            >
              Lihat Katalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
