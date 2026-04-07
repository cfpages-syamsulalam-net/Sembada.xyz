import { SEO } from '@/components/ui/SEO'

export function AboutPage() {
  return (
    <>
      <SEO 
        title="Tentang Kami - Sembada Batu Beling"
        description="Mengenal lebih dekat Sembada Batu Beling, anak perusahaan PT. Batu Beling yang berpengalaman dalam proyek arsitektur skala nasional."
      />
      
      <section className="section bg-surface">
        <div className="container">
          <h1 className="mb-32">Tentang Kami</h1>
          <p className="text-lg mb-24">
            Sembada Batu Beling merupakan divisi/anak usaha pemasaran resmi dari PT. Batu Beling.
          </p>
          <p className="mb-24">
            PT. Batu Beling sendiri dikenal sebagai perusahaan aplikator, kontraktor, dan pabrikasi papan phenolic profesional 
            yang telah berpengalaman menangani berbagai proyek skala nasional di seluruh Indonesia (sekolah, kantor, bandara, 
            hotel, rumah sakit).
          </p>
          <p className="mb-24">
            Sembada hadir secara khusus untuk merangkul pasar secara lebih luas, menyajikan solusi produk arsitektur dan 
            sanitas (seperti toilet portabel, partisi ruangan, hingga ornamen CNC) dengan pelayanan yang ramah, efisien, 
            dan berkualitas premium.
          </p>
        </div>
      </section>
    </>
  )
}
