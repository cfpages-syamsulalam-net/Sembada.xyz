// Image paths for all product categories
// These paths reference files in /public/images/
// Using encoded URLs for files with spaces/special characters

const img = (path: string) => `/images/${path}`;

export const images = {
  // Cellustone
  cellustone: {
    1: img('cellustone/cellustone%201.jpg'),
    2: img('cellustone/cellustone%202.jpg'),
    3: img('cellustone/cellustone%203.jpg'),
    4: img('cellustone/cellustone%204.jpg'),
    fasad: img('cellustone/cellustone%20fasad.jpg'),
    interior: img('cellustone/cellustone%20interior.jpg'),
    'villa-obsidian': img('cellustone/cellustone%20villa%20obsidian.jpg'),
    'wall-panel': img('cellustone/cellustone%20wall%20panel.jpg'),
  },

  // CNC Ornament
  cncOrnament: {
    'fasad-politeknik': img('cnc-ornament/cnc%20ornament%20fasad%20politeknik.webp'),
    'gedung-dprd-surabaya': img('cnc-ornament/cnc%20ornament%20gedung%20dprd%20surabaya.webp'),
    'lab-ketahanan-papua': img('cnc-ornament/cnc%20ornament%20lab.%20ketahanan%20papua.webp'),
    'masjid-baitul-fadli': img('cnc-ornament/cnc%20ornament%20masjid%20baitul%20fadli.webp'),
    'mushola-kai': img('cnc-ornament/cnc%20ornament%20mushola%20kai.webp'),
    'mushola-kereta-makan-kai': img('cnc-ornament/cnc%20ornament%20mushola%20kereta%20makan%20kai.webp'),
    'politeknik-surabaya': img('cnc-ornament/cnc%20ornament%20politeknik%20surabaya.webp'),
  },

  // Cubicle Toilet
  cubicleToilet: {
    1: img('cubicle-toilet/cubicle%20toilet%201.jpg'),
    2: img('cubicle-toilet/cubicle%20toilet%202.jpg'),
    premium: img('cubicle-toilet/cubicle%20toilet%20Premium.png'),
    'hotel-bintang-4': img('cubicle-toilet/cubicle%20toilet%20hotel%20bintang%204.jpg'),
    'kantor-modern': img('cubicle-toilet/cubicle%20toilet%20kantor%20modern.jpg'),
    'pvc-board': img('cubicle-toilet/cubicle%20toilet%20pvc%20board.png'),
    'rumah-sakit-umum': img('cubicle-toilet/cubicle%20toilet%20rumah%20sakit%20umum.jpg'),
    standard: img('cubicle-toilet/cubicle%20toilet%20standard.jpg'),
    'stasiun-kereta-api': img('cubicle-toilet/cubicle%20toilet%20stasiun%20kereta%20api.jpg'),
    'two-tone': img('cubicle-toilet/cubicle%20toilet%20two%20tone.png'),
    'full-height': img('cubicle-toilet/cubicle%20toilet%20full%20height.png'),
  },

  // Laboratorium Cabinet
  laboratoriumCabinet: {
    1: img('laboratorium-cabinet/laboratorium%20cabinet%201.png'),
    2: img('laboratorium-cabinet/laboratorium%20cabinet%202.png'),
    3: img('laboratorium-cabinet/laboratorium%20cabinet%203.png'),
    4: img('laboratorium-cabinet/laboratorium%20cabinet%204.png'),
    'area-kolam-renang': img('laboratorium-cabinet/laboratorium%20cabinet%20area%20kolam%20renang.png'),
    dinding: img('laboratorium-cabinet/laboratorium%20cabinet%20dinding.png'),
    'laboratorium-kimia': img('laboratorium-cabinet/laboratorium%20cabinet%20laboratorium%20kimia.png'),
    'lemari-asam': img('laboratorium-cabinet/laboratorium%20cabinet%20lemari%20asam.png'),
    'pulau-island': img('laboratorium-cabinet/laboratorium%20cabinet%20pulau%20(island).png'),
    'toilet-fasilitas-umum': img('laboratorium-cabinet/laboratorium%20cabinet%20toilet%20fasilitas%20umum.jpg'),
  },

  // Office Cubicle
  officeCubicle: {
    1: img('office-cubicle/office%20cubicle%201.jpg'),
    2: img('office-cubicle/office%20cubicle%202.jpg'),
    'advance-staff': img('office-cubicle/office%20cubicle%20advance%20staff.jpg'),
    'advance-staff-workstations': img('office-cubicle/office%20cubicle%20advance%20staff%20workstations.webp'),
    'leader-staff': img('office-cubicle/office%20cubicle%20leader%20staff.jpg'),
    'leader-staff-workstations': img('office-cubicle/office%20cubicle%20leader%20staff%20workstations.jpg'),
    supervisor: img('office-cubicle/office%20cubicle%20supervisor.jpg'),
    'supervisor-workstations': img('office-cubicle/office%20cubicle%20supervisor%20workstations.jpg'),
  },

  // Movable Door (Partisi Ruangan)
  movableDoor: {
    1: img('partisi-ruangan/movable%20door%201.jpg'),
    2: img('partisi-ruangan/movable%20door%202.jpg'),
    3: img('partisi-ruangan/movable%20door%203.jpg'),
    4: img('partisi-ruangan/movable%20door%204.jpg'),
    'batu-beling': img('partisi-ruangan/movable%20door%20batu%20beling.jpg'),
    emerald: img('partisi-ruangan/movable%20door%20emerald.jpg'),
    kalimaya: img('partisi-ruangan/movable%20door%20kalimaya.png'),
    rubi: img('partisi-ruangan/movable%20door%20rubi.jpg'),
  },

  // Portable Toilet
  portableToilet: {
    1: img('toilet-portable/toilet%20portable.webp'),
    2: img('toilet-portable/toilet%20portable%202.jpg'),
    3: img('toilet-portable/toilet%20portable%203.webp'),
    4: img('toilet-portable/toilet%20portable%204.webp'),
    'dinas-kesehatan': img('toilet-portable/toilet%20portable%20dinas%20kesehatan.webp'),
    'instansi-pemerintahan': img('toilet-portable/toilet%20portable%20instansi%20pemerintahan.jpg'),
    pon: img('toilet-portable/toilet%20portable%20pon%20(pekan%20olahraga%20nasional).png'),
    'sektor-konstruksi': img('toilet-portable/toilet%20portable%20sektor%20konstruksi%20&%20pergudangan.webp'),
    'tempat-wisata': img('toilet-portable/toilet%20portable%20tempat%20wisata%20&%20perkantoran.jpg'),
  },
};
