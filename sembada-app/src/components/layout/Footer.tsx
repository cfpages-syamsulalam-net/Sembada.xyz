import { Link } from 'react-router-dom'

export function Footer() {
  const products = [
    { label: 'Portable Toilet', path: '/produk/portable-toilet' },
    { label: 'Cubicle Toilet', path: '/produk/cubicle-toilet' },
    { label: 'Office Cubicle', path: '/produk/office-cubicle' },
    { label: 'CNC Ornament', path: '/produk/cnc-ornament' },
  ]

  const company = [
    { label: 'Tentang Kami', path: '/tentang-kami' },
    { label: 'Portofolio', path: '/portofolio' },
    { label: 'Hubungi Kami', path: '/hubungi-kami' },
  ]

  return (
    <footer className="bg-obsidian-surface pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-gold font-black text-lg uppercase tracking-wider mb-4">
              Sembada Batu Beling
            </h4>
            <p className="text-sm text-text-secondary mb-4 italic">
              Integritas untuk Sukses dan Barokah
            </p>
            <p className="text-sm text-text-muted">
              PT. Batu Beling Subsidiary
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-text-secondary mb-4">
              Produk
            </h4>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-text-secondary mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-text-secondary mb-4">
              Kontak
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>Jl. Bogorami No. 05, Surabaya</li>
              <li>WhatsApp: 0852 5746 0869</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-text-muted pt-8 border-t border-gold/20">
          <p>&copy; {new Date().getFullYear()} Sembada Batu Beling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
