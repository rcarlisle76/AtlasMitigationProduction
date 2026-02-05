import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 'rfrlcjr6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // We'll need a token for writes
});

// Map of gallery items to their images
const galleryItemImages = [
  {
    titleMatch: 'Water Damage',
    beforeImage: './public/gallery/before-water-damage-1.jpg',
    afterImage: './public/gallery/after-water-damage-1.jpg',
  },
  {
    titleMatch: 'Fire Damage',
    beforeImage: './public/gallery/before-fire-damage-2.jpg',
    afterImage: './public/gallery/after-fire-damage-2.jpg',
  },
  {
    titleMatch: 'Mold',
    beforeImage: './public/gallery/before-mold-3.jpg',
    afterImage: './public/gallery/after-mold-3.jpg',
  },
  {
    titleMatch: 'Storm Damage',
    beforeImage: './public/gallery/before-storm-damage-4.jpg',
    afterImage: './public/gallery/after-storm-damage-4.jpg',
  },
];

async function uploadImage(filePath) {
  const imageBuffer = fs.readFileSync(filePath);
  const filename = path.basename(filePath);

  const asset = await client.assets.upload('image', imageBuffer, {
    filename,
  });

  console.log(`Uploaded: ${filename} -> ${asset._id}`);
  return asset;
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    console.log('No SANITY_API_TOKEN found.');
    console.log('\nTo upload images to Sanity, you need an API token with write access.');
    console.log('1. Go to https://www.sanity.io/manage/project/rfrlcjr6/settings/api');
    console.log('2. Create a new token with "Editor" permissions');
    console.log('3. Run: SANITY_API_TOKEN=your_token_here node scripts/upload-images-to-sanity.mjs');
    console.log('\nAlternatively, you can upload images manually through Sanity Studio at:');
    console.log('http://localhost:3000/studio');
    console.log('\nThe sample images are located in: public/gallery/');
    return;
  }

  console.log('Fetching gallery items from Sanity...\n');

  // Fetch all gallery items
  const galleryItems = await client.fetch('*[_type == "galleryItem"]{_id, title}');
  console.log(`Found ${galleryItems.length} gallery items\n`);

  for (const mapping of galleryItemImages) {
    const item = galleryItems.find(g => g.title?.includes(mapping.titleMatch));

    if (!item) {
      console.log(`No gallery item found matching: ${mapping.titleMatch}`);
      continue;
    }

    console.log(`\nUpdating: ${item.title}`);

    // Upload images
    const beforeAsset = await uploadImage(mapping.beforeImage);
    const afterAsset = await uploadImage(mapping.afterImage);

    // Update the gallery item
    await client
      .patch(item._id)
      .set({
        beforeImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: beforeAsset._id,
          },
        },
        afterImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: afterAsset._id,
          },
        },
      })
      .commit();

    console.log(`Updated gallery item: ${item.title}`);
  }

  console.log('\nDone! All images uploaded and linked to gallery items.');
}

main().catch(console.error);
