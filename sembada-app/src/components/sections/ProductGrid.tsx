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
    offset: '',
  },
  {
    name: 'Office Cubicle',
    Icon: productIcons.officeCubicle,
    image: '/images/office-cubicle/office%20cubicle%201.jpg',
    offset: 'translate-y-12',
  },
  {
    name: 'Ornamen CNC',
    Icon: productIcons.cnc,
    image: '/images/cnc-ornament/cnc%20ornament%20fasad%20politeknik.webp',
    offset: '',
  },
  {
    name: 'Toilet Portable',
    Icon: productIcons.toiletPortable,
    image: '/images/toilet-portable/toilet%20portable.jpg',
    offset: '',
  },
  {
    name: 'Kabinet Lab',
    Icon: productIcons.lab,
    image: '/images/laboratorium-cabinet/laboratorium%20cabinet%201.png',
    offset: 'translate-y-12',
  },
  {
    name: 'Cellustone',
    Icon: productIcons.cellustone,
    image: '/images/cellustone/cellustone%201.jpg',
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
              {/* Hexagon Container with 5px Border */}
              <div 
                className="relative w-full aspect-square mb-8 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] hexagon-border-8"
              >
                <div
                  className="w-full h-full"
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
                    className="w-full h-full object-cover opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <product.Icon className="w-16 h-16 text-[#f2ca50] opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100" />
                  </div>
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
