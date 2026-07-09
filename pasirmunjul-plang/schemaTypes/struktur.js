export default {
  name: 'struktur',
  title: 'Struktur Organisasi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      initialValue: 'Struktur Organisasi Pemerintahan Desa Pasirmunjul',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Keterangan Kaki (Footer Text)',
      type: 'text',
      initialValue: 'Struktur Pemerintahan Periode Jabatan Aktif Desa Pasirmunjul.',
      validation: Rule => Rule.required()
    },
    {
      name: 'officials',
      title: 'Daftar Perangkat Desa (Urut)',
      description: 'Tambahkan dan urutkan aparat desa di sini. Urutan di list ini akan menentukan urutan tampil dari atas ke bawah.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'role', title: 'Jabatan (Contoh: Kepala Desa / Sekretaris Desa)', type: 'string', validation: Rule => Rule.required() },
            { name: 'name', title: 'Nama Lengkap Pejabat', type: 'string', validation: Rule => Rule.required() }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ]
}
