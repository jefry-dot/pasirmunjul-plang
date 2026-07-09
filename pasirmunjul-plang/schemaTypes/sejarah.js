export default {
  name: 'sejarah',
  title: 'Sejarah Desa',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      initialValue: 'Sejarah Desa Pasirmunjul',
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Gambar Cover Atas / Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Gambar banner lebar atau logo yang akan ditampilkan di bagian atas teks sejarah desa.'
    },
    {
      name: 'content',
      title: 'Teks Sejarah Desa',
      type: 'text',
      description: 'Gunakan dua baris baru (double enter) untuk memisahkan antar paragraf.',
      validation: Rule => Rule.required()
    }
  ]
}
