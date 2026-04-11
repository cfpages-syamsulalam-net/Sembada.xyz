export function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
      {/* Blurred Glow Effect */}
      <div
        className="absolute -top-10 -left-10 w-32 h-32 md:w-48 md:h-48 pointer-events-none"
        style={{
          background: 'rgba(212, 175, 55, 0.1)',
          filter: 'blur(120px)',
        }}
      />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-start">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full">
            <div
              className="relative hexagon overflow-hidden border-2 border-[#f2ca50]/30 transition-all duration-1000 grayscale brightness-75 hover:grayscale-0 hover:brightness-100 mx-auto max-w-md"
              style={{
                background: 'rgba(11, 12, 16, 0.7)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop"
                alt="Tentang Sembada Batu Beling"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 w-full">
            {/* Eyebrow */}
            <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
              Warisan Keunggulan
            </span>

            {/* H2 */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 uppercase tracking-tight text-gold-gradient leading-tight">
              Identitas Kami
            </h2>

            {/* Paragraphs */}
            <p className="text-[#e3e2e8]/80 text-base md:text-lg leading-relaxed font-light mb-4 md:mb-6">
              <span className="text-[#f2ca50] font-bold">Sembada BatuBeling</span> adalah perusahaan aplikator, kontraktor, dan pabrikasi papan phenolic profesional yang telah berpengalaman menangani berbagai proyek skala nasional di seluruh Indonesia.
            </p>

            <p className="text-[#e3e2e8]/80 text-base md:text-lg leading-relaxed font-light mb-4 md:mb-6">
              Sekolah, kantor, bandara, hotel, rumah sakit - kami telah menghadirkan solusi arsitektur premium dengan pelayanan yang ramah, efisien, dan berkualitas tinggi.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 md:gap-16 mt-8 md:mt-14">
              {/* Stat 1 */}
              <div>
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-gold-gradient">
                  15+
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#94A3B8] font-black mt-2">
                  Tahun Pengalaman
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-gold-gradient">
                  500+
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#94A3B8] font-black mt-2">
                  Proyek Selesai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
