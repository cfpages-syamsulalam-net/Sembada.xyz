export function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
        <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
          Tentang Kami
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight">
          Identitas Kami
        </h1>
        <p className="text-lg md:text-xl font-light italic text-[#e3e2e8]/80 max-w-2xl mx-auto leading-relaxed">
          "Merancang integritas, membangun kesuksesan."
        </p>
      </section>

      {/* Legacy Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden grayscale mix-blend-luminosity">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
                  alt="PT. Batu Beling Legacy"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(11,12,16,0.8) 100%)',
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6 md:mb-8 leading-tight">
                Warisan & <span className="text-[#f2ca50]">Keunggulan</span>
              </h2>

              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-4 md:mb-6">
                Sembada Batu Beling merupakan divisi pemasaran resmi dari <span className="text-[#f2ca50] font-bold">PT. Batu Beling</span>, perusahaan yang telah berpengalaman lebih dari dua dekade dalam industri konstruksi dan fabrikasi di Indonesia.
              </p>

              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-6 md:mb-8">
                Kami menghadirkan solusi arsitektur premium dengan pelayanan yang ramah, efisien, dan berkualitas tinggi untuk berbagai proyek skala nasional.
              </p>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Stat Card 1 */}
                <div
                  className="p-6 md:p-8 border-l-4 border-[#f2ca50]"
                  style={{
                    background: 'rgba(11, 12, 16, 0.7)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                  }}
                >
                  <div className="text-4xl md:text-5xl font-black text-[#f2ca50] tracking-tighter mb-2">
                    25+
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#94A3B8] font-black">
                    Tahun Pengalaman
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div
                  className="p-6 md:p-8 border-l-4 border-[#f2ca50]"
                  style={{
                    background: 'rgba(11, 12, 16, 0.7)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                  }}
                >
                  <div className="text-4xl md:text-5xl font-black text-[#f2ca50] tracking-tighter mb-2">
                    500+
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#94A3B8] font-black">
                    Proyek Selesai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] mb-16 md:mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Visi Card (spans 2 columns) */}
            <div
              className="md:col-span-2 p-8 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-center"
              style={{
                background: 'rgba(11, 12, 16, 0.7)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 mb-6 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                }}
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl text-[#f2ca50]">
                  visibility
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#f2ca50] mb-4">
                Visi Kami
              </h3>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Menjadi pemimpin pasar nasional dalam solusi arsitektur dan interior premium, menghadirkan nilai estetika dan ketahanan pada setiap properti pelanggan.
              </p>
            </div>

            {/* Misi I Card */}
            <div
              className="p-8 md:p-12 flex flex-col items-center justify-center text-center"
              style={{
                background: 'rgba(11, 12, 16, 0.7)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 mb-6 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                }}
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl text-[#f2ca50]">
                  architecture
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#f2ca50] mb-4">
                Misi I
              </h3>
              <p className="text-sm md:text-base text-[#e3e2e8]/80 leading-relaxed">
                Menghadirkan produk berkualitas premium dengan presisi tinggi
              </p>
            </div>

            {/* Misi II Card */}
            <div
              className="p-8 md:p-12 flex flex-col items-center justify-center text-center"
              style={{
                background: 'rgba(11, 12, 16, 0.7)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 mb-6 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                }}
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl text-[#f2ca50]">
                  groups
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#f2ca50] mb-4">
                Misi II
              </h3>
              <p className="text-sm md:text-base text-[#e3e2e8]/80 leading-relaxed">
                Memberikan pelayanan ramah, efisien, dan profesional
              </p>
            </div>

            {/* Misi III Card (spans 2 columns) */}
            <div
              className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center"
              style={{
                background: 'rgba(11, 12, 16, 0.7)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 mb-6 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                }}
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl text-[#f2ca50]">
                  precision_manufacturing
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#f2ca50] mb-4">
                Misi III
              </h3>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light">
                Berinovasi terus-menerus dalam teknologi dan material untuk menghasilkan solusi arsitektur yang berkelanjutan dan ramah lingkungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Utama Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#111216] border-y border-[#f2ca50]/10 mb-16 md:mb-24">
        <div className="container mx-auto text-center">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
            Pilar Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 md:mb-6">
            Integritas untuk <span className="text-gold-gradient">Sukses dan Barokah</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#f2ca50] mx-auto mb-6 md:mb-8" />
          <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light max-w-3xl mx-auto">
            Kami membangun setiap produk dengan standar tertinggi, berlandaskan prinsip integritas, kualitas, dan keberkahan dalam setiap aspek bisnis kami.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] mb-16 md:mb-24">
        <div className="container mx-auto">
          <div
            className="p-8 md:p-16 lg:p-24 text-center relative overflow-hidden"
            style={{
              background: 'rgba(11, 12, 16, 0.7)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
            }}
          >
            {/* Blurred Glow Effects */}
            <div
              className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                filter: 'blur(120px)',
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                filter: 'blur(140px)',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6 md:mb-8 leading-tight">
                Siap untuk Mewujudkan <span className="text-gold-gradient">Visi Arsitektur</span> Anda?
              </h2>
              <p className="text-base md:text-lg text-[#e3e2e8]/80 leading-relaxed font-light mb-8 md:mb-12 max-w-2xl mx-auto">
                Mari diskusikan kebutuhan proyek Anda dengan tim ahli kami. Konsultasi gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <a
                  href="/hubungi-kami"
                  className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white"
                  style={{
                    boxShadow: '0 0 20px rgba(242, 202, 80, 0.3)',
                  }}
                >
                  Hubungi Kami
                </a>
                <a
                  href="/portofolio"
                  className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
                >
                  Lihat Portofolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
