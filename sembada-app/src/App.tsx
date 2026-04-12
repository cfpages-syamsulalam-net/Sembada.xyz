import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { ValueProposition } from '@/components/sections/ValueProposition'

// Lazy load pages for code splitting
const AboutPage = lazy(() => import('@/pages/AboutPage').then(module => ({ default: module.AboutPage })))
const ProductKnowledgePage = lazy(() => import('@/pages/ProductKnowledgePage').then(module => ({ default: module.ProductKnowledgePage })))
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage').then(module => ({ default: module.PortfolioPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then(module => ({ default: module.ContactPage })))
const PortableToiletPage = lazy(() => import('@/pages/products/PortableToiletPage').then(module => ({ default: module.PortableToiletPage })))
const CubicleToiletPage = lazy(() => import('@/pages/products/CubicleToiletPage').then(module => ({ default: module.CubicleToiletPage })))
const OfficeCubiclePage = lazy(() => import('@/pages/products/OfficeCubiclePage').then(module => ({ default: module.OfficeCubiclePage })))
const MovableDoorPage = lazy(() => import('@/pages/products/MovableDoorPage').then(module => ({ default: module.MovableDoorPage })))
const CNCOrnamentPage = lazy(() => import('@/pages/products/CNCOrnamentPage').then(module => ({ default: module.CNCOrnamentPage })))
const CellustonePage = lazy(() => import('@/pages/products/CellustonePage').then(module => ({ default: module.CellustonePage })))
const LaboratoriumCabinetPage = lazy(() => import('@/pages/products/LaboratoriumCabinetPage').then(module => ({ default: module.LaboratoriumCabinetPage })))

// Loading fallback component
function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#f2ca50]/30 border-t-[#f2ca50] rounded-full animate-spin" />
        <p className="mt-4 text-[#94A3B8] text-sm uppercase tracking-widest">Loading...</p>
      </div>
    </div>
  )
}

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
        <Suspense fallback={<PageLoading />}>
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
        </Suspense>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  )
}

export default App
