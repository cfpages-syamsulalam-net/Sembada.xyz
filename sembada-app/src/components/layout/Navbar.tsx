import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Tentang Kami', path: '/tentang-kami' },
    { label: 'Produk', path: '/produk' },
    { label: 'Portofolio', path: '/portofolio' },
    { label: 'Kontak', path: '/hubungi-kami' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4' : 'py-5'
    }`} style={{
      background: 'rgba(11, 12, 16, 0.7)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.4)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
    }}>
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 max-w-[200px]">
            <span className="text-gold-gradient font-black text-sm md:text-xl tracking-tight uppercase leading-tight">
              Sembada Batu Beling
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
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
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
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
          <div className="md:hidden mt-4 p-6" style={{
            background: 'rgba(11, 12, 16, 0.7)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
          }}>
            <ul className="flex flex-col gap-6">
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
