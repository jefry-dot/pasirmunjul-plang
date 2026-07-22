export default {
  name: 'post',
  title: 'Kabar Desa (Blog)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Ringkasan Pendek',
      type: 'text',
      description: 'Muncul di halaman daftar berita.',
      validation: Rule => Rule.required().max(160)
    },
    {
      name: 'content',
      title: 'Isi Berita Lengkap',
      type: 'text',
      description: 'Gunakan enter dua kali untuk memisahkan paragraf baru.',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Tanggal Rilis',
      type: 'string',
      description: 'Contoh: 8 Juli 2026',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Penulis',
      type: 'string',
      initialValue: 'Tim KKN Pasirmunjul 2026',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Estimasi Waktu Baca',
      type: 'string',
      description: 'Contoh: 3 Menit Baca',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Kategori Berita',
      type: 'string',
      options: {
        list: [
          { title: 'KKN Update', value: 'KKN Update' },
          { title: 'UMKM', value: 'UMKM' },
          { title: 'Agrowisata', value: 'Agrowisata' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Galeri Foto Dokumentasi Tambahan (Opsional)',
      type: 'array',
      description: 'Upload foto-foto kegiatan lainnya terkait artikel berita ini. Tampil di bagian bawah artikel.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'title', title: 'Judul / Keterangan Foto', type: 'string', isHighlighted: true }
          ]
        }
      ]
    }
  ]
}
