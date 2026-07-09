export default {
  name: 'villageInfo',
  title: 'Informasi Umum Desa',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Desa',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'district',
      title: 'Kecamatan',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'regency',
      title: 'Kabupaten',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'tagline',
      title: 'Tagline Banner',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Alamat Kantor Desa',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email Kantor Desa',
      type: 'string',
      initialValue: 'info@pasirmunjul.desa.id',
      validation: Rule => Rule.required()
    },
    {
      name: 'phone',
      title: 'Nomor Telepon Kantor Desa',
      type: 'string',
      initialValue: '+62 812-3456-7890',
      validation: Rule => Rule.required()
    },
    {
      name: 'footerDescription',
      title: 'Deskripsi Singkat Footer',
      type: 'text',
      initialValue: 'Sistem Informasi Desa Berbasis QR Code. Memudahkan warga dan pengunjung untuk mengakses potensi pertanian, UMKM, dan kabar terkini langsung lewat pemindaian ponsel.',
      validation: Rule => Rule.required()
    },
    {
      name: 'developerText',
      title: 'Teks Pembuat Website (Footer)',
      type: 'string',
      initialValue: 'Dikembangkan oleh Tim Mahasiswa KKN Sukatani Purwakarta 2026.',
      validation: Rule => Rule.required()
    },
    {
      name: 'copyrightText',
      title: 'Teks Hak Cipta',
      type: 'string',
      initialValue: '© 2026 Pemerintah Desa Pasirmunjul. All rights reserved.',
      validation: Rule => Rule.required()
    },
    {
      name: 'googleMapsUrl',
      title: 'Embed Google Maps URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ]
}
