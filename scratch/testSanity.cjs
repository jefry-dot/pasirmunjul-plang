const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'vghrh64q',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-07-08',
});

const query = `*[_type == "post"] | order(date desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  date,
  author,
  readTime,
  "image": image.asset->url,
  category
}`;

console.log("Running App.jsx exact query...");
client.fetch(query)
  .then((data) => {
    console.log("QUERY SUCCESS!");
    console.log("Returned data:", JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error("QUERY ERROR:", err);
  });
