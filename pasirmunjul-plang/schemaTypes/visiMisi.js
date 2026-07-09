export default {
  name: 'visiMisi',
  title: 'Visi & Misi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      initialValue: 'Visi dan Misi Desa Pasirmunjul',
      validation: Rule => Rule.required()
    },
    {
      name: 'visi',
      title: 'Visi Desa',
      type: 'text',
      description: 'Tulis pernyataan visi desa di sini. Kosongkan jika ingin mengosongkan konten.',
    },
    {
      name: 'misi',
      title: 'Daftar Misi Desa',
      description: 'Tambahkan misi-misi desa di sini. Kosongkan jika ingin mengosongkan konten.',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
