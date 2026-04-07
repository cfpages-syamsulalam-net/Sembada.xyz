import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { AboutPage } from '@/pages/AboutPage'
import { ProductKnowledgePage } from '@/pages/ProductKnowledgePage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { ContactPage } from '@/pages/ContactPage'

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductGrid />
      <ValueProposition />
    </>
  )
}

function AboutPage() {
  return (
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
  )
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0C10] text-[#e3e2e8]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/produk" element={<ProductKnowledgePage />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/hubungi-kami" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
