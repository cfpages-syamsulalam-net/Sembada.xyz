import { Link } from 'react-router-dom'
import { DoorOpen, Briefcase, Building2, ShowerHead, FlaskConical, LayoutGrid } from 'lucide-react'

const productIcons = {
  cubicleToilet: DoorOpen,
  officeCubicle: Briefcase,
  cnc: Building2,
  toiletPortable: ShowerHead,
  lab: FlaskConical,
  cellustone: LayoutGrid,
}

const products = [
  {
    name: 'Cubicle Toilet',
    Icon: productIcons.cubicleToilet,
    image: '/images/cubicle-toilet/cubicle%20toilet%201.jpg',
    href: '/produk/cubicle-toilet',
    offset: '',
  },
  {
    name: 'Office Cubicle',
    Icon: productIcons.officeCubicle,
    image: '/images/office-cubicle/office%20cubicle%201.jpg',
    href: '/produk/office-cubicle',
    offset: 'translate-y-12',
  },
  {
    name: 'Ornamen CNC',
    Icon: productIcons.cnc,
    image: '/images/cnc-ornament/cnc%20ornament%20fasad%20politeknik.webp',
    href: '/produk/cnc-ornament',
    offset: '',
  },
  {
    name: 'Toilet Portable',
    Icon: productIcons.toiletPortable,
    image: '/images/toilet-portable/toilet%20portable.webp',
    href: '/produk/portable-toilet',
    offset: '',
  },
  {
    name: 'Kabinet Lab',
    Icon: productIcons.lab,
    image: '/images/laboratorium-cabinet/laboratorium%20cabinet%201.png',
    href: '/produk/laboratorium-cabinet',
    offset: 'translate-y-12',
  },
  {
    name: 'Cellustone',
    Icon: productIcons.cellustone,
    image: '/images/cellustone/cellustone%201.jpg',
    href: '/produk/cellustone-ornament',
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
            <Link key={index} to={product.href} className={`group ${product.offset}`}>
              {/* Hexagon Container with 5px Border */}
              <div
                className="relative w-full aspect-square mb-8 transition-all duration-500 group-hover:scale-[1.02] hexagon-border-5"
              >
                <div
                  className="w-full h-full overflow-hidden"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    background: 'rgba(11, 12, 16, 0.7)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                  }}
                >
                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <product.Icon className="w-16 h-16 text-[#f2ca50] opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100" />
                  </div>
                </div>
              </div>

              {/* Product Name - Gold Gradient */}
              <h3 className="text-xl text-center font-black uppercase tracking-[0.4em] text-gold-gradient">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/produk"
            className="inline-block border border-[#f2ca50]/50 text-[#f2ca50] px-12 py-4 uppercase text-xs font-black tracking-widest transition-all duration-300 hover:text-[#0B0C10] hover:border-transparent"
            style={{
              backgroundSize: '200% 100%',
              backgroundImage: 'linear-gradient(135deg, transparent 0%, transparent 100%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #BF953F 0%, #f2ca50 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, transparent 0%, transparent 100%)'
            }}
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  )
}
