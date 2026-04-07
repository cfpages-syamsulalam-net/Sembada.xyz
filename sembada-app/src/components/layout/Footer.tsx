import { Link } from 'react-router-dom'
import { productData } from '@/data/products'

const mainPages = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Portofolio', path: '/portofolio' },
  { label: 'Hubungi Kami', path: '/hubungi-kami' },
]

const socialLinks = [
  { 
    name: 'Instagram', 
    url: 'https://instagram.com', 
    icon: 'https://www.svgrepo.com/show/452229/instagram-1.svg' 
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/6285257460869', 
    icon: 'https://www.svgrepo.com/show/475665/whatsapp-color.svg' 
  },
  { 
    name: 'Facebook', 
    url: 'https://facebook.com', 
    icon: 'https://www.svgrepo.com/show/475647/facebook-color.svg' 
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12 md:pb-16">
          {/* Column 1 - Brand */}
          <div>
            <h4 className="text-gold-gradient font-black text-lg md:text-xl uppercase tracking-tight mb-4">
              Sembada Batu Beling
            </h4>
            <p className="text-sm text-[#e3e2e8]/60 mb-4 italic">
              Integritas untuk Sukses dan Barokah
            </p>
            <p className="text-xs text-[#64748B] mb-6">
              PT. Batu Beling Subsidiary
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#f2ca50]/30 hover:border-[#f2ca50] transition-colors duration-200"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
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
              {productData.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="group flex items-start gap-2"
                  >
                    <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-[#f2ca50]/20 text-[#f2ca50] group-hover:border-[#f2ca50]/40 transition-colors mt-0.5">
                      <i className={`${product.icon} text-[10px]`} />
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
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Newsletter */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-sm text-[#64748B] mb-6">
              <li>Jl. Bogorami No. 05, Surabaya</li>
              <li>
                <a href="tel:+6285257460869" className="hover:text-[#f2ca50] transition-colors">
                  0852 5746 0869
                </a>
              </li>
              <li>
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
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
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
