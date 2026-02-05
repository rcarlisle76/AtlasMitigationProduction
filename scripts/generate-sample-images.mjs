import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outputDir = './public/gallery';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image configurations for different damage types
const imageConfigs = [
  {
    name: 'water-damage',
    before: { bg: '#4a6fa5', overlay: '#2d4263', text: 'Water Damage' },
    after: { bg: '#7ec8e3', overlay: '#b8e0f0', text: 'Restored' }
  },
  {
    name: 'fire-damage',
    before: { bg: '#8b4513', overlay: '#5c2e0a', text: 'Fire Damage' },
    after: { bg: '#f5deb3', overlay: '#faebd7', text: 'Restored' }
  },
  {
    name: 'mold',
    before: { bg: '#3d5c3d', overlay: '#2a3f2a', text: 'Mold Damage' },
    after: { bg: '#98d1a6', overlay: '#c8e6c9', text: 'Remediated' }
  },
  {
    name: 'storm-damage',
    before: { bg: '#4a4a4a', overlay: '#2d2d2d', text: 'Storm Damage' },
    after: { bg: '#a8c8dc', overlay: '#d4e8f2', text: 'Repaired' }
  }
];

async function createImage(config, type, index) {
  const width = 800;
  const height = 600;
  const settings = type === 'before' ? config.before : config.after;

  // Create SVG with text overlay
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${settings.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${settings.overlay};stop-opacity:1" />
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" opacity="0.9">${settings.text}</text>
      <text x="50%" y="58%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.7">${type === 'before' ? 'Before Restoration' : 'After Restoration'}</text>
      <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" opacity="0.5">Sample Image ${index}</text>
    </svg>
  `;

  const filename = `${type}-${config.name}-${index}.jpg`;
  const filepath = path.join(outputDir, filename);

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 85 })
    .toFile(filepath);

  console.log(`Created: ${filename}`);
  return filename;
}

async function main() {
  console.log('Generating sample gallery images...\n');

  // Generate 4 sets of images (one for each gallery item we created)
  for (let i = 1; i <= 4; i++) {
    const config = imageConfigs[(i - 1) % imageConfigs.length];
    await createImage(config, 'before', i);
    await createImage(config, 'after', i);
  }

  console.log('\nDone! Images saved to public/gallery/');
}

main().catch(console.error);
