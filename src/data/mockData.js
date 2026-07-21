/**
 * =========================================================================
 * STATIC FALLBACK DATA FOR DESA PASIRMUNJUL (KKN VILLAGE WEB APP)
 * =========================================================================
 * 
 * Data ini digunakan sebagai fallback jika Sanity CMS tidak dapat dijangkau
 * atau belum diinisialisasi kontennya. Menjamin website tetap berfungsi,
 * terlihat rapi, dan tidak memicu error visual.
 * =========================================================================
 */

// General Village Information
export const VILLAGE_INFO = {
  name: "Pasirmunjul",
  district: "Sukatani",
  regency: "Purwakarta",
  tagline: "Pasirmunjul Ngahiji",
  about: "Desa Pasirmunjul terletak di Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat. Dikelilingi oleh perbukitan yang hijau dan pemandangan alam yang asri, desa ini resmi mekar dari Desa Cianting pada tahun 1985. Nama Pasirmunjul sendiri diambil oleh masyarakat setempat dari gabungan kata Sunda 'Pasir' yang berarti perbukitan pasir dan 'Munjul' yang berarti menonjol di dataran tinggi, mencerminkan topografi wilayahnya yang subur di pegunungan.",
  address: "Kantor Desa Pasirmunjul, Jl. Desa Pasirmunjul RT 1/1, Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat 41167",
  phone: "083100607316",
  stats: [
    { label: "Luas Wilayah", value: "585,858 Ha", icon: "Map" },
    { label: "Jumlah Penduduk", value: "3.660 Jiwa", icon: "Users" },
    { label: "Pembagian Dusun", value: "3 Dusun", icon: "Home" },
    { label: "Total Kepala Keluarga", value: "1.244 KK", icon: "ShoppingBag" }
  ],
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.972379308149!2d107.39127525541992!3d-6.522588399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690ee0d1e5bdad%3A0xc3457a419ef2a23e!2sPasirmunjul%2C%20Kec.%20Sukatani%2C%20Kabupaten%20Purwakarta%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1720436800000!5m2!1sid!2sid"
};

// Profile Desa Dropdown Sub-pages
export const PROFILE_DESA_SUB = {
  sejarah: {
    title: "Sejarah Desa Pasirmunjul",
    content: "Nama Desa Pasirmunjul diambil oleh masyarakat dari keadaan alam geografisnya. Kata 'Pasir' dalam bahasa Sunda berarti perbukitan atau gundukan tanah tinggi yang memiliki kandungan pasir, sedangkan kata 'Munjul' memiliki arti menonjol atau menyembul di atas dataran sekitarnya. Penggabungan nama ini menjadi identitas desa yang menggambarkan wilayah pemukiman yang asri di atas perbukitan pasir yang menonjol.\n\nSecara administratif, Desa Pasirmunjul resmi berdiri sebagai desa definitif pada tahun 1985 setelah dimekarkan dari Desa Cianting. Sejak saat itu, para tokoh masyarakat dan warga Pasirmunjul berkomitmen menjaga kelestarian alam sambil terus mengembangkan potensi pertanian padi, pisang, dan produk olahan nira aren yang menjadi penopang ekonomi keluarga."
  },
  visiMisi: {
    title: "Visi dan Misi Desa Pasirmunjul",
    visi: "Desa Pasirmunjul Maju Bermartabat Menuju Kemandirian Tahun 2029",
    misi: [
      "Mewujudkan tatakelola Pemerintah Desa yang efektif, efisien serta penguatan kemitraan Pemdes, lembaga desa dan masyarakat.",
      "Meningkatkan ketersediaan kualitas infrastruktur serta pengelolaan lingkungan hidup yang berkelanjutan.",
      "Meningkatkan pelayanan kesehatan, pendidikan dan kesejahteraan masyarakat.",
      "Meningkatkan kualitas Sumber Daya Manusia (SDM).",
      "Membangun perekonomian desa yang tangguh.",
      "Mengoptimalkan pelayanan prima kepada masyarakat untuk mempercepat daya guna dan hasil guna."
    ]
  },
  struktur: {
    title: "Struktur Pemerintahan Desa Pasirmunjul",
    officials: [
      { role: "Kepala Desa", name: "Usep" },
      { role: "Sekretaris Desa", name: "Sulistianingsih" },
      { role: "Kaur Tata Usaha & Umum", name: "Fadhil Kurniawan" },
      { role: "Kaur Keuangan", name: "Anisa Rahmah" },
      { role: "Kaur Perencanaan", name: "Asep Endan" },
      { role: "Kasi Pemerintahan", name: "Andri" },
      { role: "Kasi Kesejahteraan", name: "Fitri" },
      { role: "Kasi Pelayanan", name: "Indriani" },
      { role: "Kepala Dusun I", name: "Dede Hamid Sutisna" },
      { role: "Kepala Dusun II", name: "Hendi" },
      { role: "Kepala Dusun III", name: "Mulyadin" }
    ]
  },
  monografi: {
    title: "Monografi Desa Pasirmunjul",
    general: [
      { name: "Provinsi", value: "Jawa Barat" },
      { name: "Kabupaten", value: "Purwakarta" },
      { name: "Kecamatan", value: "Sukatani" },
      { name: "Tahun Pemekaran", value: "1985 (dari Desa Cianting)" },
      { name: "Luas Wilayah", value: "585,858 Hektar (Ha)" },
      { name: "Batas Wilayah Utara", value: "Desa Sukatani, Kec. Sukatani" },
      { name: "Batas Wilayah Selatan", value: "Desa Cianting, Kec. Sukatani" },
      { name: "Batas Wilayah Timur", value: "Desa Sukajadi, Kec. Pondok Salam" },
      { name: "Batas Wilayah Barat", value: "Desa Cibodas, Kec. Sukatani" }
    ],
    population: [
      { category: "Jumlah Total Penduduk", value: "3.660 Jiwa (bulan Juni)" },
      { category: "Jumlah Laki-laki", value: "1.760 Jiwa" },
      { category: "Jumlah Perempuan", value: "1.898 Jiwa" },
      { category: "Jumlah Kepala Keluarga (KK)", value: "1.244 KK" }
    ],
    livelihoods: [
      { job: "Buruh Harian Lepas (Mayoritas)", count: "Mayoritas Utama" },
      { job: "Petani & Pekebun", count: "Sektor Unggulan" },
      { job: "Kuli Bangunan / Serabutan", count: "Sektor Penopang" },
      { job: "PNS / Swasta / Jasa", count: "Sektor Pelayanan" }
    ]
  }
};

// Hamlet/Dusun Data
export const DUSUN_DATA = {
  "dusun-1": {
    id: "dusun-1",
    name: "Dusun 1",
    lead: "Dede Hamid Sutisna",
    profile: "Dusun 1 dipimpin oleh Bapak Dede Hamid Sutisna, membawahi wilayah administratif yang terdiri dari 5 kampung, 6 RT, dan 2 RW. Wilayah ini merupakan pusat pemerintahan desa dengan lokasi Kantor Desa Pasirmunjul berada di Kampung Pasirmunjul. Sebagian besar warga menggantungkan hidup dari sektor pertanian, perkebunan singkong, dan pengolahan gaplek tradisional.",
    whatsappContact: "6283876776079",
    stats: {
      kampung: 5,
      rt: 6,
      rw: 2,
      komoditas: "Gaplek & Singkong"
    },
    kampungList: [
      { nama: "Kp. Pasirmunjul", rt: "RT 01", rw: "RW 01" },
      { nama: "Kp. Baru", rt: "RT 02", rw: "RW 01" },
      { nama: "Kp. Margasari", rt: "RT 03", rw: "RW 01" },
      { nama: "Kp. Sukamulya", rt: "RT 04", rw: "RW 01" },
      { nama: "Kp. Hegarmanah", rt: "RT 05 & 06", rw: "RW 02" }
    ],
    batas: {
      utara: "Desa Sukatani",
      selatan: "Gunung Hejo",
      timur: "Dusun 2 (Kp. Cigintung)",
      barat: "Desa Cianting, Sukatani"
    },
    komoditas: {
      name: "Pengolahan Gaplek Tradisional",
      description: "Gaplek diproduksi secara turun-temurun oleh warga Dusun 1 dari bahan singkong pilihan. Produk ini menjadi cadangan karbohidrat lokal yang tahan lama dan bernilai ekonomi tinggi sebagai bahan dasar makanan tradisional."
    },
    gallery: [
      {
        id: "d1-img1",
        src: "/images/dusun_1_aren.jpg",
        title: "Lanskap Dusun 1",
        description: "Suasana pagi berkabut di wilayah perkebunan Dusun 1 Pasirmunjul."
      }
    ]
  },
  "dusun-2": {
    id: "dusun-2",
    name: "Dusun 2",
    lead: "Hendi",
    profile: "Dusun 2 dipimpin oleh Bapak Hendi, membawahi 4 kampung yang tersebar di wilayah RT 07 hingga RT 10 (RW 03). Dusun ini terkenal dengan kekayaan alam pohon aren yang melimpah, menjadikannya sebagai sentra produksi gula aren cetak dan lahang segar terbesar di Desa Pasirmunjul. Selain itu, pertanian padi sawah juga menjadi penopang utama ekonomi warga.",
    whatsappContact: "6285956320480",
    stats: {
      kampung: 4,
      rt: 4,
      rw: 1,
      komoditas: "Gula Aren & Lahang"
    },
    kampungList: [
      { nama: "Kp. Cihampelas", rt: "RT 07", rw: "RW 03" },
      { nama: "Kp. Cigintung", rt: "RT 08", rw: "RW 03" },
      { nama: "Kp. Talaga", rt: "RT 09", rw: "RW 03" },
      { nama: "Kp. Talaga", rt: "RT 10", rw: "RW 03" }
    ],
    batas: {
      utara: "Desa Sukatani, Kec. Sukatani",
      selatan: "Desa Gunung Hejo, Darangdan",
      timur: "Dusun 3 (Kp. Randiah)",
      barat: "Dusun 1 (Kp. Sukamulya)"
    },
    komoditas: {
      name: "Sentra Gula Aren & Lahang Segar",
      description: "Nira aren segar (lahang) disadap langsung dari pohon aren pilihan oleh warga setiap pagi, lalu diolah menggunakan tungku kayu bakar tradisional menjadi gula aren cetak khas berkualitas premium. Produk ini menjadi komoditas andalan dusun yang dipasarkan hingga ke luar wilayah Purwakarta."
    },
    gallery: [
      {
        id: "d2-img1",
        src: "/images/dusun_2_village.jpg",
        title: "Pemukiman Dusun 2",
        description: "Suasana pemukiman warga yang bersih dan asri di Dusun 2."
      }
    ]
  },
  "dusun-3": {
    id: "dusun-3",
    name: "Dusun 3",
    lead: "Mulyadin",
    profile: "Dusun 3 dipimpin oleh Bapak Mulyadin, menaungi wilayah Kampung Randiah yang mencakup RT 11 hingga RT 14 (RW 04 & RW 05). Dusun ini dianugerahi tanah yang sangat subur, aliran air jernih dari Sungai Cibingbin, serta perkebunan pisang uli dan pisang tanduk yang melimpah. Sebagian besar hasil kebun dijual segar ke pasar, dan sebagian diolah menjadi selai pisang khas dusun.",
    whatsappContact: "6283863546513",
    stats: {
      kampung: 1,
      rt: 4,
      rw: 2,
      komoditas: "Pisang & Selai"
    },
    kampungList: [
      { nama: "Kp. Randiah", rt: "RT 11", rw: "RW 04" },
      { nama: "Kp. Randiah", rt: "RT 12", rw: "RW 04" },
      { nama: "Kp. Randiah", rt: "RT 13", rw: "RW 05" },
      { nama: "Kp. Randiah", rt: "RT 14", rw: "RW 05" }
    ],
    batas: {
      utara: "Desa Sukatani, Kec. Sukatani",
      selatan: "Desa Gununghejo, Kec. Darangdan",
      timur: "Desa Sukajadi, Kec. Pondok Salam",
      barat: "Dusun 2 (Kp. Talaga)"
    },
    komoditas: {
      name: "Perkebunan Pisang & Selai Pisang",
      description: "Hasil perkebunan pisang uli dan pisang tanduk yang melimpah sebagian dipasarkan dalam bentuk buah segar, dan sebagian lagi diproduksi secara kreatif menjadi olahan selai pisang manis khas Dusun 3 yang menjadi oleh-oleh favorit pengunjung."
    },
    gallery: [
      {
        id: "d3-img1",
        src: "/images/dusun_3_nature.jpg",
        title: "Lembah Pertanian Dusun 3",
        description: "Perkebunan pisang dan sawah subur yang membentang di sekitar Sungai Cibingbin."
      }
    ]
  }
};

// Accordion specific summaries for each Dusun
export const DUSUN_ACCORDION = [
  {
    id: "dusun-1",
    num: 1,
    title: "Dusun 1",
    subtitle: "Pusat Pemerintahan & Sentra Gaplek",
    icon: "🌾",
    lead: "Bpk. Dede Hamid Sutisna",
    profile: "Terdiri dari 5 kampung (Kp. Pasirmunjul, Baru, Margasari, Sukamulya, Hegarmanah), 6 RT, dan 2 RW. Komoditas unggulan: gaplek singkong.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Gunung Hejo",
      timur: "Dusun 2 (Kp. Cigintung)",
      barat: "Desa Cianting"
    }
  },
  {
    id: "dusun-2",
    num: 2,
    title: "Dusun 2",
    subtitle: "Sentra Gula Aren & Sawah Padi",
    icon: "🌴",
    lead: "Bpk. Hendi",
    profile: "Terdiri dari 4 kampung (Kp. Cihampelas, Cigintung, Talaga), 4 RT, dan 1 RW. Komoditas unggulan: gula aren cetak & lahang segar.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Desa Gunung Hejo",
      timur: "Dusun 3 (Kp. Randiah)",
      barat: "Dusun 1 (Kp. Sukamulya)"
    }
  },
  {
    id: "dusun-3",
    num: 3,
    title: "Dusun 3",
    subtitle: "Pariwisata Sungai & Perkebunan Pisang",
    icon: "🍌",
    lead: "Bpk. Mulyadin",
    profile: "Meliputi Kp. Randiah dengan 4 RT dan 2 RW. Komoditas unggulan: pisang uli, pisang tanduk, dan selai pisang khas.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Desa Gununghejo",
      timur: "Desa Sukajadi",
      barat: "Dusun 2 (Kp. Talaga)"
    }
  }
];

// News/Blog Data ("Kabar Desa") — Kosong, artikel diambil dari Sanity CMS
export const BLOG_POSTS = [];
