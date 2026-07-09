import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'vghrh64q',
  dataset: 'production',
  useCdn: false, // set to false for real-time update responsiveness during testing
  apiVersion: '2026-07-08',
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
