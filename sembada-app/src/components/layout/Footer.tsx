import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, DoorOpen, Briefcase, Move, Building2, Layers, FlaskConical, MapPin, Phone, Mail, Gem } from 'lucide-react'
import { productData } from '@/data/products'

const ProductLucideIcons = {
  'fa-toilet': Droplets,
  'fa-door-open': DoorOpen,
  'fa-desktop': Briefcase,
  'fa-door-closed': Move,
  'fa-gear': Building2,
  'fa-layer-group': Layers,
  'fa-flask': FlaskConical,
} as const

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6285257460869',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

const mainPages = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Portofolio', path: '/portofolio' },
  { label: 'Hubungi Kami', path: '/hubungi-kami' },
]

export function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12 md:pb-16">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {/* Metallic Gem Icon */}
              <Gem className="w-5 h-5 md:w-6 md:h-6 shimmer-gold-icon flex-shrink-0" strokeWidth={1.5} />
              <h4 className="font-black text-lg md:text-xl uppercase tracking-tight">
                <span className="shimmer-gold">Sembada Batu</span><span className="shimmer-silver">Beling</span>
              </h4>
            </div>
            <p className="font-cursive text-base text-white italic mb-4 leading-relaxed">
              Integritas untuk Sukses dan Barokah
            </p>
            <p className="text-xs text-[#64748B] mb-6">
              Sembada BatuBeling Subsidiary
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-[#f2ca50] hover:text-[#f2ca50]/80 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Main Pages */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-sm text-[#64748B] hover:text-[#f2ca50] transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
              Produk
            </h4>
            <ul className="space-y-3">
              {productData.map((product) => {
                const LucideIcon = ProductLucideIcons[product.icon as keyof typeof ProductLucideIcons]
                return (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="group flex items-start gap-2"
                  >
                    <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[#f2ca50] group-hover:text-[#f2ca50]/80 transition-colors mt-0.5">
                      {LucideIcon && <LucideIcon className="w-4 h-4" />}
                    </div>
                    <div>
                      <span className="text-sm text-[#64748B] group-hover:text-[#f2ca50] transition-colors">
                        {product.label}
                      </span>
                      <span className="block text-[10px] text-[#94A3B8]/60 group-hover:text-[#94A3B8] transition-colors">
                        {product.description}
                      </span>
                    </div>
                  </Link>
                </li>
                )
              })}
            </ul>
          </div>

          {/* Column 4 - Contact & Newsletter */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm text-[#64748B] mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f2ca50] flex-shrink-0 mt-0.5" />
                <span>Jl. Bogorami No. 05, Surabaya</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#f2ca50] flex-shrink-0 mt-0.5" />
                <a href="tel:+6285257460869" className="hover:text-[#f2ca50] transition-colors">
                  0852 5746 0869
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#f2ca50] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@sembadabatubeling.com" className="hover:text-[#f2ca50] transition-colors">
                  info@sembadabatubeling.com
                </a>
              </li>
            </ul>
            {/* Newsletter */}
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-3">
              Buletin
            </h4>
            <div className="flex items-center gap-2 border-b border-[#f2ca50]/30 pb-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 bg-transparent text-sm text-[#e3e2e8] placeholder-[#64748B] outline-none"
              />
              <button className="text-[#f2ca50] hover:text-[#f2ca50]/80 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/5 pt-6">
          <p className="text-[#e3e2e8]/40 text-[10px] uppercase tracking-[0.5em] font-black">
            &copy; {new Date().getFullYear()} Sembada Batu Beling. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
