export default {
  name: 'profilSingkat',
  title: 'Profil Singkat & Statistik',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      initialValue: 'Profil Singkat & Statistik Desa',
      validation: Rule => Rule.required()
    },
    {
      name: 'about',
      title: 'Paragraf Sekilas Profil',
      type: 'text',
      description: 'Deskripsi profil singkat desa.',
      validation: Rule => Rule.required()
    },
    {
      name: 'stats',
      title: 'Statistik Desa',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label Statistik (Contoh: Luas Wilayah)', type: 'string', validation: Rule => Rule.required() },
            { name: 'value', title: 'Nilai Keterangan (Contoh: 348,5 Ha)', type: 'string', validation: Rule => Rule.required() },
            { name: 'icon', title: 'Ikon Lucide (Map / Users / Home / ShoppingBag)', type: 'string', validation: Rule => Rule.required() }
          ]
        }
      ],
      validation: Rule => Rule.required().min(4).max(4)
    },
    {
      name: 'quickLinks',
      title: 'Akses Cepat Informasi QR Code (4 Item)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'linkKey', title: 'Target Link (dusun-1 / dusun-2 / dusun-3 / blog)', type: 'string', validation: Rule => Rule.required() },
            { name: 'label', title: 'Label Kategori (Contoh: Dusun 1 / Berita)', type: 'string', validation: Rule => Rule.required() },
            { name: 'title', title: 'Judul Card (Contoh: Sentra UMKM Gula Aren)', type: 'string', validation: Rule => Rule.required() },
            { name: 'description', title: 'Deskripsi Singkat', type: 'string', validation: Rule => Rule.required() }
          ]
        }
      ],
      validation: Rule => Rule.required().min(4).max(4)
    }
  ]
}
