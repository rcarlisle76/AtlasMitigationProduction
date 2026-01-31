export interface GalleryProject {
  id: string
  slug: string
  title: string
  description: string
  serviceType:
    | "water-damage"
    | "fire-damage"
    | "mold"
    | "smoke-damage"
    | "storm-damage"
  propertyType: "residential" | "commercial" | "luxury"
  location: string
  beforeImage: string
  afterImage: string
  completionDate: string
  duration: string
  stats: {
    label: string
    value: string
  }[]
}

export const galleryProjects: GalleryProject[] = [
  {
    id: "1",
    slug: "acworth-water-damage-basement",
    title: "Acworth Basement Water Extraction",
    description:
      "Complete basement restoration after pipe burst. Removed standing water, dried structure, and restored finished basement including custom built-ins.",
    serviceType: "water-damage",
    propertyType: "residential",
    location: "Acworth, GA",
    beforeImage: "/gallery/before-1.jpg",
    afterImage: "/gallery/after-1.jpg",
    completionDate: "2024-01-15",
    duration: "5 days",
    stats: [
      { label: "Water Removed", value: "2,400 gal" },
      { label: "Area Affected", value: "1,200 sq ft" },
      { label: "Response Time", value: "45 min" },
    ],
  },
  {
    id: "2",
    slug: "marietta-fire-damage-kitchen",
    title: "Marietta Kitchen Fire Restoration",
    description:
      "Full kitchen restoration after electrical fire. Smoke damage cleanup throughout home, complete kitchen rebuild with upgraded finishes.",
    serviceType: "fire-damage",
    propertyType: "luxury",
    location: "East Cobb, Marietta",
    beforeImage: "/gallery/before-2.jpg",
    afterImage: "/gallery/after-2.jpg",
    completionDate: "2024-02-10",
    duration: "3 weeks",
    stats: [
      { label: "Rooms Restored", value: "6" },
      { label: "Smoke Cleanup", value: "3,500 sq ft" },
      { label: "Custom Cabinets", value: "Yes" },
    ],
  },
  {
    id: "3",
    slug: "kennesaw-mold-remediation",
    title: "Kennesaw Crawl Space Mold Removal",
    description:
      "Extensive mold remediation in crawl space caused by drainage issue. Removed contaminated materials, treated structure, installed vapor barrier.",
    serviceType: "mold",
    propertyType: "residential",
    location: "Kennesaw, GA",
    beforeImage: "/gallery/before-3.jpg",
    afterImage: "/gallery/after-3.jpg",
    completionDate: "2024-01-28",
    duration: "4 days",
    stats: [
      { label: "Mold Area", value: "800 sq ft" },
      { label: "Materials Removed", value: "Yes" },
      { label: "Air Quality Test", value: "Passed" },
    ],
  },
  {
    id: "4",
    slug: "roswell-luxury-water-damage",
    title: "Roswell Historic Home Water Damage",
    description:
      "Careful restoration of 1920s historic home after roof leak. Preserved original hardwood floors and custom millwork during water damage restoration.",
    serviceType: "water-damage",
    propertyType: "luxury",
    location: "Historic Roswell, GA",
    beforeImage: "/gallery/before-4.jpg",
    afterImage: "/gallery/after-4.jpg",
    completionDate: "2024-03-05",
    duration: "10 days",
    stats: [
      { label: "Hardwood Saved", value: "1,800 sq ft" },
      { label: "Historic Features", value: "Preserved" },
      { label: "Ceiling Repairs", value: "3 rooms" },
    ],
  },
  {
    id: "5",
    slug: "marietta-commercial-fire",
    title: "Marietta Office Fire Restoration",
    description:
      "Complete restoration of commercial office space after electrical fire. Minimized business interruption with after-hours work schedule.",
    serviceType: "fire-damage",
    propertyType: "commercial",
    location: "Marietta, GA",
    beforeImage: "/gallery/before-5.jpg",
    afterImage: "/gallery/after-5.jpg",
    completionDate: "2024-02-22",
    duration: "2 weeks",
    stats: [
      { label: "Office Space", value: "5,000 sq ft" },
      { label: "Downtime", value: "3 days" },
      { label: "After-Hours Work", value: "80%" },
    ],
  },
  {
    id: "6",
    slug: "acworth-storm-damage",
    title: "Acworth Storm Damage Recovery",
    description:
      "Emergency response after severe storm caused roof damage and water intrusion. Tarped roof, extracted water, and completed full restoration.",
    serviceType: "storm-damage",
    propertyType: "residential",
    location: "Lake Acworth, GA",
    beforeImage: "/gallery/before-6.jpg",
    afterImage: "/gallery/after-6.jpg",
    completionDate: "2024-03-18",
    duration: "12 days",
    stats: [
      { label: "Roof Area", value: "2,200 sq ft" },
      { label: "Water Damage", value: "4 rooms" },
      { label: "Emergency Tarp", value: "Same day" },
    ],
  },
  {
    id: "7",
    slug: "woodstock-smoke-damage",
    title: "Woodstock Smoke Damage Cleanup",
    description:
      "Comprehensive smoke damage cleanup after garage fire spread smoke throughout home. Complete odor elimination using ozone treatment.",
    serviceType: "smoke-damage",
    propertyType: "residential",
    location: "Towne Lake, Woodstock",
    beforeImage: "/gallery/before-7.jpg",
    afterImage: "/gallery/after-7.jpg",
    completionDate: "2024-01-20",
    duration: "6 days",
    stats: [
      { label: "Affected Area", value: "4,200 sq ft" },
      { label: "HVAC Cleaning", value: "Yes" },
      { label: "Odor Free", value: "Guaranteed" },
    ],
  },
  {
    id: "8",
    slug: "alpharetta-luxury-mold",
    title: "Alpharetta Luxury Home Mold Treatment",
    description:
      "High-end master bathroom mold remediation. Identified shower pan leak, removed mold, rebuilt with premium materials and waterproofing.",
    serviceType: "mold",
    propertyType: "luxury",
    location: "Windward, Alpharetta",
    beforeImage: "/gallery/before-8.jpg",
    afterImage: "/gallery/after-8.jpg",
    completionDate: "2024-02-28",
    duration: "8 days",
    stats: [
      { label: "Bathroom Size", value: "350 sq ft" },
      { label: "Custom Tile", value: "Yes" },
      { label: "Waterproofing", value: "Upgraded" },
    ],
  },
  {
    id: "9",
    slug: "smyrna-water-damage-condo",
    title: "Smyrna Condo Water Damage",
    description:
      "Multi-unit water damage from failed HVAC. Coordinated with HOA, restored three affected units with matching finishes.",
    serviceType: "water-damage",
    propertyType: "residential",
    location: "Vinings, Smyrna",
    beforeImage: "/gallery/before-9.jpg",
    afterImage: "/gallery/after-9.jpg",
    completionDate: "2024-03-12",
    duration: "7 days",
    stats: [
      { label: "Units Restored", value: "3" },
      { label: "Total Area", value: "2,800 sq ft" },
      { label: "HOA Coordination", value: "Yes" },
    ],
  },
  {
    id: "10",
    slug: "kennesaw-commercial-water",
    title: "Kennesaw Retail Water Extraction",
    description:
      "Emergency water extraction and restoration for retail store. Worked overnight to minimize business closure and preserve inventory.",
    serviceType: "water-damage",
    propertyType: "commercial",
    location: "Town Center, Kennesaw",
    beforeImage: "/gallery/before-10.jpg",
    afterImage: "/gallery/after-10.jpg",
    completionDate: "2024-01-25",
    duration: "4 days",
    stats: [
      { label: "Store Area", value: "3,200 sq ft" },
      { label: "Inventory Saved", value: "95%" },
      { label: "Closed Days", value: "2" },
    ],
  },
  {
    id: "11",
    slug: "canton-fire-damage",
    title: "Canton Residential Fire Restoration",
    description:
      "Complete home restoration after kitchen fire spread to adjacent rooms. Structural repairs, smoke cleanup, and content restoration.",
    serviceType: "fire-damage",
    propertyType: "residential",
    location: "Downtown Canton, GA",
    beforeImage: "/gallery/before-11.jpg",
    afterImage: "/gallery/after-11.jpg",
    completionDate: "2024-02-15",
    duration: "4 weeks",
    stats: [
      { label: "Rooms Rebuilt", value: "5" },
      { label: "Contents Cleaned", value: "200+ items" },
      { label: "Structural Repairs", value: "Extensive" },
    ],
  },
  {
    id: "12",
    slug: "powder-springs-storm",
    title: "Powder Springs Wind Damage",
    description:
      "Storm damage restoration after tree fell through roof. Emergency board-up, structural repairs, and complete interior restoration.",
    serviceType: "storm-damage",
    propertyType: "residential",
    location: "Lost Mountain, Powder Springs",
    beforeImage: "/gallery/before-12.jpg",
    afterImage: "/gallery/after-12.jpg",
    completionDate: "2024-03-22",
    duration: "3 weeks",
    stats: [
      { label: "Roof Repair", value: "1,400 sq ft" },
      { label: "Tree Removal", value: "Yes" },
      { label: "Rooms Restored", value: "3" },
    ],
  },
  {
    id: "13",
    slug: "marietta-luxury-flood",
    title: "East Cobb Luxury Home Flooding",
    description:
      "Extensive restoration after main water line break. Saved hardwood floors, restored custom kitchen, preserved high-end finishes throughout.",
    serviceType: "water-damage",
    propertyType: "luxury",
    location: "East Cobb, Marietta",
    beforeImage: "/gallery/before-13.jpg",
    afterImage: "/gallery/after-13.jpg",
    completionDate: "2024-01-30",
    duration: "14 days",
    stats: [
      { label: "Water Extracted", value: "3,800 gal" },
      { label: "Hardwood Saved", value: "2,400 sq ft" },
      { label: "Custom Features", value: "Preserved" },
    ],
  },
  {
    id: "14",
    slug: "roswell-mold-attic",
    title: "Roswell Attic Mold Remediation",
    description:
      "Complete attic mold remediation caused by roof leak. Identified source, removed contaminated insulation, treated structure, improved ventilation.",
    serviceType: "mold",
    propertyType: "residential",
    location: "Riverside, Roswell",
    beforeImage: "/gallery/before-14.jpg",
    afterImage: "/gallery/after-14.jpg",
    completionDate: "2024-02-18",
    duration: "5 days",
    stats: [
      { label: "Attic Area", value: "1,600 sq ft" },
      { label: "Insulation Replaced", value: "Yes" },
      { label: "Ventilation", value: "Improved" },
    ],
  },
  {
    id: "15",
    slug: "acworth-commercial-smoke",
    title: "Acworth Restaurant Smoke Cleanup",
    description:
      "Emergency smoke damage cleanup after kitchen equipment fire. Deep cleaned entire restaurant, eliminated odors, passed health inspection.",
    serviceType: "smoke-damage",
    propertyType: "commercial",
    location: "Downtown Acworth, GA",
    beforeImage: "/gallery/before-15.jpg",
    afterImage: "/gallery/after-15.jpg",
    completionDate: "2024-03-08",
    duration: "5 days",
    stats: [
      { label: "Restaurant Size", value: "2,800 sq ft" },
      { label: "Kitchen Cleaned", value: "Deep clean" },
      { label: "Reopened", value: "6 days" },
    ],
  },
]

export function getProjectBySlug(slug: string): GalleryProject | undefined {
  return galleryProjects.find((p) => p.slug === slug)
}

export function getProjectsByServiceType(
  serviceType: string
): GalleryProject[] {
  if (serviceType === "all") return galleryProjects
  return galleryProjects.filter((p) => p.serviceType === serviceType)
}

export function getProjectsByPropertyType(
  propertyType: string
): GalleryProject[] {
  if (propertyType === "all") return galleryProjects
  return galleryProjects.filter((p) => p.propertyType === propertyType)
}
