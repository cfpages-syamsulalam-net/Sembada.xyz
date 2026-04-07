import { Link } from 'react-router-dom'

const products = [
  {
    name: 'Cubicle Toilet',
    icon: 'door_front',
    image: 'https://images.unsplash.com/photo-1584622650111-993a4239f3b4?w=600&h=600&fit=crop',
    offset: '',
  },
  {
    name: 'Office Cubicle',
    icon: 'work',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop',
    offset: 'translate-y-12',
  },
  {
    name: 'Ornamen CNC',
    icon: 'architecture',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=600&fit=crop',
    offset: '',
  },
  {
    name: 'Toilet Portable',
    icon: 'wash',
    image: 'https://images.unsplash.com/photo-1564540586988-aa4e53ab3394?w=600&h=600&fit=crop',
    offset: '',
  },
  {
    name: 'Kabinet Lab',
    icon: 'biotech',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&h=600&fit=crop',
    offset: 'translate-y-12',
  },
  {
    name: 'Cellustone',
    icon: 'grid_view',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    offset: '',
  },
]

export function ProductGrid() {
  return (
    <section className="py-24 bg-[#111216]/30 border-y border-white/5">
      <div className="container mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#94A3B8] uppercase tracking-[0.6em] text-[11px] font-black mb-4 block">
            Ekosistem Produk
          </span>

          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-gold-gradient mb-4">
            Solusi Eksklusif
          </h2>

          {/* Divider */}
          <div className="h-1 w-24 mx-auto mt-8" style={{
            background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6), transparent)',
          }} />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12">
          {products.map((product, index) => (
            <div key={index} className={`group ${product.offset}`}>
              {/* Hexagon Container */}
              <div 
                className="relative w-full aspect-square mb-8 overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: 'rgba(11, 12, 16, 0.7)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '2px solid rgba(212, 175, 55, 0.6)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 8px rgba(212, 175, 55, 0.3)',
                }}
              >
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80"
                />

                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-[#f2ca50] opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                    {product.icon}
                  </span>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="text-xl text-[#f2ca50] text-center font-black uppercase tracking-[0.4em]">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/produk"
            className="inline-block border border-[#f2ca50]/50 text-[#f2ca50] px-12 py-4 uppercase text-xs font-black tracking-widest transition-all duration-300 hover:bg-[#f2ca50] hover:text-[#0B0C10]"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  )
}
