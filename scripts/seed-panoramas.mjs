import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Load .env.local
const envFile = fs.readFileSync('.env.local', 'utf8')
for (const line of envFile.split('\n')) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('#')) continue
  const eqIdx = trimmed.indexOf('=')
  if (eqIdx > 0) {
    const key = trimmed.slice(0, eqIdx)
    const value = trimmed.slice(eqIdx + 1)
    if (!process.env[key]) process.env[key] = value
  }
}

const client = createClient({
  projectId: 'prkqtff7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const panoramaItems = [
  {
    title: 'Water Damage Restoration — Containment & Drying Setup',
    caption: 'Water Damage Restoration In Progress — Containment & Drying Equipment Setup',
    description: '360° view of an active water damage restoration showing containment barriers and industrial drying equipment deployed throughout the affected area.',
    featured: true,
    captureDate: '2024-03-15',
  },
  {
    title: 'Basement Flood Recovery — Equipment Placement',
    caption: 'Basement Flood Recovery — Industrial Dehumidifiers & Air Movers In Position',
    description: 'Full panoramic view of basement flood recovery showing strategic placement of dehumidifiers and air movers for optimal drying.',
    featured: true,
    captureDate: '2024-02-20',
  },
  {
    title: 'Mold Remediation — Containment Zone',
    caption: 'Mold Remediation Containment — Negative Air Pressure & HEPA Filtration',
    description: '360° tour of a mold remediation project with full containment barriers, negative air pressure setup, and HEPA filtration equipment.',
    featured: false,
    captureDate: '2024-01-28',
  },
  {
    title: 'Fire Damage Assessment — Structural Review',
    caption: 'Post-Fire Structural Assessment — Documenting Damage Extent',
    description: 'Immersive view of a fire-damaged property during the initial assessment phase, documenting the extent of structural and smoke damage.',
    featured: true,
    captureDate: '2024-03-05',
  },
  {
    title: 'Storm Damage Response — Emergency Tarping',
    caption: 'Storm Damage Emergency Response — Temporary Roof Protection & Water Extraction',
    description: '360° documentation of emergency storm damage response including temporary roof protection and water extraction operations.',
    featured: false,
    captureDate: '2024-02-10',
  },
  {
    title: 'Commercial Water Extraction — Retail Space',
    caption: 'Commercial Water Extraction — Overnight Restoration of Retail Space',
    description: 'Panoramic view of a commercial water extraction project in a retail space, showing large-scale drying equipment deployed for overnight restoration.',
    featured: false,
    captureDate: '2024-01-15',
  },
]

async function uploadImage(filePath, filename) {
  const imageBuffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', imageBuffer, { filename })
  console.log(`  Uploaded: ${filename}`)
  return asset
}

async function seedPanoramas() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('Error: SANITY_API_TOKEN environment variable is required')
    console.log('\nTo get a token:')
    console.log('1. Go to https://www.sanity.io/manage/project/prkqtff7/settings/api')
    console.log('2. Create a new token with "Editor" permissions')
    console.log('3. Run: SANITY_API_TOKEN=your_token node scripts/seed-panoramas.mjs')
    process.exit(1)
  }

  console.log('🌱 Seeding 360° Panorama Images...\n')

  // Upload the demo 360° photo once — all documents will reference it
  const imagePath = './public/gallery/360-sample.jpg'
  if (!fs.existsSync(imagePath)) {
    console.error(`Error: Demo image not found at ${imagePath}`)
    console.log('Make sure you run this script from the project root.')
    process.exit(1)
  }

  console.log('📸 Uploading 360° demo image...')
  const panoramaAsset = await uploadImage(imagePath, '360-sample.jpg')
  console.log('')

  console.log('🔄 Creating panorama documents...')
  for (const item of panoramaItems) {
    const doc = {
      _type: 'panoramaImage',
      title: item.title,
      caption: item.caption,
      description: item.description,
      featured: item.featured,
      captureDate: item.captureDate,
      panoramaImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: panoramaAsset._id },
      },
      // No custom thumbnail — Sanity will auto-crop the panorama for previews
    }

    await client.create(doc)
    console.log(`  Created: ${item.title}`)
  }

  console.log(`\n✅ Seeding complete!`)
  console.log(`  - ${panoramaItems.length} panorama images created`)
  console.log(`  - All using the shared 360° demo photo`)
  console.log('\nView them in Sanity Studio at /studio under "360° Tours"')
}

seedPanoramas().catch(console.error)
