import { images } from '@/data/imagePaths'

export interface BrochurePage {
  src: string
  alt: string
  label: string
  group: string
}

export const BROCHURE: BrochurePage[] = [
  {
    src: images.katalog['semua-produk'],
    alt: 'Katalog semua produk Sembada Batu Beling',
    label: 'Katalog Semua Produk',
    group: 'Katalog',
  },
  {
    src: images.laboratoriumCabinet['island-koleksi'],
    alt: 'Koleksi kabinet laboratorium island Sembada',
    label: 'Koleksi Kabinet Lab Island',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['lemari-lab-brosur'],
    alt: 'Brosur lemari laboratorium Sembada',
    label: 'Brosur Lemari Lab',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['lemari-lab-pvc'],
    alt: 'Spesifikasi lemari lab PVC solid premium',
    label: 'Lemari Lab PVC Solid Premium',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['lemari-asam-baru'],
    alt: 'Spesifikasi lemari asam laboratorium',
    label: 'Lemari Asam — Spesifikasi',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['dinding-pulau'],
    alt: 'Kabinet laboratorium dinding dan pulau',
    label: 'Kabinet Dinding & Pulau',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['pulau-spesifikasi'],
    alt: 'Spesifikasi kabinet pulau laboratorium',
    label: 'Kabinet Pulau — Spesifikasi',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['meja-table-part'],
    alt: 'Spesifikasi meja praktikum table part',
    label: 'Meja Praktikum — Table Part',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['meja-full-set'],
    alt: 'Meja praktikum laboratorium full set',
    label: 'Meja Praktikum Full Set',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['meja-terpasang'],
    alt: 'Meja praktikum laboratorium terpasang',
    label: 'Meja Praktikum Terpasang',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['wastafel-keran'],
    alt: 'Spesifikasi wastafel dan keran laboratorium',
    label: 'Wastafel & Keran — Spesifikasi',
    group: 'Laboratorium',
  },
  {
    src: images.laboratoriumCabinet['wastafel-lab'],
    alt: 'Spesifikasi wastafel laboratorium',
    label: 'Wastafel Lab — Spesifikasi',
    group: 'Laboratorium',
  },
  {
    src: images.cubicleToilet['premium-cover'],
    alt: 'Cubicle toilet premium Sembada',
    label: 'Cubicle Premium — Cover',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['phenolic-spesialis'],
    alt: 'Spesialis cubicle toilet phenolic',
    label: 'Spesialis Phenolic',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['varian-premium'],
    alt: 'Varian premium cubicle toilet',
    label: 'Varian Premium',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['full-height-varian'],
    alt: 'Varian full height cubicle toilet',
    label: 'Varian Full Height',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['sistem-konstruksi'],
    alt: 'Sistem konstruksi cubicle toilet',
    label: 'Sistem Konstruksi',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['urinal-divider'],
    alt: 'Model dan spesifikasi urinal divider',
    label: 'Urinal Divider — Model & Spesifikasi',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['chart-woodgrain'],
    alt: 'Colour chart woodgrain dan pattern',
    label: 'Colour Chart Woodgrain',
    group: 'Cubicle Toilet',
  },
  {
    src: images.cubicleToilet['chart-pvc-phenolic'],
    alt: 'Colour chart PVC dan phenolic solid',
    label: 'Colour Chart PVC & Phenolic',
    group: 'Cubicle Toilet',
  },
  {
    src: images.portableToilet['varian-deluxe'],
    alt: 'Varian deluxe toilet portable',
    label: 'Portable Toilet Deluxe',
    group: 'Portable Toilet',
  },
  {
    src: images.officeCubicle['workstation-varian'],
    alt: 'Varian workstation office cubicle',
    label: 'Office Cubicle Workstation',
    group: 'Office Cubicle',
  },
  {
    src: images.movableDoor['varian-koleksi'],
    alt: 'Koleksi varian movable door',
    label: 'Movable Door — Koleksi',
    group: 'Movable Door',
  },
]

export interface BrochureGroup {
  name: string
  start: number
  count: number
}

export const BROCHURE_GROUPS: BrochureGroup[] = BROCHURE.reduce<BrochureGroup[]>((groups, page, index) => {
  const last = groups[groups.length - 1]
  if (last && last.name === page.group) {
    last.count += 1
  } else {
    groups.push({ name: page.group, start: index, count: 1 })
  }
  return groups
}, [])
