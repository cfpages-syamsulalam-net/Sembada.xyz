import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-24">
          {/* Column 1 - Brand */}
          <div>
            <h4 className="text-gold-gradient font-black text-xl uppercase tracking-tight mb-4">
              Sembada Batu Beling
            </h4>
            <p className="text-sm text-[#e3e2e8]/60 mb-4 italic">
              Integritas untuk Sukses dan Barokah
            </p>
            <p className="text-xs text-[#64748B]">
              PT. Batu Beling Subsidiary
            </p>
          </div>

          {/* Column 2 - Hubungi Kami */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li>Surabaya, Indonesia</li>
              <li>+62-811-330-061</li>
            </ul>
          </div>

          {/* Column 3 - Tautan */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
              Tautan
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#64748B] hover:text-[#f2ca50] transition-colors">
                  Google Maps
                </a>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-sm text-[#64748B] hover:text-[#f2ca50] transition-colors">
                  Dokumentasi Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Buletin */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-4">
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
        <div className="text-center border-t border-white/5 pt-8">
          <p className="text-[#e3e2e8]/40 text-[10px] uppercase tracking-[0.5em] font-black">
            &copy; {new Date().getFullYear()} Sembada Batu Beling. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
