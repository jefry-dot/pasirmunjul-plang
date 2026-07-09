export default {
  name: 'monografi',
  title: 'Monografi Desa',
  type: 'document',
  fieldsets: [
    { name: 'generalInfo', title: 'Informasi Umum Wilayah' },
    { name: 'demographics', title: 'Demografi & Penduduk' },
    { name: 'jobs', title: 'Mata Pencaharian Utama' }
  ],
  fields: [
    {
      name: 'title',
      title: 'Judul Halaman',
      type: 'string',
      initialValue: 'Monografi Desa Pasirmunjul',
      validation: Rule => Rule.required()
    },
    // Informasi Umum
    { name: 'provinsi', title: 'Provinsi', type: 'string', fieldset: 'generalInfo', initialValue: 'Jawa Barat' },
    { name: 'kabupaten', title: 'Kabupaten', type: 'string', fieldset: 'generalInfo', initialValue: 'Purwakarta' },
    { name: 'kecamatan', title: 'Kecamatan', type: 'string', fieldset: 'generalInfo', initialValue: 'Sukatani' },
    { name: 'luasWilayah', title: 'Luas Wilayah', type: 'string', fieldset: 'generalInfo', initialValue: '348,5 Hektar (Ha)' },
    { name: 'batasUtara', title: 'Batas Wilayah Utara', type: 'string', fieldset: 'generalInfo', initialValue: 'Desa Sukatani' },
    { name: 'batasSelatan', title: 'Batas Wilayah Selatan', type: 'string', fieldset: 'generalInfo', initialValue: 'Desa Cilalawi' },
    { name: 'batasTimur', title: 'Batas Wilayah Timur', type: 'string', fieldset: 'generalInfo', initialValue: 'Desa Tajursindang' },
    { name: 'batasBarat', title: 'Batas Wilayah Barat', type: 'string', fieldset: 'generalInfo', initialValue: 'Desa Panyindangan' },
    
    // Demografi
    { name: 'totalPenduduk', title: 'Jumlah Total Penduduk', type: 'string', fieldset: 'demographics', initialValue: '3.420 Jiwa' },
    { name: 'lakiLaki', title: 'Jumlah Laki-laki', type: 'string', fieldset: 'demographics', initialValue: '1.745 Jiwa' },
    { name: 'perempuan', title: 'Jumlah Perempuan', type: 'string', fieldset: 'demographics', initialValue: '1.675 Jiwa' },
    { name: 'jumlahKK', title: 'Jumlah Kepala Keluarga (KK)', type: 'string', fieldset: 'demographics', initialValue: '985 KK' },

    // Pekerjaan
    { name: 'petani', title: 'Petani & Buruh Tani', type: 'string', fieldset: 'jobs', initialValue: '1.240 Orang' },
    { name: 'umkm', title: 'Pelaku UMKM / Wiraswasta', type: 'string', fieldset: 'jobs', initialValue: '185 Orang' },
    { name: 'karyawan', title: 'Karyawan Swasta', type: 'string', fieldset: 'jobs', initialValue: '320 Orang' },
    { name: 'pns', title: 'PNS / TNI / POLRI', type: 'string', fieldset: 'jobs', initialValue: '45 Orang' }
  ]
}
