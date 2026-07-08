/**
 * MOCK DATA SYSTEM - DESA PASIRMUNJUL
 * 
 * =========================================================================
 * SANITY CMS PREPARATION GUIDE:
 * =========================================================================
 * 1. Install Sanity Client:
 *    npm install @sanity/client
 * 
 * 2. Create a sanity client config file (e.g., src/data/sanityClient.js):
 *    import { createClient } from '@sanity/client';
 *    export const client = createClient({
 *      projectId: 'your-project-id',
 *      dataset: 'production',
 *      useCdn: true,
 *      apiVersion: '2023-05-03',
 *    });
 * 
 * 3. In your views (e.g., HomeView.jsx, Dusun1View.jsx), import the client and fetch data:
 *    import { client } from '../data/sanityClient';
 *    
 *    const [villageInfo, setVillageInfo] = useState(null);
 *    const [loading, setLoading] = useState(true);
 * 
 *    useEffect(() => {
 *      client.fetch(`*[_type == "villageInfo"][0]`)
 *        .then((data) => {
 *          setVillageInfo(data);
 *          setLoading(false);
 *        })
 *        .catch(console.error);
 *    }, []);
 * =========================================================================
 */

// General Village Information
export const VILLAGE_INFO = {
  name: "Desa Pasirmunjul",
  district: "Sukatani",
  regency: "Purwakarta",
  tagline: "Membangun Kemandirian Desa Melalui Inovasi, Keragaman Hayati, dan Pemberdayaan UMKM",
  about: "Desa Pasirmunjul terletak di wilayah Kecamatan Sukatani, Kabupaten Purwakarta, Jawa Barat. Dikelilingi oleh perbukitan yang hijau dan udara yang sejuk, desa ini memiliki kekayaan alam yang melimpah serta potensi ekonomi kreatif masyarakat yang terus berkembang, khususnya di bidang pertanian, perkebunan pisang, dan produk olahan nira kelapa/aren.",
  address: "Jl. Raya Pasirmunjul No. 1, Kecamatan Sukatani, Kabupaten Purwakarta, Provinsi Jawa Barat, Kode Pos 41167",
  stats: [
    { label: "Luas Wilayah", value: "348,5 Ha", icon: "Map" },
    { label: "Jumlah Penduduk", value: "3.420 Jiwa", icon: "Users" },
    { label: "Pembagian Hamlet (Dusun)", value: "3 Dusun", icon: "Home" },
    { label: "Unit UMKM Aktif", value: "18 Usaha", icon: "ShoppingBag" }
  ],
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.972379308149!2d107.39127525541992!3d-6.522588399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690ee0d1e5bdad%3A0xc3457a419ef2a23e!2sPasirmunjul%2C%20Kec.%20Sukatani%2C%20Kabupaten%20Purwakarta%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1720436800000!5m2!1sid!2sid"
};

// Profile Desa Dropdown Sub-pages
export const PROFILE_DESA_SUB = {
  sejarah: {
    title: "Sejarah Desa Pasirmunjul",
    content: "Nama Desa Pasirmunjul diambil dari dua padanan kata bahasa Sunda, yaitu 'Pasir' yang berarti perbukitan atau gundukan tanah yang tinggi, dan 'Munjul' yang memiliki arti menonjol atau berada di atas yang lainnya. Secara historis, wilayah ini dahulu merupakan daerah transit bagi para pedagang komoditas pertanian dan hutan yang melintasi jalur Purwakarta menuju wilayah pegunungan sekitarnya.\n\nDesa Pasirmunjul secara resmi dimekarkan dan didirikan sebagai desa definitif untuk mempermudah rentang kendali pelayanan administrasi pemerintahan bagi masyarakat di lereng perbukitan Sukatani. Sejak berdirinya, para tokoh desa dan masyarakat berkomitmen untuk menjaga kelestarian alam sambil terus mengembangkan pertanian holtikultura dan olahan aren yang menjadi mata pencaharian pokok warga."
  },
  visiMisi: {
    title: "Visi dan Misi Desa Pasirmunjul",
    visi: "Pasirmunjul yang Maju, Sejahtera, Mandiri, dan Berkarakter berbasis Optimalisasi Sektor Pertanian serta Pemberdayaan Wirausaha Lokal.",
    misi: [
      "Meningkatkan kualitas tata kelola pemerintahan desa yang bersih, transparan, dan responsif melalui pemanfaatan teknologi informasi.",
      "Mengembangkan sektor pertanian, perkebunan pisang, dan irigasi sungai terpadu guna mendukung ketahanan pangan warga.",
      "Mendorong pertumbuhan industri rumah tangga dan UMKM (seperti gula aren dan kerajinan lokal) melalui pembinaan, perbaikan kemasan, dan pemasaran digital.",
      "Meningkatkan infrastruktur jalan penghubung antar-dusun serta akses pelayanan kesehatan dan pendidikan yang merata.",
      "Melestarikan nilai-nilai kebudayaan lokal gotong royong dan menjaga kelestarian ekosistem lingkungan hidup di wilayah perbukitan."
    ]
  },
  struktur: {
    title: "Struktur Pemerintahan Desa Pasirmunjul",
    officials: [
      { role: "Kepala Desa", name: "H. Ahmad Hidayat, S.Sos." },
      { role: "Sekretaris Desa", name: "Rizal Firmansyah, A.Md." },
      { role: "Kaur Keuangan", name: "Siti Rahmawati" },
      { role: "Kaur Umum & Tata Usaha", name: "Eko Prasetyo" },
      { role: "Kasi Pemerintahan", name: "Cecep Supriatna" },
      { role: "Kasi Kesejahteraan Rakyat", name: "Dadan Ramdani" },
      { role: "Kepala Dusun 1", name: "Jajang Nurjaman" },
      { role: "Kepala Dusun 2", name: "Cecep Hidayat" },
      { role: "Kepala Dusun 3", name: "Maman" }
    ]
  },
  monografi: {
    title: "Monografi Desa Pasirmunjul",
    general: [
      { name: "Provinsi", value: "Jawa Barat" },
      { name: "Kabupaten", value: "Purwakarta" },
      { name: "Kecamatan", value: "Sukatani" },
      { name: "Luas Wilayah", value: "348,5 Hektar (Ha)" },
      { name: "Batas Wilayah Utara", value: "Desa Sukatani" },
      { name: "Batas Wilayah Selatan", value: "Desa Cilalawi" },
      { name: "Batas Wilayah Timur", value: "Desa Tajursindang" },
      { name: "Batas Wilayah Barat", value: "Desa Panyindangan" }
    ],
    population: [
      { category: "Jumlah Total Penduduk", value: "3.420 Jiwa" },
      { category: "Jumlah Laki-laki", value: "1.745 Jiwa" },
      { category: "Jumlah Perempuan", value: "1.675 Jiwa" },
      { category: "Jumlah Kepala Keluarga (KK)", value: "985 KK" }
    ],
    livelihoods: [
      { job: "Petani & Buruh Tani", count: "1.240 Orang" },
      { job: "Pelaku UMKM / Wiraswasta", count: "185 Orang" },
      { job: "Karyawan Swasta", count: "320 Orang" },
      { job: "PNS / TNI / POLRI", count: "45 Orang" }
    ]
  }
};

// Hamlet/Dusun Data
export const DUSUN_DATA = {
  "dusun-1": {
    id: "dusun-1",
    name: "Dusun 1 (Sentra UMKM)",
    lead: "Kepala Dusun 1 - Bpk. Jajang Nurjaman",
    profile: "Dusun 1 merupakan pusat denyut nadi perekonomian dan kreativitas warga Desa Pasirmunjul. Di dusun ini, wirausaha lokal (UMKM) berkembang pesat dengan memanfaatkan hasil alam sekitar. Salah satu produk unggulan utama yang diproduksi secara turun-temurun adalah Gula Aren tradisional berstandar alami tinggi.",
    whatsappContact: "6281234567890", // Ganti dengan nomor WA penjual/Kordes
    umkm: {
      name: "Produksi Gula Aren Tradisional",
      description: "Gula aren dari Dusun 1 Pasirmunjul dibuat langsung dari nira pohon aren pilihan. Diolah secara higienis menggunakan metode tradisional kayu bakar untuk mempertahankan aroma khas kelapa dan karamel alami yang pekat.",
      steps: [
        {
          no: "01",
          title: "Penyadapan Nira (Nderes)",
          desc: "Nira disadap setiap pagi dan sore dari bunga jantan pohon aren menggunakan wadah bambu (bumbung) steril."
        },
        {
          no: "02",
          title: "Penyaringan & Perebusan",
          desc: "Nira hasil sadapan disaring bersih kemudian direbus dalam wajan besar dengan kayu bakar selama 4-5 jam."
        },
        {
          no: "03",
          title: "Pengadukan & Pengentalan",
          desc: "Setelah nira pekat berwarna cokelat keemasan, adonan terus diaduk cepat hingga mengental dan siap cetak."
        },
        {
          no: "04",
          title: "Pencetakan Tradisional",
          desc: "Adonan dituangkan ke cetakan tempurung kelapa atau bambu alami hingga dingin dan mengeras sempurna."
        }
      ]
    },
    gallery: [
      {
        id: "d1-img1",
        src: "https://images.unsplash.com/photo-1616781296180-264d852a420f?q=80&w=600&auto=format&fit=crop",
        title: "Pohon Aren Alami",
        description: "Pohon aren yang tumbuh subur di wilayah hutan Dusun 1."
      },
      {
        id: "d1-img2",
        src: "https://images.unsplash.com/photo-1596701062351-df5f8adc554c?q=80&w=600&auto=format&fit=crop",
        title: "Perebusan Nira",
        description: "Perebusan nira aren menggunakan wajan besar tradisional dengan kayu bakar."
      },
      {
        id: "d1-img3",
        src: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop",
        title: "Produk Gula Aren Cetak",
        description: "Gula aren cetak tradisional siap dikemas dan dipasarkan."
      }
    ]
  },
  "dusun-2": {
    id: "dusun-2",
    name: "Dusun 2 (Kawasan Pemukiman & Konservasi)",
    lead: "Kepala Dusun 2 - Bpk. Cecep Hidayat",
    profile: "Dusun 2 merupakan wilayah pemukiman asri yang memadukan kawasan pertanian pangan warga dan wilayah konservasi air. Saat ini, Dusun 2 sedang dipersiapkan untuk menjadi sentra pengembangan pertanian organik terpadu dan kerajinan anyaman bambu khas Purwakarta.",
    message: "Konten informasi program kerja KKN, UMKM, atau wisata Dusun 2 sedang dalam proses penyusunan dan kurasi bersama perangkat desa. Halaman ini akan segera terisi data lengkap.",
    gallery: []
  },
  "dusun-3": {
    id: "dusun-3",
    name: "Dusun 3 (Kekayaan Alam & Pertanian)",
    lead: "Kepala Dusun 3 - Bpk. Maman",
    profile: "Dusun 3 dianugerahi tanah yang sangat subur, sungai mengalir jernih, serta bentang alam pertanian yang menakjubkan. Dusun ini berfokus pada sektor ketahanan pangan dan perkebunan hortikultura, menjadikannya lumbung hijau utama bagi seluruh masyarakat Pasirmunjul.",
    characteristics: [
      {
        title: "Aliran Sungai Alami",
        desc: "Sungai jernih mengalir sepanjang tahun, menjadi sumber irigasi utama persawahan warga sekaligus potensi wisata air yang asri."
      },
      {
        title: "Perkebunan Pisang",
        desc: "Kawasan kebun pisang yang membentang luas menghasilkan komoditas Pisang Tanduk dan Pisang Uli berkualitas tinggi."
      }
    ],
    narrative: "Dalam program kerja KKN mahasiswa, Dusun 3 diproyeksikan sebagai pusat eduwisata berbasis pertanian (Agro-Eduwisata). Dengan memanfaatkan keindahan sungai dan perkebunan pisang, pengembangan jalur trekking ramah lingkungan, wisata susur sungai mini, serta pengolahan limbah pelepah pisang menjadi kerajinan bernilai seni sedang direncanakan guna mendongkrak ekonomi warga secara berkelanjutan.",
    gallery: [
      {
        id: "d3-img1",
        src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600&auto=format&fit=crop",
        title: "Sungai Irigasi Pasirmunjul",
        description: "Sungai alami dengan bebatuan indah yang mengairi sawah-sawah warga."
      },
      {
        id: "d3-img2",
        src: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=600&auto=format&fit=crop",
        title: "Perkebunan Pisang Subur",
        description: "Pohon pisang tumbuh rindang menjadi andalan hasil tani warga Dusun 3."
      },
      {
        id: "d3-img3",
        src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop",
        title: "Bentang Sawah Hijau",
        description: "Sawah hijau berundak khas pegunungan di Dusun 3."
      }
    ]
  }
};

// Accordion specific summaries for each Dusun (matching user's attached images)
export const DUSUN_ACCORDION = [
  {
    id: "dusun-1",
    num: 1,
    title: "Dusun 1",
    subtitle: "Sentra Pertanian Padi & Palawija",
    icon: "🌾",
    lead: "Bpk. Jajang Nurjaman",
    profile: "Dusun 1 merupakan wilayah persawahan utama Desa Pasirmunjul. Sebagian besar warganya menggantungkan hidup dari bertani padi dan palawija, ditopang sistem irigasi dari aliran sungai setempat serta kelompok tani yang aktif menjalankan program penyuluhan pertanian.",
    batas: {
      utara: "Dusun 2",
      selatan: "Desa Cianting",
      timur: "Areal Perkebunan",
      barat: "Jalan Desa Pasirmunjul"
    }
  },
  {
    id: "dusun-2",
    num: 2,
    title: "Dusun 2",
    subtitle: "Perkebunan & Kawasan Penghijauan",
    icon: "🌲",
    lead: "Bpk. Cecep Hidayat",
    profile: "Dusun 2 berada di area perbukitan yang menjadi fokus program penghijauan dan konservasi lahan bersama Pemerintah Kabupaten Purwakarta. Warga mengembangkan tanaman produktif seperti durian, kelengkeng, dan mangga sebagai bagian dari pemulihan lahan kritis.",
    batas: {
      utara: "Dusun 3",
      selatan: "Dusun 1",
      timur: "Hutan Rakyat",
      barat: "Kecamatan Sukatani"
    }
  },
  {
    id: "dusun-3",
    num: 3,
    title: "Dusun 3",
    subtitle: "Peternakan Rakyat & Kerajinan",
    icon: "🐂",
    lead: "Bpk. Maman",
    profile: "Dusun 3 difokuskan pada sektor peternakan sapi dan kambing rakyat serta industri kreatif kerajinan anyaman bambu. Mahasiswa KKN mendampingi warga dalam diversifikasi produk olahan dan pengolahan limbah organik peternakan.",
    batas: {
      utara: "Desa Sukatani",
      selatan: "Dusun 2",
      timur: "Sungai Citarum / Bentang Alam",
      barat: "Hutan Lindung"
    }
  }
];

// News/Blog Data ("Kabar Desa")
export const BLOG_POSTS = [
  {
    id: "post-1",
    title: "Peluncuran Sistem Informasi Desa Pasirmunjul Berbasis QR Code",
    excerpt: "Inovasi baru dari Mahasiswa KKN untuk mempermudah wisatawan dan warga dalam mengakses profil dusun dan UMKM lokal secara instan lewat pemindaian smartphone.",
    content: "PURWAKARTA — Mahasiswa KKN di Desa Pasirmunjul meluncurkan inovasi Sistem Informasi Desa berbasis QR Code. Papan informasi QR Code dipasang secara strategis di tiga titik dusun: Dusun 1 (Sentra UMKM), Dusun 2, dan Dusun 3 (Kawasan Pertanian & Sungai).\n\nKepala Desa Pasirmunjul menyambut baik inovasi ini: 'Dengan adanya QR Code, tamu dari luar kota maupun investor UMKM bisa dengan cepat mengakses informasi potensi desa kami hanya dengan mengarahkan kamera ponsel.'\n\nKe depannya, sistem ini akan diintegrasikan dengan portal peta desa digital dan data inventori produk kerajinan serta kuliner dari UMKM lokal.",
    date: "8 Juli 2026",
    author: "Tim KKN Pasirmunjul 2026",
    readTime: "3 Menit Baca",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=600&auto=format&fit=crop",
    category: "KKN Update"
  },
  {
    id: "post-2",
    title: "Pelatihan Higienitas Kemasan Gula Aren UMKM Dusun 1",
    excerpt: "Untuk memperluas pangsa pasar ke luar Purwakarta, produsen gula aren lokal mendapatkan pelatihan teknik pengemasan ramah lingkungan dan pembuatan label produk.",
    content: "Dusun 1 Pasirmunjul terkenal sebagai penghasil gula aren cetak bermutu tinggi. Namun, kemasan tradisional berupa daun kelapa kering dinilai kurang tahan lama jika dikirim ke luar kota.\n\nBekerja sama dengan pelaku industri kreatif, mahasiswa KKN mendampingi warga untuk mendesain kemasan standing pouch kertas cokelat yang dilengkapi ziplock dan label edukasi kandungan gizi. Hal ini tidak hanya menambah umur simpan gula, tetapi juga memberikan kesan premium sehingga dapat dijual dengan harga yang lebih kompetitif di platform online.",
    date: "4 Juli 2026",
    author: "Tim KKN Pasirmunjul 2026",
    readTime: "4 Menit Baca",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop",
    category: "UMKM"
  },
  {
    id: "post-3",
    title: "Potensi Eduwisata Sungai dan Pertanian di Dusun 3",
    excerpt: "Keindahan sungai berbatu dan perkebunan pisang Dusun 3 dinilai layak untuk dikembangkan menjadi destinasi agro-wisata keluarga ramah anak.",
    content: "Sungai yang mengalir di sepanjang Dusun 3 Pasirmunjul memiliki air yang jernih dan aliran yang tenang. Di tepian sungai, pemandangan kebun pisang berlatar belakang bukit hijau memberikan suasana yang damai.\n\nDalam focus group discussion (FGD) warga bersama mahasiswa KKN, muncul gagasan pembangunan dermaga foto bambu, jalur bersepeda di tepi sawah, serta paket wisata memetik pisang langsung dari pohon. Rencana ini diharapkan mendapat dukungan dana desa untuk pembukaan infrastruktur akses jalan setapak tahun depan.",
    date: "30 Juni 2026",
    author: "Tim KKN Pasirmunjul 2026",
    readTime: "5 Menit Baca",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop",
    category: "Agrowisata"
  }
];
