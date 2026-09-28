import type { BrochurePage } from '@/data/brochure'

const A4_WIDTH = 595.28
const A4_HEIGHT = 841.89

export async function generateBrochurePdf(
  pages: readonly BrochurePage[],
  onProgress?: (done: number, total: number) => void,
): Promise<Blob> {
  const { PDFDocument } = await import('pdf-lib')
  const document = await PDFDocument.create()
  document.setTitle('Brosur & Katalog — Sembada Batu Beling')
  document.setAuthor('Sembada BatuBeling')
  document.setCreator('sembada.xyz')
  document.setProducer('sembada.xyz')
  document.setCreationDate(new Date())

  for (let i = 0; i < pages.length; i += 1) {
    const res = await fetch(pages[i].src)
    if (!res.ok) throw new Error(`Halaman ${i + 1} gagal dimuat.`)
    const bytes = await res.arrayBuffer()
    const header = new Uint8Array(bytes.slice(0, 3))
    if (header[0] !== 0xff || header[1] !== 0xd8 || header[2] !== 0xff) {
      throw new Error(`Halaman ${i + 1} bukan berkas JPEG yang valid.`)
    }
    const image = await document.embedJpg(bytes)
    const scale = Math.min(A4_WIDTH / image.width, A4_HEIGHT / image.height)
    const width = image.width * scale
    const height = image.height * scale
    const page = document.addPage([width, height])
    page.drawImage(image, { x: 0, y: 0, width, height })
    onProgress?.(i + 1, pages.length)
  }

  const bytes = await document.save()
  return new Blob([bytes as BlobPart], { type: 'application/pdf' })
}
