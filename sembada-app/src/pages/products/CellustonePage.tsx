export function CellustonePage() {
  const features = [
    { icon: 'eco', title: 'Eco-Engineered', desc: 'Material komposit dari bahan alam dengan cellulosa fibre' },
    { icon: 'shield', title: 'Durabilitas Tinggi', desc: 'Minim muai-susut, tahan Indoor maupun Outdoor' },
  ]

  const applications = [
    { name: 'Cellustone Fasad', desc: 'Tampak luar bangunan', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop' },
    { name: 'Cellustone Wall Panel', desc: 'Interior dinding', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop', offset: 'md:mt-24' },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero */}
      <section className="h-[600px] md:h-[819px] flex items-center justify-center relative overflow-hidden bg-[#0B0C10]">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="star" style={{ position: 'absolute', top: `${15 + i * 15}%`, left: `${10 + i * 15}%`, width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`, backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(242,202,80,0.8)', borderRadius: '50%', animation: `twinkle ${3 + i}s ease-in-out infinite` }} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C10]/60 to-[#0B0C10]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">Arsitektur Masa Depan</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#BF953F] via-[#f2ca50] to-[#AA771C] uppercase mb-4 md:mb-6">Cellustone</h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">Material komposit dari bahan alam, diperkuat adhesive berkualitas, featured cement, dan cellulosa fibre.</p>
          <div className="w-px h-24 mx-auto bg-gradient-to-b from-[#f2ca50] to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Text */}
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4 md:mb-6">Keunggulan <span className="text-[#f2ca50]">Struktural</span></h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-6 md:mb-8">Ramah lingkungan dengan performa tinggi untuk aplikasi interior dan eksterior.</p>
              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                      <span className="material-symbols-outlined text-3xl text-[#f2ca50]" style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#e3e2e8] mb-1">{f.title}</h3>
                      <p className="text-sm text-[#e3e2e8]/60">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop',
                'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=300&h=300&fit=crop',
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=300&fit=crop',
              ].map((img, i) => (
                <div key={i} className={`aspect-square grayscale hover:grayscale-0 transition-all duration-700 ${['translate-y-12', '-translate-y-6', 'translate-y-6', ''][i]}`} style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[#f2ca50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#111216]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-[0.3em] text-[#94A3B8] mb-2">Aplikasi Produk</h3>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient">Variasi Sempurna</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {applications.map((app, i) => (
              <div key={i} className={`group relative aspect-[4/5] overflow-hidden ${app.offset || ''}`}>
                <img src={app.img} alt={app.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#e3e2e8] mb-2">{app.name}</h3>
                  <p className="text-sm md:text-base text-[#94A3B8] mb-4">{app.desc}</p>
                  <a href="/hubungi-kami" className="inline-block px-6 py-3 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs hover:bg-[#f2ca50]/10 transition-colors">Lihat Spesifikasi</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-6">Tertarik dengan Cellustone?</h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">Solusi wall panel eco-friendly untuk interior dan eksterior bangunan Anda.</p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="/hubungi-kami" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white">Minta Penawaran</a>
            <a href="https://wa.me/6285257460869" className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10">WhatsApp Kami</a>
          </div>
        </div>
      </section>
    </div>
  )
}
