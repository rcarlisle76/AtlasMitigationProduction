import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'prkqtff7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Sample blog posts
const blogPosts = [
  {
    _type: 'blogPost',
    title: '5 Signs You Have Hidden Water Damage in Your Home',
    slug: { _type: 'slug', current: 'signs-of-hidden-water-damage' },
    author: 'Mike Johnson',
    publishedAt: '2024-01-15',
    excerpt: 'Water damage isn\'t always obvious. Learn the subtle signs that could indicate hidden water damage in your walls, floors, or ceiling before it becomes a major problem.',
    category: 'water-damage',
    content: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Water damage can lurk behind walls and under floors for weeks or even months before becoming visible. By the time you notice obvious signs, significant damage may have already occurred. Here are five warning signs to watch for.' }]
      },
      {
        _type: 'block',
        _key: 'h1',
        style: 'h2',
        children: [{ _type: 'span', _key: 's2', text: '1. Musty Odors' }]
      },
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's3', text: 'A persistent musty smell, especially in certain areas of your home, often indicates hidden moisture and potential mold growth. Don\'t ignore these odors – they\'re your nose\'s way of warning you.' }]
      },
      {
        _type: 'block',
        _key: 'h2',
        style: 'h2',
        children: [{ _type: 'span', _key: 's4', text: '2. Unexplained Increase in Water Bills' }]
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'normal',
        children: [{ _type: 'span', _key: 's5', text: 'If your water bill has increased without a change in usage habits, you may have a hidden leak. Even small leaks can waste thousands of gallons over time.' }]
      },
    ],
  },
  {
    _type: 'blogPost',
    title: 'What to Do in the First 24 Hours After a House Fire',
    slug: { _type: 'slug', current: 'first-24-hours-after-house-fire' },
    author: 'Sarah Williams',
    publishedAt: '2024-01-22',
    excerpt: 'The actions you take immediately after a fire can significantly impact your recovery. Here\'s a step-by-step guide for the critical first 24 hours.',
    category: 'fire-damage',
    content: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Experiencing a house fire is traumatic. Knowing what steps to take in the immediate aftermath can help you protect your property and start the recovery process effectively.' }]
      },
      {
        _type: 'block',
        _key: 'h1',
        style: 'h2',
        children: [{ _type: 'span', _key: 's2', text: 'Safety First' }]
      },
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's3', text: 'Do not re-enter your home until the fire department has declared it safe. Even after flames are extinguished, structural damage and toxic fumes can pose serious risks.' }]
      },
    ],
  },
  {
    _type: 'blogPost',
    title: 'Mold Prevention Tips for Georgia Homeowners',
    slug: { _type: 'slug', current: 'mold-prevention-tips-georgia' },
    author: 'Dr. Emily Chen',
    publishedAt: '2024-02-01',
    excerpt: 'Georgia\'s humid climate creates perfect conditions for mold growth. Learn how to protect your home with these proven prevention strategies.',
    category: 'mold',
    content: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'With average humidity levels of 70% or higher, Georgia homes are particularly susceptible to mold growth. Prevention is always easier and less expensive than remediation.' }]
      },
      {
        _type: 'block',
        _key: 'h1',
        style: 'h2',
        children: [{ _type: 'span', _key: 's2', text: 'Control Indoor Humidity' }]
      },
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's3', text: 'Keep indoor humidity below 60% using dehumidifiers and proper ventilation. Consider installing a whole-house dehumidifier for consistent control.' }]
      },
    ],
  },
  {
    _type: 'blogPost',
    title: 'How to File a Successful Water Damage Insurance Claim',
    slug: { _type: 'slug', current: 'water-damage-insurance-claim-guide' },
    author: 'James Thompson',
    publishedAt: '2024-02-10',
    excerpt: 'Navigate the insurance claims process like a pro. Our guide helps you document damage properly and maximize your claim settlement.',
    category: 'insurance',
    content: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Filing an insurance claim for water damage can be overwhelming. With proper documentation and the right approach, you can ensure a smoother process and fair settlement.' }]
      },
    ],
  },
  {
    _type: 'blogPost',
    title: 'Storm Season Preparation: Protecting Your Atlanta Home',
    slug: { _type: 'slug', current: 'storm-season-preparation-atlanta' },
    author: 'Mike Johnson',
    publishedAt: '2024-02-18',
    excerpt: 'Atlanta\'s storm season can bring severe weather. Prepare your home now to minimize potential damage from high winds, heavy rain, and flooding.',
    category: 'prevention',
    content: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1', text: 'Spring and summer in Atlanta bring beautiful weather – and the potential for severe storms. Taking preventive measures now can save you thousands in damage repairs later.' }]
      },
    ],
  },
]

// Sample testimonials
const testimonials = [
  {
    _type: 'testimonial',
    customerName: 'Robert & Lisa Martinez',
    rating: 5,
    quote: 'Atlas Mitigation saved our home after a pipe burst flooded our entire basement. They arrived within an hour of our call and worked through the night to extract the water. Their team was professional, compassionate, and incredibly efficient. Our basement looks better than it did before the flood!',
    date: '2024-01-10',
    featured: true,
    verified: true,
    source: 'google',
  },
  {
    _type: 'testimonial',
    customerName: 'Jennifer Thompson',
    rating: 5,
    quote: 'After a kitchen fire, I was devastated. The Atlas team not only restored my kitchen but helped me navigate the insurance process. They communicated every step of the way and finished ahead of schedule. I can\'t recommend them enough!',
    date: '2024-01-18',
    featured: true,
    verified: true,
    source: 'google',
  },
  {
    _type: 'testimonial',
    customerName: 'David Chen',
    rating: 5,
    quote: 'We discovered mold in our crawl space and panicked. Atlas Mitigation came out the same day, assessed the situation, and had a remediation plan ready within hours. Their technicians were thorough and explained everything. Mold-free for 6 months now!',
    date: '2024-01-25',
    featured: true,
    verified: true,
    source: 'yelp',
  },
  {
    _type: 'testimonial',
    customerName: 'Sarah Williams',
    rating: 5,
    quote: 'When a storm damaged our roof and water started pouring in, Atlas was there within 45 minutes. They tarped the roof, extracted the water, and prevented what could have been catastrophic damage. True professionals!',
    date: '2024-02-02',
    featured: true,
    verified: true,
    source: 'google',
  },
  {
    _type: 'testimonial',
    customerName: 'Michael & Karen O\'Brien',
    rating: 5,
    quote: 'Outstanding service from start to finish. Our water heater leaked over a weekend while we were away. Atlas handled everything - water extraction, drying, and repairs. They even worked directly with our insurance company. Five stars!',
    date: '2024-02-08',
    featured: false,
    verified: true,
    source: 'google',
  },
  {
    _type: 'testimonial',
    customerName: 'Amanda Foster',
    rating: 5,
    quote: 'I own a small business in Marietta, and when we had smoke damage from a nearby fire, Atlas prioritized getting us back open. They worked nights and weekends to minimize our downtime. Professional, fast, and fairly priced.',
    date: '2024-02-15',
    featured: true,
    verified: true,
    source: 'yelp',
  },
  {
    _type: 'testimonial',
    customerName: 'Thomas Wright',
    rating: 5,
    quote: 'The team at Atlas Mitigation is top-notch. They restored our historic Roswell home after water damage while preserving all the original woodwork. Their attention to detail is unmatched.',
    date: '2024-02-20',
    featured: false,
    verified: true,
    source: 'google',
  },
  {
    _type: 'testimonial',
    customerName: 'Patricia Gonzalez',
    rating: 5,
    quote: 'Fast response, fair pricing, and excellent work. Atlas handled our flood damage with care and professionalism. They kept us informed throughout the entire process. Highly recommend!',
    date: '2024-02-25',
    featured: false,
    verified: true,
    source: 'google',
  },
]

// Gallery items with image uploads
const galleryItems = [
  {
    title: 'Water Damage Restoration - Flooded Basement in Marietta',
    description: 'Complete basement restoration after a pipe burst caused severe flooding. Our team extracted over 2,000 gallons of water, dried the structure, and restored all finishes including custom built-in shelving.',
    propertyType: 'high-end-residential',
    featured: true,
    completionDate: '2024-01-15',
    stats: {
      duration: '5 days',
      area: '1,200 sq ft',
      timeToComplete: '45 min response',
    },
    beforeImage: './public/gallery/before-water-damage-1.jpg',
    afterImage: './public/gallery/after-water-damage-1.jpg',
    beforeAlt: 'Flooded basement with standing water and damaged drywall',
    afterAlt: 'Fully restored basement with new drywall and flooring',
  },
  {
    title: 'Fire Damage Restoration - Kitchen Fire in Kennesaw',
    description: 'Full kitchen restoration after an electrical fire. Included smoke damage cleanup throughout the home, complete kitchen rebuild with custom cabinets, and upgraded appliances.',
    propertyType: 'high-end-residential',
    featured: true,
    completionDate: '2024-01-28',
    stats: {
      duration: '3 weeks',
      area: '400 sq ft',
      timeToComplete: 'Complete rebuild',
    },
    beforeImage: './public/gallery/before-fire-damage-2.jpg',
    afterImage: './public/gallery/after-fire-damage-2.jpg',
    beforeAlt: 'Kitchen with severe fire and smoke damage, charred cabinets',
    afterAlt: 'Fully restored kitchen with new cabinets and appliances',
  },
  {
    title: 'Mold Remediation - Bathroom Mold in Roswell',
    description: 'Extensive mold remediation in master bathroom caused by a hidden shower pan leak. Removed all contaminated materials, treated structure, and rebuilt with mold-resistant materials.',
    propertyType: 'high-end-residential',
    featured: true,
    completionDate: '2024-02-05',
    stats: {
      duration: '4 days',
      area: '150 sq ft',
      timeToComplete: 'Passed air quality test',
    },
    beforeImage: './public/gallery/before-mold-3.jpg',
    afterImage: './public/gallery/after-mold-3.jpg',
    beforeAlt: 'Bathroom walls with visible black mold growth',
    afterAlt: 'Clean, mold-free bathroom with new drywall and paint',
  },
  {
    title: 'Storm Damage Repair - Roof and Ceiling in Canton',
    description: 'Emergency response after severe storm caused roof damage and water intrusion. Provided same-day tarping, water extraction, and complete restoration of damaged ceilings and walls.',
    propertyType: 'high-end-residential',
    featured: true,
    completionDate: '2024-02-12',
    stats: {
      duration: '8 days',
      area: '800 sq ft',
      timeToComplete: 'Same-day emergency tarp',
    },
    beforeImage: './public/gallery/before-storm-damage-4.jpg',
    afterImage: './public/gallery/after-storm-damage-4.jpg',
    beforeAlt: 'Living room with collapsed ceiling from storm damage',
    afterAlt: 'Beautifully restored living room with new ceiling',
  },
]

async function uploadImage(filePath, filename) {
  const imageBuffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', imageBuffer, { filename })
  console.log(`  Uploaded: ${filename}`)
  return asset
}

async function seedData() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('Error: SANITY_API_TOKEN environment variable is required')
    console.log('\nTo get a token:')
    console.log('1. Go to https://www.sanity.io/manage/project/prkqtff7/settings/api')
    console.log('2. Create a new token with "Editor" permissions')
    console.log('3. Run: SANITY_API_TOKEN=your_token node scripts/seed-sanity.mjs')
    process.exit(1)
  }

  console.log('🌱 Seeding Sanity CMS...\n')

  // Seed blog posts
  console.log('📝 Creating blog posts...')
  for (const post of blogPosts) {
    const result = await client.create(post)
    console.log(`  Created: ${post.title}`)
  }
  console.log(`  ✓ Created ${blogPosts.length} blog posts\n`)

  // Seed testimonials
  console.log('💬 Creating testimonials...')
  for (const testimonial of testimonials) {
    const result = await client.create(testimonial)
    console.log(`  Created: ${testimonial.customerName}`)
  }
  console.log(`  ✓ Created ${testimonials.length} testimonials\n`)

  // Seed gallery items with images
  console.log('🖼️  Creating gallery items with images...')
  for (const item of galleryItems) {
    // Upload before image
    const beforeAsset = await uploadImage(item.beforeImage, path.basename(item.beforeImage))
    // Upload after image
    const afterAsset = await uploadImage(item.afterImage, path.basename(item.afterImage))

    // Create gallery item
    const galleryItem = {
      _type: 'galleryItem',
      title: item.title,
      description: item.description,
      propertyType: item.propertyType,
      featured: item.featured,
      completionDate: item.completionDate,
      stats: item.stats,
      beforeImage: {
        _type: 'image',
        alt: item.beforeAlt,
        asset: { _type: 'reference', _ref: beforeAsset._id },
      },
      afterImage: {
        _type: 'image',
        alt: item.afterAlt,
        asset: { _type: 'reference', _ref: afterAsset._id },
      },
    }

    await client.create(galleryItem)
    console.log(`  Created: ${item.title}`)
  }
  console.log(`  ✓ Created ${galleryItems.length} gallery items\n`)

  console.log('✅ Seeding complete!')
  console.log('\nYour CMS now has:')
  console.log(`  - ${blogPosts.length} blog posts`)
  console.log(`  - ${testimonials.length} testimonials`)
  console.log(`  - ${galleryItems.length} gallery items with before/after photos`)
}

seedData().catch(console.error)
