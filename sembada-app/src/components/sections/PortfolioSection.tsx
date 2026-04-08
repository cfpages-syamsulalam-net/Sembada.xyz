import { Link } from 'react-router-dom'

interface PortfolioItem {
  title: string
  location: string
  category: string
  description: string
  image: string
}

interface PortfolioSectionProps {
  items: PortfolioItem[]
  productHref: string
  viewAllLabel?: string
}

export function PortfolioSection({ items, productHref, viewAllLabel = 'Lihat Semua Proyek' }: PortfolioSectionProps) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#111216]">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 block">
            Portofolio Proyek
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">
            Proyek yang Telah Dikerjakan
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hexagon Image Container with Border */}
              <div className="relative w-full aspect-square mb-8 hexagon-border-5">
                <div
                  className="w-full h-full overflow-hidden transition-all duration-500"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    background: 'rgba(11, 12, 16, 0.9)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Category Badge - Positioned on hexagon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1 bg-[#f2ca50] text-[#0B0C10]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Below Hexagon */}
              <div className="text-center px-4">
                <h3 className="text-lg font-bold text-[#e3e2e8] mb-1">{item.title}</h3>
                <p className="text-xs text-[#94A3B8] mb-2">{item.location}</p>
                <p className="text-sm text-[#e3e2e8]/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to={productHref}
            className="inline-block px-8 md:px-12 py-4 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
          >
            {viewAllLabel} →
          </Link>
        </div>
      </div>
    </section>
  )
}
