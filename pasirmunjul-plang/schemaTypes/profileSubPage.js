export default {
  name: 'profileSubPage',
  title: 'Sub-Halaman Profil Desa',
  type: 'document',
  fields: [
    {
      name: 'pageId',
      title: 'Page ID (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'sejarahContent',
      title: 'Konten Sejarah Desa (Hanya diisi jika halaman Sejarah)',
      type: 'text',
      description: 'Gunakan enter dua kali untuk memisahkan paragraf baru.'
    },
    {
      name: 'visiMisi',
      title: 'Konten Visi Misi (Hanya diisi jika halaman Visi Misi)',
      type: 'object',
      fields: [
        { name: 'visi', title: 'Visi Desa', type: 'text' },
        { name: 'misi', title: 'Daftar Misi Desa', type: 'array', of: [{ type: 'string' }] }
      ]
    },
    {
      name: 'monografi',
      title: 'Konten Monografi (Hanya diisi jika halaman Monografi)',
      type: 'object',
      fields: [
        {
          name: 'general',
          title: 'Informasi Umum Wilayah',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Parameter', type: 'string' },
                { name: 'value', title: 'Nilai Keterangan', type: 'string' }
              ]
            }
          ]
        },
        {
          name: 'population',
          title: 'Demografi & Penduduk',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'category', title: 'Kategori', type: 'string' },
                { name: 'value', title: 'Nilai Keterangan', type: 'string' }
              ]
            }
          ]
        },
        {
          name: 'livelihoods',
          title: 'Mata Pencaharian Utama',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'job', title: 'Pekerjaan', type: 'string' },
                { name: 'count', title: 'Jumlah Orang', type: 'string' }
              ]
            }
          ]
        }
      ]
    }
  ]
}
