import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Download, FileText, Loader2 } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { StarryBackground } from '@/components/ui/StarryBackground'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { useLightbox } from '@/components/ui/lightboxContext'
import { BROCHURE, BROCHURE_GROUPS } from '@/data/brochure'
import { generateBrochurePdf } from '@/lib/brochurePdf'

type DownloadState =
  | { status: 'idle' }
  | { status: 'running'; done: number }
  | { status: 'done' }
  | { status: 'error'; message: string }

function downloadButtonLabel(state: DownloadState, total: number) {
  if (state.status === 'running') return `Menyiapkan PDF ${state.done}/${total}`
  if (state.status === 'done') return 'Unduh Ulang PDF'
  return 'Unduh PDF Brosur'
}

export function BrosurPage() {
  const breadcrumbItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Brosur' },
  ]
  const lightbox = useLightbox()
  const [index, setIndex] = useState(0)
  const [download, setDownload] = useState<DownloadState>({ status: 'idle' })
  const touchRef = useRef<{ x: number; y: number } | null>(null)
  const swipeEndRef = useRef(0)

  const total = BROCHURE.length
  const page = BROCHURE[index]

  const go = useCallback((next: number) => {
    setIndex(Math.min(total - 1, Math.max(0, next)))
  }, [total])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightbox.isOpen) return
      if (event.key === 'ArrowLeft') go(index - 1)
      else if (event.key === 'ArrowRight') go(index + 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [go, index, lightbox.isOpen])

  const handleOpenLightbox = () => {
    if (Date.now() - swipeEndRef.current < 400) return
    lightbox.open(BROCHURE, index)
  }

  const handleDownload = async () => {
    if (download.status === 'running') return
    setDownload({ status: 'running', done: 0 })
    try {
      const blob = await generateBrochurePdf(BROCHURE, (done) => setDownload({ status: 'running', done }))
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = 'sembada-brosur-katalog.pdf'
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      window.setTimeout(() => URL.revokeObjectURL(url), 10000)
      setDownload({ status: 'done' })
    } catch (error) {
      setDownload({ status: 'error', message: error instanceof Error ? error.message : 'Gagal membuat PDF.' })
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    touchRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchRef.current
    touchRef.current = null
    if (!start) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      swipeEndRef.current = Date.now()
      go(dx < 0 ? index + 1 : index - 1)
    }
  }

  const navButton =
    'px-6 md:px-8 py-3 border border-[#f2ca50]/40 text-[#f2ca50] font-black uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 hover:bg-[#f2ca50]/10 disabled:opacity-30 disabled:hover:bg-transparent'
  const overlayButton =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f2ca50]/30 bg-[#0B0C10]/70 text-[#f2ca50] transition-colors hover:bg-[#f2ca50]/20'
  const chip =
    'px-3 py-1.5 border border-[#f2ca50]/20 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8] transition-colors hover:border-[#f2ca50]/60 hover:text-[#f2ca50]'

  return (
    <div className="pt-20 md:pt-24 bg-[#0B0C10]">
      <SEO
        title={`Brosur & Katalog Produk (${total} Halaman) - Sembada Batu Beling`}
        description={`Jelajahi ${total} halaman brosur produk Sembada Batu Beling: laboratorium cabinet, cubicle toilet, portable toilet, office cubicle, movable door. Zoom tiap halaman atau unduh PDF lengkap.`}
        url="https://sembada.xyz/brosur"
        type="website"
      />
      {/* ImageGallery JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Brosur & Katalog Sembada Batu Beling",
            "numberOfPages": total,
            "image": BROCHURE.map((entry) => `https://sembada.xyz${entry.src}`)
          })
        }}
      />

      {/* Header */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto text-center relative z-10">
          <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
            Brosur & Katalog
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight mx-auto max-w-4xl">
            Brosur Produk
          </h1>
          <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
            {total} halaman katalog lengkap Sembada Batu Beling dalam satu tampilan brosur. Klik halaman
            untuk melihat ukuran penuh (zoom &amp; geser), atau unduh semuanya sebagai satu file PDF.
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#64748B] font-black">
            {total} Halaman · {BROCHURE_GROUPS.length} Kategori · PDF Siap Unduh
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Reader */}
      <section className="relative py-10 md:py-14 px-4 md:px-10 bg-[#111216] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="relative border border-[#f2ca50]/20 bg-[#0B0C10]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button
              type="button"
              onClick={handleOpenLightbox}
              aria-label={`Buka halaman ${index + 1} ukuran penuh`}
              className="group relative flex h-[58vh] md:h-[70vh] w-full cursor-zoom-in items-center justify-center p-3"
            >
              <img src={page.src} alt={page.alt} draggable={false} className="max-h-full max-w-full select-none object-contain" />
              <span className="absolute left-3 top-3 border border-[#f2ca50]/30 bg-[#0B0C10]/80 px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#f2ca50]">
                {page.group}
              </span>
              <span className="absolute right-3 top-3 border border-[#f2ca50]/30 bg-[#0B0C10]/80 px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                Halaman {index + 1} / {total}
              </span>
              <span className="absolute bottom-3 right-3 hidden text-[9px] uppercase tracking-[0.2em] text-[#64748B] transition-colors group-hover:text-[#f2ca50] md:block">
                Klik untuk zoom &amp; geser
              </span>
            </button>

            {index > 0 && (
              <button type="button" onClick={() => go(index - 1)} aria-label="Halaman sebelumnya" className={`${overlayButton} left-2`}>
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            {index < total - 1 && (
              <button type="button" onClick={() => go(index + 1)} aria-label="Halaman berikutnya" className={`${overlayButton} right-2`}>
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0} className={navButton}>
              Sebelumnya
            </button>
            <span className="px-2 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-[#94A3B8]">
              Halaman {index + 1} / {total}
            </span>
            <button type="button" onClick={() => go(index + 1)} disabled={index === total - 1} className={navButton}>
              Berikutnya
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-[#e3e2e8]/60">{page.label}</p>

          {/* Group chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {BROCHURE_GROUPS.map((group) => (
              <button key={group.name} type="button" onClick={() => go(group.start)} className={chip}>
                {group.name} ({group.count})
              </button>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {BROCHURE.map((thumb, thumbIndex) => (
              <button
                key={thumb.src}
                type="button"
                onClick={() => go(thumbIndex)}
                aria-label={`Halaman ${thumbIndex + 1}: ${thumb.label}`}
                aria-current={thumbIndex === index ? 'true' : undefined}
                className={`h-20 w-14 shrink-0 overflow-hidden border transition-colors ${
                  thumbIndex === index ? 'border-[#f2ca50]' : 'border-[#f2ca50]/15 hover:border-[#f2ca50]/50'
                }`}
              >
                <img src={thumb.src} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="relative py-14 md:py-20 px-6 md:px-10 bg-[#0B0C10] overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10 max-w-3xl text-center">
          <FileText className="mx-auto mb-4 h-8 w-8 text-[#f2ca50]" />
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">
            Unduh Brosur Lengkap
          </h2>
          <p className="text-sm md:text-base text-[#e3e2e8]/70 leading-relaxed font-light mb-8">
            Satu file PDF berisi {total} halaman brosur. Dibuat langsung di peramban Anda — gambar tidak
            diunggah ke server.
          </p>
          <button
            type="button"
            onClick={handleDownload}
            disabled={download.status === 'running'}
            className="inline-flex items-center justify-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white disabled:opacity-60"
            style={{ boxShadow: '0 4px 20px rgba(242, 202, 80, 0.35)' }}
          >
            {download.status === 'running' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {downloadButtonLabel(download, total)}
          </button>
          {download.status === 'running' && (
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
              Menyusun halaman {download.done} dari {total}…
            </p>
          )}
          {download.status === 'done' && (
            <p className="mt-4 text-sm text-[#f2ca50]">PDF {total} halaman berhasil dibuat — cek folder unduhan Anda.</p>
          )}
          {download.status === 'error' && (
            <p className="mt-4 text-sm text-red-400">{download.message} Silakan coba lagi.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 md:py-20 px-6 md:px-10 bg-[#111216] text-center overflow-hidden">
        <StarryBackground variant="subtle" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-gold-gradient mb-4">
            Butuh Penawaran atau Katalog Cetak?
          </h2>
          <p className="text-base md:text-lg text-[#e3e2e8]/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Tim kami siap membantu kebutuhan proyek Anda — dari spesifikasi teknis hingga pengiriman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/hubungi-kami"
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[#f2ca50] text-[#0B0C10] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-white"
            >
              Minta Penawaran
            </Link>
            <a
              href="https://wa.me/6285257460869"
              className="inline-block px-8 md:px-12 py-4 md:py-5 border border-[#f2ca50]/50 text-[#f2ca50] font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 hover:bg-[#f2ca50]/10"
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
