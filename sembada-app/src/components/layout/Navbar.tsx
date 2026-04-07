import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { productData } from '@/data/products'
import { ProductIcons } from '@/data/productIcons'

const productItems = productData.map(p => ({
  label: p.label,
  path: p.path,
  description: p.description,
  icon: p.icon,
}))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [produkOpen, setProdukOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close megamenu when route changes
  useEffect(() => {
    setProdukOpen(false)
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang Kami', path: '/tentang-kami' },
    { label: 'Portofolio', path: '/portofolio' },
    { label: 'Kontak', path: '/hubungi-kami' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        background: 'rgba(11, 12, 16, 0.7)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.4)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 max-w-[250px]">
            <span className="text-gold-gradient font-black text-sm md:text-base lg:text-lg xl:text-xl tracking-tight uppercase leading-tight">
              Sembada Batu Beling
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`uppercase tracking-[0.2em] xl:tracking-[0.25em] text-[9px] md:text-[10px] font-extrabold transition-colors duration-200 whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]/50 pb-1'
                      : 'text-[#e3e2e8]/60 hover:text-[#f2ca50]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Produk Megamenu */}
            <li
              className="relative group"
              onMouseEnter={() => setProdukOpen(true)}
              onMouseLeave={() => setProdukOpen(false)}
            >
              {/* Trigger area with invisible bridge */}
              <div className="relative flex items-center h-full">
                <button
                  className={`uppercase tracking-[0.2em] xl:tracking-[0.25em] text-[9px] md:text-[10px] font-extrabold transition-colors duration-200 whitespace-nowrap ${
                    location.pathname.startsWith('/produk')
                      ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]/50 pb-1'
                      : 'text-[#e3e2e8]/60 hover:text-[#f2ca50]'
                  }`}
                >
                  Produk
                </button>
                {/* Invisible bridge to prevent hover gap */}
                <div className="absolute top-full left-0 right-0 h-3" />
              </div>

              {/* Megamenu Dropdown */}
              {produkOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 p-6 md:p-8 min-w-[600px]"
                  style={{
                    background: 'rgba(11, 12, 16, 0.95)',
                    backdropFilter: 'blur(32px)',
                    WebkitBackdropFilter: 'blur(32px)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {productItems.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="group/item flex items-start gap-3 p-3 md:p-4 transition-all duration-200 hover:bg-[#f2ca50]/10"
                      >
                        {/* Inline SVG Icon */}
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#f2ca50]/30 text-[#f2ca50] group-hover/item:border-[#f2ca50] transition-colors">
                          {ProductIcons[product.icon as keyof typeof ProductIcons]}
                        </div>
                        <div>
                          <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#f2ca50] mb-1 group-hover/item:text-white transition-colors">
                            {product.label}
                          </h4>
                          <p className="text-[9px] md:text-[10px] text-[#94A3B8] leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* View All Link */}
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#f2ca50]/20 text-center">
                    <Link
                      to="/produk"
                      className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#f2ca50] hover:text-white transition-colors"
                    >
                      Lihat Semua Produk →
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* CTA Button */}
          <Link
            to="/hubungi-kami"
            className="hidden lg:block border border-[#f2ca50]/50 text-[#f2ca50] px-4 xl:px-6 py-1.5 xl:py-2 uppercase text-[9px] md:text-[10px] font-black tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-300 hover:bg-[#f2ca50] hover:text-[#0B0C10] whitespace-nowrap"
            style={{
              background: 'rgba(11, 12, 16, 0.7)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            Konsultasi Sekarang
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#f2ca50] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-[#f2ca50] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`block w-6 h-0.5 bg-[#f2ca50] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden mt-4 p-6"
            style={{
              background: 'rgba(11, 12, 16, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
            }}
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-black uppercase tracking-[0.25em] transition-colors ${
                      isActive(item.path) ? 'text-[#f2ca50]' : 'text-[#e3e2e8]/60 hover:text-[#f2ca50]'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Mobile Produk Submenu */}
              <li>
                <div className="text-sm font-black uppercase tracking-[0.25em] text-[#f2ca50] mb-2">
                  Produk
                </div>
                <div className="pl-4 space-y-3">
                  {productItems.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="flex items-start gap-3 py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#f2ca50]/30 text-[#f2ca50] mt-0.5">
                        {ProductIcons[product.icon as keyof typeof ProductIcons]}
                      </div>
                      <div>
                        <span className="block text-xs text-[#e3e2e8] font-bold">
                          {product.label}
                        </span>
                        <span className="block text-[10px] text-[#94A3B8]">
                          {product.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
