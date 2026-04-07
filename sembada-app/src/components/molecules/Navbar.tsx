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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-8">
          <span className="heading-gold" style={{ fontSize: '1.5rem' }}>
            SEMBADA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-list hidden md:flex">
          <li>
            <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang-kami" className={`nav-item ${isActive('/tentang-kami') ? 'active' : ''}`}>
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/produk" className={`nav-item ${isActive('/produk') ? 'active' : ''}`}>
              Produk
            </Link>
          </li>
          <li>
            <Link to="/portofolio" className={`nav-item ${isActive('/portofolio') ? 'active' : ''}`}>
              Portofolio
            </Link>
          </li>
          <li>
            <Link to="/hubungi-kami" className={`nav-item ${isActive('/hubungi-kami') ? 'active' : ''}`}>
              Hubungi Kami
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className={`menu-toggle md:hidden ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="menu-toggle__line"></span>
          <span className="menu-toggle__line"></span>
          <span className="menu-toggle__line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="glass" style={{ position: 'absolute', top: '100%', left: 0, right: 0, padding: 'var(--space-24)' }}>
          <ul className="flex flex-col gap-24">
            <li>
              <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami" className="nav-item" onClick={() => setMenuOpen(false)}>
                Tentang
              </Link>
            </li>
            <li>
              <Link to="/produk" className="nav-item" onClick={() => setMenuOpen(false)}>
                Produk
              </Link>
            </li>
            <li>
              <Link to="/portofolio" className="nav-item" onClick={() => setMenuOpen(false)}>
                Portofolio
              </Link>
            </li>
            <li>
              <Link to="/hubungi-kami" className="nav-item" onClick={() => setMenuOpen(false)}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
