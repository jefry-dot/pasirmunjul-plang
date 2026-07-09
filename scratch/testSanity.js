import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vghrh64q',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-07-08',
});

console.log("Menghubungkan ke Sanity...");
client.fetch(`*[_type == "post"]`)
  .then((data) => {
    console.log("DATA BERHASIL DIAMBIL!");
    console.log("Jumlah dokumen post:", data.length);
    console.log("Daftar dokumen:", JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error("ERROR SAAT FETCH:", err);
  });
