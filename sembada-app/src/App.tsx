import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { AboutPage } from '@/pages/AboutPage'
import { ProductKnowledgePage } from '@/pages/ProductKnowledgePage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { ContactPage } from '@/pages/ContactPage'
import { PortableToiletPage } from '@/pages/products/PortableToiletPage'
import { CubicleToiletPage } from '@/pages/products/CubicleToiletPage'
import { OfficeCubiclePage } from '@/pages/products/OfficeCubiclePage'
import { MovableDoorPage } from '@/pages/products/MovableDoorPage'
import { CNCOrnamentPage } from '@/pages/products/CNCOrnamentPage'
import { CellustonePage } from '@/pages/products/CellustonePage'
import { LaboratoriumCabinetPage } from '@/pages/products/LaboratoriumCabinetPage'

function HomePage() {
  return (
    <>
      {/* WebSite JSON-LD (Home page only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sembada Batu Beling",
            "url": "https://sembada.xyz",
            "description": "Penyedia produk arsitektur dan interior premium dari PT. Batu Beling",
            "inLanguage": "id-ID",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://sembada.xyz/produk?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <Hero />
      <AboutSection />
      <ProductGrid />
      <ValueProposition />
    </>
  )
}

// Organization JSON-LD (site-wide)
function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sembada Batu Beling",
    "url": "https://sembada.xyz",
    "logo": "https://sembada.xyz/og-image.jpg",
    "parentOrganization": {
      "@type": "Organization",
      "name": "PT. Batu Beling"
    },
    "description": "Penyedia produk arsitektur dan interior premium: toilet portable, cubicle, ornamen CNC, dan solusi furnitur dari PT. Batu Beling.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Bogorami No. 05",
      "addressLocality": "Surabaya",
      "addressRegion": "Jawa Timur",
      "postalCode": "60123",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-852-5746-0869",
      "contactType": "sales",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.instagram.com/sembadabatubeling",
      "https://www.facebook.com/sembadabatubeling"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  )
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0C10] text-[#e3e2e8]">
      {/* Organization JSON-LD (site-wide) */}
      <OrganizationSchema />
      
      {/* Gold Gradient Bars at Top & Bottom */}
      <div className="gold-gradient-top" />
      <div className="gold-gradient-bottom" />

      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/produk" element={<ProductKnowledgePage />} />
          <Route path="/produk/portable-toilet" element={<PortableToiletPage />} />
          <Route path="/produk/cubicle-toilet" element={<CubicleToiletPage />} />
          <Route path="/produk/office-cubicle" element={<OfficeCubiclePage />} />
          <Route path="/produk/movable-door" element={<MovableDoorPage />} />
          <Route path="/produk/cnc-ornament" element={<CNCOrnamentPage />} />
          <Route path="/produk/cellustone-ornament" element={<CellustonePage />} />
          <Route path="/produk/laboratorium-cabinet" element={<LaboratoriumCabinetPage />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/hubungi-kami" element={<ContactPage />} />
        </Routes>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}

export default App
