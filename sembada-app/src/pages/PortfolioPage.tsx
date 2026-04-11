import { useState } from 'react'
import { portfolioData } from '@/data/portfolios'
import { StarryBackground } from '@/components/ui/StarryBackground'

const categories = [
  { id: 'all', label: 'Semua Proyek' },
  { id: 'cnc-ornament', label: 'CNC Ornament' },
  { id: 'portable-toilet', label: 'Portable Toilet' },
  { id: 'cubicle-toilet', label: 'Cubicle Toilet' },
  { id: 'laboratorium-cabinet', label: 'Laboratorium Cabinet' },
  { id: 'movable-door', label: 'Movable Door' },
  { id: 'office-cubicle', label: 'Office Cubicle' },
  { id: 'cellustone', label: 'Cellustone' },
]

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Flatten all portfolio items or filter by category
  const filteredItems = activeFilter === 'all'
    ? Object.entries(portfolioData).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      )
    : portfolioData[activeFilter as keyof typeof portfolioData]?.map(item => ({
        ...item,
        category: activeFilter,
      })) || []

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

      {/* Filter Tabs with Scroll Arrows */}
      <section className="py-6 md:py-8 bg-[#0B0C10] border-b border-[#f2ca50]/10 sticky top-16 md:top-20 z-40" style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
        <div className="container mx-auto px-6 md:px-10">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('filter-scroll');
                if (container) container.scrollBy({ left: -120, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-[#0B0C10]/90 border border-[#f2ca50]/30 text-[#f2ca50] hover:bg-[#f2ca50]/10 transition-colors"
              style={{ backdropFilter: 'blur(12px)' }}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const container = document.getElementById('filter-scroll');
                if (container) container.scrollBy({ left: 120, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-[#0B0C10]/90 border border-[#f2ca50]/30 text-[#f2ca50] hover:bg-[#f2ca50]/10 transition-colors"
              style={{ backdropFilter: 'blur(12px)' }}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Scrollable Tabs */}
            <div
              id="filter-scroll"
              className="flex overflow-x-auto gap-3 md:gap-4 px-10 md:px-12 pb-2 md:pb-0"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(212, 175, 55, 0.6) rgba(11, 12, 16, 0.8)' }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                    activeFilter === cat.id
                      ? 'bg-[#f2ca50] text-[#0B0C10] border-[#f2ca50]'
                      : 'bg-transparent text-[#94A3B8] border-[#f2ca50]/30 hover:border-[#f2ca50]/60 hover:text-[#f2ca50]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative px-6 md:px-10 pb-16 md:pb-32 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.category}-${index}`}
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
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1 bg-[#f2ca50] text-[#0B0C10]">
                      {categories.find(c => c.id === item.category)?.label || item.category}
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

          {filteredItems.length === 0 && (
            <div className="text-center py-24">
              <p className="text-lg text-[#94A3B8]">Belum ada proyek untuk kategori ini.</p>
            </div>
          )}
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
            <a
              href="/hubungi-kami"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(242,202,80,0.5)]"
            >
              Mulai Proyek
            </a>
            <a
              href="/produk"
              className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
            >
              Lihat Katalog
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
