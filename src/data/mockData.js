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
  phone: "083100607316", // Pelayanan
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
    name: "Dusun 1 (Kp. Cigintung)",
    lead: "Kepala Dusun 1 - Bpk. Dede Hamid Sutisna",
    profile: "Dusun 1 dipimpin oleh Bapak Dede Hamid Sutisna (Bpk. Misna). Meliputi wilayah administratif RT 01 hingga RT 06 yang terbagi ke dalam RW 01 dan RW 02. Berada di sisi barat desa, dusun ini berbatasan langsung dengan Desa Cianting. Sebagian besar warga aktif mengembangkan pertanian hortikultura dan komoditas pendukung pangan desa.",
    whatsappContact: "6283876776079",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Gunung Hejo",
      timur: "Kp. Cigintung, Pasirmunjul",
      barat: "Desa Cianting, Sukatani"
    },
    umkm: {
      name: "Produksi Pengolahan Gaplek",
      description: "Gaplek diproduksi secara tradisional oleh warga Dusun 1 dari bahan singkong pilihan sebagai makanan cadangan karbohidrat lokal yang tahan lama dan bernilai ekonomi.",
      steps: [
        {
          no: "01",
          title: "Pengupasan & Pencucian",
          desc: "Singkong hasil panen kebun dikupas bersih dan dicuci menggunakan air mengalir."
        },
        {
          no: "02",
          title: "Pemotongan & Penjemuran",
          desc: "Singkong dipotong sesuai ukuran kemudian dijemur di bawah terik matahari hingga kadar air menyusut habis."
        },
        {
          no: "03",
          title: "Penyimpanan Lumbung",
          desc: "Gaplek kering disimpan di dalam lumbung kayu yang kering dan sejuk agar tahan hingga berbulan-bulan."
        }
      ]
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
    name: "Dusun 2 (Kp. Telaga)",
    lead: "Kepala Dusun 2 - Bpk. Hendi",
    profile: "Dusun 2 berpusat di Kampung Telaga dengan kepemimpinan Bapak Hendi. Mengelola wilayah administrasi RT 07 hingga RT 10 yang terbagi ke dalam RW 03 dan RW 06. Dusun 2 terkenal dengan kekayaan alamnya yang melimpah, khususnya komoditas pertanian padi sawah, lahang segar, dan industri gula aren tradisional.",
    whatsappContact: "6285956320480",
    batas: {
      utara: "Desa Sukatani, Kec. Sukatani",
      selatan: "Desa Gunung Hejo, Darangdan",
      timur: "Kp. Randiah, Kec. Sukatani",
      barat: "Kp. Sukamulya, Kec. Sukatani"
    },
    umkm: {
      name: "Sentra Gula Aren & Lahang Segar",
      description: "Penyadapan lahang segar dari nira pohon aren alami yang kemudian diolah menggunakan tungku kayu bakar menjadi gula aren cetak khas berkualitas premium.",
      steps: [
        {
          no: "01",
          title: "Penyadapan Air Lahang",
          desc: "Nira aren segar (lahang) diambil setiap pagi dari tangkai bunga aren menggunakan wadah bambu."
        },
        {
          no: "02",
          title: "Perebusan Kental",
          desc: "Lahang disaring bersih lalu direbus di atas tungku kayu bakar selama berjam-jam hingga berubah mengental pekat."
        },
        {
          no: "03",
          title: "Pencetakan Tradisional",
          desc: "Adonan panas dituangkan ke cetakan tempurung kelapa atau bambu alami dan dibiarkan mendingin hingga mengeras sempurna."
        }
      ]
    },
    gallery: [
      {
        id: "d2-img1",
        src: "/images/dusun_2_village.jpg",
        title: "Pemukiman Kampung Telaga",
        description: "Suasana pemukiman warga yang bersih, tertata rapi, dan asri di Dusun 2."
      }
    ]
  },
  "dusun-3": {
    id: "dusun-3",
    name: "Dusun 3 (Kp. Randiah)",
    lead: "Kepala Dusun 3 - Bpk. Mulyadin",
    profile: "Dusun 3 dipimpin oleh Bapak Mulyadin, menaungi wilayah Kampung Randiah yang mencakup RT 11 hingga RT 14 (RW 04 & RW 05). Dusun ini dianugerahi aliran air jernih dari Sungai Cibingbin serta perkebunan pisang uli dan pisang tanduk yang subur. Sebagian besar hasil kebun dijual segar, dan sebagian diolah menjadi selai pisang.",
    whatsappContact: "6283863546513",
    batas: {
      utara: "Desa Sukatani, Kec. Sukatani",
      selatan: "Desa Gununghejo, Kec. Darangdan",
      timur: "Desa Sukajadi, Kec. Pondok Salam",
      barat: "Kp. Telaga, Kec. Sukatani"
    },
    umkm: {
      name: "Produksi Selai Pisang & Komoditas Segar",
      description: "Hasil perkebunan pisang yang melimpah sebagian dipasarkan segar dan sebagian lagi diproduksi menjadi olahan selai pisang yang manis alami.",
      steps: [
        {
          no: "01",
          title: "Sortasi Hasil Panen",
          desc: "Pisang dan padi dipanen dari perkebunan warga, disortir berdasarkan tingkat kematangan."
        },
        {
          no: "02",
          title: "Pengolahan Selai",
          desc: "Pisang yang matang diolah secara bersih dan higienis menjadi produk olahan selai pisang manis."
        },
        {
          no: "03",
          title: "Pengepakan & Distribusi",
          desc: "Selai pisang dikemas menarik, sementara pisang mentah dan padi langsung dijual ke pasar."
        }
      ]
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
    title: "Dusun 1 (Kp. Cigintung)",
    subtitle: "Sentra Olahan Gaplek Pangan",
    icon: "🌾",
    lead: "Bpk. Dede Hamid Sutisna (Misna)",
    profile: "Dusun 1 mencakup RT 01 hingga RT 06 (RW 01 & RW 02) dengan komoditas unggulan gaplek singkong tradisional.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Gunung Hejo",
      timur: "Kp. Cigintung",
      barat: "Desa Cianting"
    }
  },
  {
    id: "dusun-2",
    num: 2,
    title: "Dusun 2 (Kp. Telaga)",
    subtitle: "Sentra Gula Aren & Sawah Padi",
    icon: "🌲",
    lead: "Bpk. Hendi (Kadus)",
    profile: "Dusun 2 mencakup RT 07 hingga RT 10 (RW 03 & RW 06) dengan produk unggulan gula aren cetak dan lahang segar.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Desa Gunung Hejo",
      timur: "Kp. Randiah",
      barat: "Kp. Sukamulya"
    }
  },
  {
    id: "dusun-3",
    num: 3,
    title: "Dusun 3 (Kp. Randiah)",
    subtitle: "Pariwisata Sungai & Perkebunan Pisang",
    icon: "🐂",
    lead: "Bpk. Mulyadin (Kadus)",
    profile: "Dusun 3 mencakup RT 11 hingga RT 14 (RW 04 & RW 05) dengan pariwisata Sungai Cibingbin dan kebun pisang subur.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Desa Gununghejo",
      timur: "Desa Sukajadi",
      barat: "Kp. Telaga"
    }
  }
];

// News/Blog Data ("Kabar Desa") — Kosong, artikel diambil dari Sanity CMS
export const BLOG_POSTS = [];
