import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/molecules/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/produk" element={<div className="section bg-surface"><div className="container"><h1>Produk</h1><p>Coming Soon</p></div></div>} />
          <Route path="/portofolio" element={<div className="section bg-surface"><div className="container"><h1>Portofolio</h1><p>Coming Soon</p></div></div>} />
          <Route path="/hubungi-kami" element={<div className="section bg-surface"><div className="container"><h1>Hubungi Kami</h1><p>Coming Soon</p></div></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
