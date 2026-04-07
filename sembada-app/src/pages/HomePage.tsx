import { SEO } from '@/components/ui/SEO'

export function HomePage() {
  return (
    <>
      <SEO 
        title="Sembada Batu Beling - Integritas untuk Sukses dan Barokah"
        description="Penyedia produk arsitektur dan interior premium: toilet portable, cubicle, ornamen CNC, dan solusi furnitur berkualitas dari PT. Batu Beling."
      />
      
      <section className="hero bg-starry-enhanced">
        <div className="falling-stars"></div>
        <div className="fading-stars"></div>
        <div className="hero__content">
          <h1 className="hero__title heading-gold">Sembada Batu Beling</h1>
          <p className="hero__subtitle subtitle">
            Integritas untuk Sukses dan Barokah
          </p>
          <div className="hero__cta">
            <button className="btn btn-primary btn-lg">Eksplorasi Produk Kami</button>
            <button className="btn btn-secondary btn-lg">Tentang Kami</button>
          </div>
        </div>
        <div className="hero__scroll">
          <span className="label label-xs text-muted">Scroll</span>
        </div>
      </section>
    </>
  )
}
