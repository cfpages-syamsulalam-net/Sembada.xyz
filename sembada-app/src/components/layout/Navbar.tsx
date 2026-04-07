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
    { label: 'Tentang', path: '/tentang-kami' },
    { label: 'Produk', path: '/produk' },
    { label: 'Portofolio', path: '/portofolio' },
    { label: 'Hubungi Kami', path: '/hubungi-kami' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-obsidian/85' 
        : 'py-6 bg-obsidian/70'
    } backdrop-blur-xl border-b border-gold/20`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-gold-gradient font-black text-2xl tracking-wider">
              SEMBADA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-black uppercase tracking-[0.25em] text-text-primary transition-colors duration-200 relative group ${
                    isActive(item.path) ? 'text-gold' : 'hover:text-gold'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 p-6 glass">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-sm font-black uppercase tracking-[0.25em] transition-colors ${
                      isActive(item.path) ? 'text-gold' : 'text-text-primary hover:text-gold'
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
