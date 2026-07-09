export default {
  name: 'dusun',
  title: 'Wilayah Dusun (Hamlet)',
  type: 'document',
  fields: [
    {
      name: 'dusunId',
      title: 'Dusun ID (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      description: 'PENTING: Slug harus sesuai dengan ID dusun (dusun-1, dusun-2, dusun-3).'
    },
    {
      name: 'name',
      title: 'Nama Dusun',
      type: 'string',
      description: 'Kosongkan jika ingin menggunakan nama bawaan lokal.'
    },
    {
      name: 'lead',
      title: 'Nama Kepala Dusun',
      type: 'string',
      description: 'Kosongkan jika ingin menggunakan data kepala dusun bawaan lokal.'
    },
    {
      name: 'subtitle',
      title: 'Sub-Judul Aktivitas',
      type: 'string',
      description: 'Kosongkan jika ingin menggunakan sub-judul bawaan lokal.'
    },
    {
      name: 'icon',
      title: 'Emoji Ikon Dusun (Contoh: 🌾)',
      type: 'string',
      description: 'Kosongkan jika ingin menggunakan emoji bawaan.'
    },
    {
      name: 'coverImage',
      title: 'Foto Cover Banner (Hero)',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto lebar penuh yang tampil di bagian paling atas halaman dusun.'
    },
    {
      name: 'profileImage',
      title: 'Foto Profil Kepala Dusun',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto potret Kepala Dusun (tampil di sebelah biografi kepemimpinan).'
    },
    {
      name: 'umkmImage',
      title: 'Foto Produk / Potensi UMKM',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto ilustrasi produk unggulan atau potensi utama wilayah.'
    },
    {
      name: 'profile',
      title: 'Paragraf Profil Singkat',
      type: 'text',
      description: 'Kosongkan jika ingin menggunakan deskripsi bawaan lokal.'
    },
    {
      name: 'whatsappContact',
      title: 'Nomor WhatsApp Pemasaran/Kadus (Format: 628xxx)',
      type: 'string',
      description: 'Kosongkan jika ingin menggunakan kontak bawaan.'
    },
    {
      name: 'batas',
      title: 'Batas Wilayah Geografis',
      type: 'object',
      fields: [
        { name: 'utara', title: 'Batas Utara', type: 'string' },
        { name: 'selatan', title: 'Batas Selatan', type: 'string' },
        { name: 'timur', title: 'Batas Timur', type: 'string' },
        { name: 'barat', title: 'Batas Barat', type: 'string' }
      ]
    },
    {
      name: 'umkm',
      title: 'Informasi UMKM Dusun (Optional)',
      type: 'object',
      fields: [
        { name: 'name', title: 'Nama Produk UMKM', type: 'string' },
        { name: 'description', title: 'Deskripsi Produk', type: 'text' },
        {
          name: 'steps',
          title: 'Langkah Produksi',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'no', title: 'Nomor Langkah (Contoh: 01)', type: 'string' },
                { name: 'title', title: 'Judul Langkah', type: 'string' },
                { name: 'desc', title: 'Keterangan Langkah', type: 'text' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'characteristics',
      title: 'Keunikan/Potensi Alam (Optional)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Nama Potensi', type: 'string' },
            { name: 'desc', title: 'Penjelasan Potensi', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'narrative',
      title: 'Narasi/Program Kerja KKN',
      type: 'text',
      description: 'Kosongkan jika ingin menggunakan catatan KKN bawaan lokal.'
    },
    {
      name: 'gallery',
      title: 'Galeri Foto Kegiatan / Potensi Tambahan',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'title', title: 'Judul Foto', type: 'string', isHighlighted: true },
            { name: 'description', title: 'Deskripsi Foto', type: 'string', isHighlighted: true }
          ]
        }
      ]
    }
  ]
}
