import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'
import { LightboxContext, type LightboxItem } from '@/components/ui/lightboxContext'

interface ViewState {
  s: number
  x: number
  y: number
}

interface Dims {
  vw: number
  vh: number
  iw: number
  ih: number
}

const MAX_SCALE = 8

function computeFit(dims: Dims) {
  if (!dims.vw || !dims.vh || !dims.iw || !dims.ih) return 1
  return Math.min(dims.vw / dims.iw, dims.vh / dims.ih, 1)
}

function clampView(view: ViewState, dims: Dims): ViewState {
  const maxX = Math.max(0, (dims.iw * view.s - dims.vw) / 2)
  const maxY = Math.max(0, (dims.ih * view.s - dims.vh) / 2)
  return {
    s: view.s,
    x: Math.min(maxX, Math.max(-maxX, view.x)),
    y: Math.min(maxY, Math.max(-maxY, view.y)),
  }
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LightboxItem[]>([])
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((nextItems: LightboxItem[], start = 0) => {
    if (nextItems.length === 0) return
    setItems(nextItems)
    setIndex(Math.min(Math.max(start, 0), nextItems.length - 1))
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ open, isOpen }), [open, isOpen])

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {isOpen && <LightboxViewer items={items} index={index} onIndexChange={setIndex} onClose={close} />}
    </LightboxContext.Provider>
  )
}

interface LightboxViewerProps {
  items: LightboxItem[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

function LightboxViewer({ items, index, onIndexChange, onClose }: LightboxViewerProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  const dimsRef = useRef<Dims>({ vw: 0, vh: 0, iw: 0, ih: 0 })
  const viewRef = useRef<ViewState>({ s: 1, x: 0, y: 0 })
  const pointersRef = useRef(new Map<number, { x: number; y: number }>())
  const panRef = useRef<{ id: number; sx: number; sy: number; vx: number; vy: number } | null>(null)
  const pinchRef = useRef<{ dist: number; mx: number; my: number } | null>(null)

  const [view, setView] = useState<ViewState>({ s: 1, x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)

  const item = items[index]
  const total = items.length

  useEffect(() => {
    viewRef.current = view
  }, [view])

  const applyView = useCallback((updater: ViewState | ((current: ViewState) => ViewState)) => {
    setView((current) => clampView(typeof updater === 'function' ? updater(current) : updater, dimsRef.current))
  }, [])

  const zoomAt = useCallback((px: number, py: number, factor: number) => {
    applyView((current) => {
      const dims = dimsRef.current
      const scale = Math.min(MAX_SCALE, Math.max(computeFit(dims), current.s * factor))
      const k = scale / current.s
      const cx = px - dims.vw / 2
      const cy = py - dims.vh / 2
      return { s: scale, x: cx - (cx - current.x) * k, y: cy - (cy - current.y) * k }
    })
  }, [applyView])

  const zoomAboutCenter = useCallback((factor: number) => {
    applyView((current) => {
      const dims = dimsRef.current
      const scale = Math.min(MAX_SCALE, Math.max(computeFit(dims), current.s * factor))
      const k = scale / current.s
      return { s: scale, x: current.x * k, y: current.y * k }
    })
  }, [applyView])

  const fitToScreen = useCallback(() => {
    applyView((current) => ({ ...current, s: computeFit(dimsRef.current), x: 0, y: 0 }))
  }, [applyView])

  const actualSize = useCallback(() => {
    applyView((current) => ({ ...current, s: 1 }))
  }, [applyView])

  useEffect(() => {
    const element = viewportRef.current
    if (!element) return
    const measure = () => {
      const rect = element.getBoundingClientRect()
      dimsRef.current.vw = rect.width
      dimsRef.current.vh = rect.height
      applyView((current) => ({ ...current }))
    }
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    return () => observer.disconnect()
  }, [applyView])

  const goTo = useCallback((next: number) => {
    if (next < 0 || next > total - 1) return
    setLoaded(false)
    setView({ s: 1, x: 0, y: 0 })
    onIndexChange(next)
  }, [total, onIndexChange])

  useEffect(() => {
    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      restoreFocusRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'ArrowLeft' && index > 0) {
        goTo(index - 1)
        return
      }
      if (event.key === 'ArrowRight' && index < total - 1) {
        goTo(index + 1)
        return
      }
      if (event.key === '+' || event.key === '=') {
        zoomAboutCenter(1.25)
        return
      }
      if (event.key === '-') {
        zoomAboutCenter(0.8)
        return
      }
      if (event.key === '0') {
        fitToScreen()
        return
      }
      if (event.key === '1') {
        actualSize()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, total, onClose, goTo, zoomAboutCenter, fitToScreen, actualSize])

  useEffect(() => {
    const element = viewportRef.current
    if (!element) return
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const rect = element.getBoundingClientRect()
      zoomAt(event.clientX - rect.left, event.clientY - rect.top, Math.exp(-event.deltaY * 0.0015))
    }
    element.addEventListener('wheel', onWheel, { passive: false })
    return () => element.removeEventListener('wheel', onWheel)
  }, [zoomAt])

  useEffect(() => {
    for (const neighbour of [index - 1, index + 1]) {
      const next = items[neighbour]
      if (next) {
        const preloader = new Image()
        preloader.src = next.src
      }
    }
  }, [index, items])

  const handleImageLoad = () => {
    const image = imageRef.current
    if (!image) return
    dimsRef.current.iw = image.naturalWidth
    dimsRef.current.ih = image.naturalHeight
    applyView({ s: 1, x: 0, y: 0 })
    setLoaded(true)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const element = viewportRef.current
    if (!element) return
    element.setPointerCapture(event.pointerId)
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })

    if (pointersRef.current.size === 1) {
      panRef.current = {
        id: event.pointerId,
        sx: event.clientX,
        sy: event.clientY,
        vx: viewRef.current.x,
        vy: viewRef.current.y,
      }
    } else if (pointersRef.current.size === 2) {
      const [a, b] = Array.from(pointersRef.current.values())
      if (a && b) {
        pinchRef.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 }
      }
      panRef.current = null
    }
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) return
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY })

    if (pointersRef.current.size === 2 && pinchRef.current) {
      const element = viewportRef.current
      if (!element) return
      const [a, b] = Array.from(pointersRef.current.values())
      if (!a || !b) return
      const distance = Math.hypot(a.x - b.x, a.y - b.y)
      const midX = (a.x + b.x) / 2
      const midY = (a.y + b.y) / 2
      const factor = pinchRef.current.dist > 0 ? distance / pinchRef.current.dist : 1
      const panX = midX - pinchRef.current.mx
      const panY = midY - pinchRef.current.my
      pinchRef.current = { dist: distance, mx: midX, my: midY }
      const rect = element.getBoundingClientRect()
      applyView((current) => {
        const dims = dimsRef.current
        const scale = Math.min(MAX_SCALE, Math.max(computeFit(dims), current.s * factor))
        const k = scale / current.s
        const px = midX - rect.left - dims.vw / 2
        const py = midY - rect.top - dims.vh / 2
        return { s: scale, x: px - (px - current.x) * k + panX, y: py - (py - current.y) * k + panY }
      })
      return
    }

    if (pointersRef.current.size === 1 && panRef.current && panRef.current.id === event.pointerId) {
      const pan = panRef.current
      applyView((current) => ({
        ...current,
        x: pan.vx + (event.clientX - pan.sx),
        y: pan.vy + (event.clientY - pan.sy),
      }))
    }
  }

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId)
    if (pointersRef.current.size < 2) pinchRef.current = null
    if (pointersRef.current.size === 1) {
      const entry = Array.from(pointersRef.current.entries())[0]
      if (entry) {
        panRef.current = { id: entry[0], sx: entry[1].x, sy: entry[1].y, vx: viewRef.current.x, vy: viewRef.current.y }
      }
    } else if (pointersRef.current.size === 0) {
      panRef.current = null
    }
  }

  const handleDoubleClick = () => {
    if (Math.abs(viewRef.current.s - 1) < 0.01) fitToScreen()
    else actualSize()
  }

  const zoomPercent = Math.round(view.s * 100)
  const controlButton =
    'flex h-11 w-11 items-center justify-center border border-[#f2ca50]/30 text-[#f2ca50] transition-colors hover:bg-[#f2ca50]/15'
  const textButton =
    'hidden h-11 items-center justify-center border border-[#f2ca50]/30 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#f2ca50] transition-colors hover:bg-[#f2ca50]/15 sm:inline-flex'

  return (
    <div role="dialog" aria-modal="true" aria-label={item.alt} className="fixed inset-0 z-[100] flex flex-col bg-[#0B0C10]/95 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 border-b border-[#f2ca50]/20 px-3 py-2 md:px-5">
        <div className="min-w-0">
          <p className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-[#f2ca50]">{item.alt}</p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#94A3B8]">
            {index + 1} / {total} · {zoomPercent}%
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1 md:gap-2">
          <button type="button" onClick={() => zoomAboutCenter(0.8)} aria-label="Perkecil" className={controlButton}>
            <ZoomOut className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => zoomAboutCenter(1.25)} aria-label="Perbesar" className={controlButton}>
            <ZoomIn className="h-5 w-5" />
          </button>
          <button type="button" onClick={fitToScreen} className={textButton}>
            Fit
          </button>
          <button type="button" onClick={actualSize} className={textButton}>
            100%
          </button>
          <button type="button" ref={closeButtonRef} onClick={onClose} aria-label="Tutup" className={controlButton}>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div
          ref={viewportRef}
          className="absolute inset-0 cursor-grab touch-none select-none overflow-hidden active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onDoubleClick={handleDoubleClick}
        >
          <img
            ref={imageRef}
            src={item.src}
            alt={item.alt}
            draggable={false}
            onLoad={handleImageLoad}
            onError={() => setLoaded(true)}
            className="absolute left-1/2 top-1/2 max-h-none max-w-none origin-center will-change-transform"
            style={{
              transform: `translate(-50%, -50%) translate(${view.x}px, ${view.y}px) scale(${view.s})`,
              opacity: loaded ? 1 : 0.35,
            }}
          />
          {!loaded && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#f2ca50]/30 border-t-[#f2ca50]" />
            </div>
          )}
        </div>

        {index > 0 && (
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Gambar sebelumnya"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f2ca50]/30 bg-[#0B0C10]/70 text-[#f2ca50] transition-colors hover:bg-[#f2ca50]/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        {index < total - 1 && (
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Gambar berikutnya"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f2ca50]/30 bg-[#0B0C10]/70 text-[#f2ca50] transition-colors hover:bg-[#f2ca50]/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="border-t border-[#f2ca50]/20 px-4 py-2 text-center text-[10px] uppercase tracking-[0.2em] text-[#64748B]">
        Seret untuk menggeser · Scroll atau pinch untuk zoom · Klik ganda Fit ⇄ 100%
      </div>
    </div>
  )
}
