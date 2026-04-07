import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/ui/Heading'

function HomePage() {
  return (
    <>
      <Hero />
      
      {/* About Preview Section */}
      <Section padding="lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={2} variant="gold" className="mb-6">
              Sekilas Tentang Kami
            </Heading>
            <p className="text-lg text-text-primary leading-relaxed mb-6">
              Sembada Batu Beling merupakan divisi/anak usaha pemasaran resmi dari PT. Batu Beling, 
              perusahaan aplikator, kontraktor, dan pabrikasi papan phenolic profesional yang telah 
              berpengalaman menangani berbagai proyek skala nasional di seluruh Indonesia.
            </p>
            <p className="text-text-secondary">
              Kami menyajikan solusi produk arsitektur dan sanitas dengan pelayanan yang ramah, 
              efisien, dan berkualitas premium.
            </p>
          </div>
        </div>
      </Section>

      {/* Products Preview Section */}
      <Section variant="alt" padding="lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level={2} variant="gold" className="mb-4">
              Produk Utama Kami
            </Heading>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Berbagai produk arsitektur dan interior berkualitas premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder product cards */}
            <div className="bg-obsidian-surface border border-gold/20 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 hexagon bg-gold/10 flex items-center justify-center">
                <span className="text-3xl">🚻</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Portable Toilet</h3>
              <p className="text-sm text-text-secondary">Unit sanitasi movable yang fleksibel</p>
            </div>

            <div className="bg-obsidian-surface border border-gold/20 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 hexagon bg-gold/10 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Office Cubicle</h3>
              <p className="text-sm text-text-secondary">Sekat ruang kerja premium</p>
            </div>

            <div className="bg-obsidian-surface border border-gold/20 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 hexagon bg-gold/10 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">CNC Ornament</h3>
              <p className="text-sm text-text-secondary">Ornamen presisi komputerisasi</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <div className="pt-24">
        <Section padding="lg">
          <div className="container mx-auto px-6 lg:px-8">
            <Heading level={1} variant="gold" className="mb-8">
              Tentang Kami
            </Heading>
            <div className="max-w-3xl space-y-6">
              <p className="text-lg text-text-primary leading-relaxed">
                Sembada Batu Beling merupakan divisi/anak usaha pemasaran resmi dari PT. Batu Beling.
              </p>
              <p className="text-text-secondary leading-relaxed">
                PT. Batu Beling sendiri dikenal sebagai perusahaan aplikator, kontraktor, dan pabrikasi 
                papan phenolic profesional yang telah berpengalaman menangani berbagai proyek skala nasional 
                di seluruh Indonesia (sekolah, kantor, bandara, hotel, rumah sakit).
              </p>
              <p className="text-text-secondary leading-relaxed">
                Sembada hadir secara khusus untuk merangkul pasar secara lebih luas, menyajikan solusi produk 
                arsitektur dan sanitas (seperti toilet portabel, partisi ruangan, hingga ornamen CNC) dengan 
                pelayanan yang ramah, efisien, dan berkualitas premium.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-obsidian text-text-primary">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/produk" element={
            <div className="pt-24">
              <Section padding="lg">
                <div className="container mx-auto px-6 lg:px-8">
                  <Heading level={1} variant="gold">Produk</Heading>
                  <p className="text-text-secondary mt-4">Coming Soon</p>
                </div>
              </Section>
            </div>
          } />
          <Route path="/portofolio" element={
            <div className="pt-24">
              <Section padding="lg">
                <div className="container mx-auto px-6 lg:px-8">
                  <Heading level={1} variant="gold">Portofolio</Heading>
                  <p className="text-text-secondary mt-4">Coming Soon</p>
                </div>
              </Section>
            </div>
          } />
          <Route path="/hubungi-kami" element={
            <div className="pt-24">
              <Section padding="lg">
                <div className="container mx-auto px-6 lg:px-8">
                  <Heading level={1} variant="gold">Hubungi Kami</Heading>
                  <p className="text-text-secondary mt-4">Coming Soon</p>
                </div>
              </Section>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
