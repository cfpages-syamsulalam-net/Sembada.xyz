import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-surface section-sm" style={{ marginTop: 'auto' }}>
      <div className="container">
        <div className="grid md:grid-cols-4 gap-48 mb-48">
          {/* Company Info */}
          <div>
            <h4 className="heading-gold mb-16" style={{ fontSize: 'var(--text-lg)' }}>
              Sembada Batu Beling
            </h4>
            <p className="text-sm text-muted mb-16">
              Integritas untuk Sukses dan Barokah
            </p>
            <p className="text-sm text-muted">
              Sembada BatuBeling Subsidiary
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="label mb-16">Produk</h4>
            <ul className="flex flex-col gap-8">
              <li>
                <Link to="/produk/portable-toilet" className="text-sm text-muted hover:text-primary transition-colors">
                  Portable Toilet
                </Link>
              </li>
              <li>
                <Link to="/produk/cubicle-toilet" className="text-sm text-muted hover:text-primary transition-colors">
                  Cubicle Toilet
                </Link>
              </li>
              <li>
                <Link to="/produk/office-cubicle" className="text-sm text-muted hover:text-primary transition-colors">
                  Office Cubicle
                </Link>
              </li>
              <li>
                <Link to="/produk/cnc-ornament" className="text-sm text-muted hover:text-primary transition-colors">
                  CNC Ornament
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="label mb-16">Perusahaan</h4>
            <ul className="flex flex-col gap-8">
              <li>
                <Link to="/tentang-kami" className="text-sm text-muted hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/portofolio" className="text-sm text-muted hover:text-primary transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link to="/hubungi-kami" className="text-sm text-muted hover:text-primary transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label mb-16">Kontak</h4>
            <ul className="flex flex-col gap-8 text-sm text-muted">
              <li>Jl. Bogorami No. 05, Surabaya</li>
              <li>WhatsApp: 0852 5746 0869</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted" style={{ borderTop: 'var(--border-gold-subtle)', paddingTop: 'var(--space-24)' }}>
          <p>&copy; 2026 Sembada Batu Beling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
