export interface Location {
  slug: string
  city: string
  state: string
  county: string
  featured: boolean
  description: string
  neighborhoods: string[]
  zipCodes: string[]
  responseTime: string
  projectsCompleted: number
  metaTitle: string
  metaDescription: string
}

export const locations: Location[] = [
  {
    slug: "acworth",
    city: "Acworth",
    state: "GA",
    county: "Cobb County",
    featured: true,
    description:
      "Atlas Mitigation is proud to serve Acworth, Georgia, with professional fire and water damage restoration services. Located just north of Atlanta, Acworth is known for its beautiful lakefront community on Lake Allatoona and its charming historic downtown. When disaster strikes in Acworth, our certified technicians respond quickly to minimize damage and restore your property to its pre-loss condition. We understand the unique challenges of restoring homes in this area, from lakefront properties to historic homes in downtown Acworth.",
    neighborhoods: [
      "Downtown Acworth",
      "Lake Acworth",
      "Lake Allatoona",
      "Brookstone",
      "The Enclave",
      "Bentwater",
      "Sterling on the Lake",
      "Governors Towne Club",
      "Kennesaw Due West",
    ],
    zipCodes: ["30101", "30102"],
    responseTime: "45 minutes",
    projectsCompleted: 127,
    metaTitle: "Water & Fire Damage Restoration Acworth GA | 24/7 Service",
    metaDescription:
      "24/7 water and fire damage restoration in Acworth, GA. Fast 45-min response. Serving Lake Acworth, Brookstone & all neighborhoods. Call (404) 808-3677.",
  },
  {
    slug: "marietta",
    city: "Marietta",
    state: "GA",
    county: "Cobb County",
    featured: true,
    description:
      "Atlas Mitigation provides comprehensive restoration services throughout Marietta, Georgia. As the county seat of Cobb County, Marietta offers a blend of historic charm and modern living. From the historic homes around Marietta Square to newer developments in East Cobb, our team has the expertise to handle any restoration project. We specialize in preserving the character of historic properties while providing the latest restoration techniques for modern homes.",
    neighborhoods: [
      "Marietta Square",
      "East Cobb",
      "West Cobb",
      "Lassiter High School Area",
      "Wheeler High School Area",
      "Walton High School Area",
      "Indian Hills",
      "Sope Creek",
      "Lower Roswell",
    ],
    zipCodes: ["30060", "30062", "30064", "30066", "30067", "30068", "30069"],
    responseTime: "40 minutes",
    projectsCompleted: 183,
    metaTitle: "Water & Fire Damage Restoration Marietta GA | Emergency Service",
    metaDescription:
      "Professional water and fire damage restoration in Marietta, GA. 40-min response. East Cobb, West Cobb & all areas. IICRC certified. Call (404) 808-3677.",
  },
  {
    slug: "kennesaw",
    city: "Kennesaw",
    state: "GA",
    county: "Cobb County",
    featured: true,
    description:
      "Kennesaw, Georgia, home of Kennesaw State University and the historic Kennesaw Mountain, is served by Atlas Mitigation's professional restoration team. Whether you're dealing with water damage in a residential neighborhood near Town Center or fire damage in a commercial property near the university, our certified technicians are ready to respond. We understand the importance of quick restoration for both homeowners and businesses in this growing community.",
    neighborhoods: [
      "Town Center",
      "Legacy Park",
      "The Village at Town Center",
      "Pinetree Country Club",
      "Stilesboro",
      "Shiloh Valley",
      "Kennesaw Battlefield",
      "Barrett Parkway",
    ],
    zipCodes: ["30144", "30152", "30156"],
    responseTime: "45 minutes",
    projectsCompleted: 94,
    metaTitle: "Water & Fire Damage Restoration Kennesaw GA | 24/7 Response",
    metaDescription:
      "Emergency water and fire damage restoration in Kennesaw, GA. 45-min response. Town Center, Legacy Park & surrounding areas. Call (404) 808-3677.",
  },
  {
    slug: "woodstock",
    city: "Woodstock",
    state: "GA",
    county: "Cherokee County",
    featured: false,
    description:
      "Atlas Mitigation serves Woodstock, Georgia, with 24/7 emergency restoration services. Known for its revitalized downtown and family-friendly atmosphere, Woodstock has grown rapidly in recent years. Our team is experienced in restoring properties throughout this beautiful Cherokee County community, from the charming homes near Downtown Woodstock to the larger properties in Towne Lake and surrounding neighborhoods.",
    neighborhoods: [
      "Downtown Woodstock",
      "Towne Lake",
      "Eagle Watch",
      "Brookshire",
      "Bradshaw Farm",
      "The Park at Towne Lake",
      "Mill Creek",
    ],
    zipCodes: ["30188", "30189"],
    responseTime: "50 minutes",
    projectsCompleted: 67,
    metaTitle: "Water & Fire Damage Restoration Woodstock GA | Fast Response",
    metaDescription:
      "24/7 water and fire damage restoration in Woodstock, GA. Towne Lake, Downtown & all areas. Cherokee County emergency service. Call (404) 808-3677.",
  },
  {
    slug: "canton",
    city: "Canton",
    state: "GA",
    county: "Cherokee County",
    featured: false,
    description:
      "Canton, the county seat of Cherokee County, is served by Atlas Mitigation's professional restoration team. With its growing population and mix of historic downtown charm and new development, Canton requires restoration services that understand both traditional and modern construction. Our team provides fast emergency response and thorough restoration for homes and businesses throughout the Canton area.",
    neighborhoods: [
      "Downtown Canton",
      "Hickory Flat",
      "Buffington",
      "Macedonia",
      "Cherokee Mills",
      "Riverstone",
    ],
    zipCodes: ["30114", "30115"],
    responseTime: "55 minutes",
    projectsCompleted: 42,
    metaTitle: "Water & Fire Damage Restoration Canton GA | Emergency Service",
    metaDescription:
      "Professional water and fire damage restoration in Canton, GA. Cherokee County coverage. Downtown Canton & all areas. Call (404) 808-3677.",
  },
  {
    slug: "roswell",
    city: "Roswell",
    state: "GA",
    county: "Fulton County",
    featured: false,
    description:
      "Atlas Mitigation provides premium restoration services to Roswell, Georgia, known for its historic homes, upscale neighborhoods, and vibrant downtown. Our team specializes in restoring high-end properties and understands the importance of preserving the character of Roswell's historic district. From water damage in riverside homes along the Chattahoochee to fire restoration in established neighborhoods, we deliver exceptional results.",
    neighborhoods: [
      "Historic Roswell",
      "Riverside",
      "Mountain Park",
      "Horseshoe Bend",
      "Willow Springs",
      "Martin's Landing",
      "Lake Charles",
    ],
    zipCodes: ["30075", "30076", "30077"],
    responseTime: "50 minutes",
    projectsCompleted: 78,
    metaTitle: "Water & Fire Damage Restoration Roswell GA | Luxury Home Experts",
    metaDescription:
      "Premium water and fire damage restoration in Roswell, GA. Historic home specialists. Riverside, Mountain Park & all areas. Call (404) 808-3677.",
  },
  {
    slug: "alpharetta",
    city: "Alpharetta",
    state: "GA",
    county: "Fulton County",
    featured: false,
    description:
      "Atlas Mitigation serves Alpharetta, Georgia's technology hub, with comprehensive restoration services. Home to numerous corporate headquarters and upscale residential communities, Alpharetta demands restoration services that match its high standards. Our team responds quickly to emergencies and delivers meticulous restoration work that meets the expectations of Alpharetta's discerning homeowners and business owners.",
    neighborhoods: [
      "Avalon",
      "Windward",
      "Downtown Alpharetta",
      "Wills Park",
      "Webb Bridge",
      "Crabapple",
      "The Manor",
    ],
    zipCodes: ["30004", "30005", "30009", "30022", "30023"],
    responseTime: "55 minutes",
    projectsCompleted: 61,
    metaTitle: "Water & Fire Damage Restoration Alpharetta GA | 24/7 Service",
    metaDescription:
      "24/7 water and fire damage restoration in Alpharetta, GA. Avalon, Windward & North Fulton areas. Commercial & residential. Call (404) 808-3677.",
  },
  {
    slug: "smyrna",
    city: "Smyrna",
    state: "GA",
    county: "Cobb County",
    featured: false,
    description:
      "Atlas Mitigation provides fast and reliable restoration services to Smyrna, Georgia. Located just northwest of Atlanta, Smyrna offers convenient access while maintaining a strong sense of community. Our team serves both the established neighborhoods near downtown Smyrna and newer developments, providing the same professional service that has made us the trusted choice for restoration in Cobb County.",
    neighborhoods: [
      "Downtown Smyrna",
      "Vinings",
      "Belmont Hills",
      "King Springs",
      "Ivy Walk",
      "Green Hills",
      "Smyrna Market Village",
    ],
    zipCodes: ["30080", "30081", "30082"],
    responseTime: "35 minutes",
    projectsCompleted: 89,
    metaTitle: "Water & Fire Damage Restoration Smyrna GA | Fast Response",
    metaDescription:
      "Emergency water and fire damage restoration in Smyrna, GA. 35-min response. Vinings, Downtown & all areas. Cobb County experts. Call (404) 808-3677.",
  },
  {
    slug: "powder-springs",
    city: "Powder Springs",
    state: "GA",
    county: "Cobb County",
    featured: false,
    description:
      "Powder Springs, Georgia, receives full restoration service coverage from Atlas Mitigation. This growing Cobb County community combines suburban living with easy access to Atlanta. Our team provides emergency response and complete restoration services for water, fire, mold, and storm damage. We're committed to helping Powder Springs residents recover quickly from any disaster.",
    neighborhoods: [
      "Lost Mountain",
      "Hicks Road",
      "Macland Road",
      "McEachern High School Area",
      "Powder Springs Downtown",
    ],
    zipCodes: ["30127"],
    responseTime: "45 minutes",
    projectsCompleted: 38,
    metaTitle: "Water & Fire Damage Restoration Powder Springs GA",
    metaDescription:
      "Professional water and fire damage restoration in Powder Springs, GA. Lost Mountain & all areas. 24/7 Cobb County service. Call (404) 808-3677.",
  },
  {
    slug: "dallas",
    city: "Dallas",
    state: "GA",
    county: "Paulding County",
    featured: false,
    description:
      "Atlas Mitigation extends our professional restoration services to Dallas, Georgia, and surrounding Paulding County areas. As this community continues to grow, residents need reliable restoration services they can trust. Our certified technicians provide the same high-quality emergency response and thorough restoration work that has earned us the trust of homeowners throughout metro Atlanta.",
    neighborhoods: [
      "Downtown Dallas",
      "Villa Rica Highway",
      "Seven Hills",
      "Hiram Highway Area",
    ],
    zipCodes: ["30132", "30157"],
    responseTime: "60 minutes",
    projectsCompleted: 24,
    metaTitle: "Water & Fire Damage Restoration Dallas GA | Paulding County",
    metaDescription:
      "24/7 water and fire damage restoration in Dallas & Paulding County, GA. Emergency response. Certified technicians. Call (404) 808-3677.",
  },
  {
    slug: "decatur",
    city: "Decatur",
    state: "GA",
    county: "DeKalb County",
    featured: false,
    description:
      "Atlas Mitigation provides expert restoration services to Decatur, Georgia, a vibrant city known for its walkable downtown, independent restaurants, and diverse neighborhoods. Located just east of Atlanta, Decatur features a mix of charming bungalows, historic homes, and modern developments. Our certified technicians respond quickly to water, fire, and mold emergencies throughout Decatur, delivering restoration that preserves the unique character of each property.",
    neighborhoods: [
      "Downtown Decatur",
      "Oakhurst",
      "Winnona Park",
      "MAK Historic District",
      "Great Lakes",
      "Glennwood Estates",
      "Medlock Park",
      "Midway Woods",
    ],
    zipCodes: ["30030", "30031", "30032", "30033", "30034"],
    responseTime: "45 minutes",
    projectsCompleted: 53,
    metaTitle: "Water & Fire Damage Restoration Decatur GA | 24/7 Emergency",
    metaDescription:
      "24/7 water and fire damage restoration in Decatur, GA. Serving Oakhurst, Downtown Decatur & all DeKalb County neighborhoods. Call (404) 808-3677.",
  },
  {
    slug: "buckhead",
    city: "Buckhead",
    state: "GA",
    county: "Fulton County",
    featured: false,
    description:
      "Atlas Mitigation specializes in high-end restoration services for Buckhead, Atlanta's premier upscale district. Home to luxury estates, high-rise condominiums, and prestigious commercial properties, Buckhead demands restoration professionals who understand the value of fine finishes and premium materials. Our team provides meticulous restoration for water, fire, and mold damage, protecting your investment with the care and attention Buckhead properties deserve.",
    neighborhoods: [
      "Tuxedo Park",
      "Chastain Park",
      "Peachtree Hills",
      "Garden Hills",
      "Peachtree Battle",
      "Brookhaven",
      "Lenox",
      "Phipps Plaza Area",
    ],
    zipCodes: ["30305", "30309", "30319", "30324", "30326", "30342"],
    responseTime: "40 minutes",
    projectsCompleted: 71,
    metaTitle: "Water & Fire Damage Restoration Buckhead Atlanta | Luxury Specialists",
    metaDescription:
      "Premium water and fire damage restoration in Buckhead, Atlanta. Luxury home & high-rise specialists. Tuxedo Park, Chastain Park & all areas. Call (404) 808-3677.",
  },
  {
    slug: "downtown-atlanta",
    city: "Downtown Atlanta",
    state: "GA",
    county: "Fulton County",
    featured: false,
    description:
      "Atlas Mitigation serves Downtown Atlanta with comprehensive commercial and residential restoration services. As the heart of Georgia's capital city, Downtown Atlanta features high-rise office buildings, historic loft conversions, and mixed-use developments that require specialized restoration expertise. Our team handles everything from water damage in commercial towers to fire restoration in historic properties, minimizing downtime and preserving the integrity of every structure.",
    neighborhoods: [
      "Centennial Hill",
      "Fairlie-Poplar",
      "South Downtown",
      "Castleberry Hill",
      "Five Points",
      "Peachtree Center",
      "Sweet Auburn",
      "SoNo District",
    ],
    zipCodes: ["30303", "30308", "30312", "30313", "30314"],
    responseTime: "35 minutes",
    projectsCompleted: 92,
    metaTitle: "Water & Fire Damage Restoration Downtown Atlanta | Commercial Experts",
    metaDescription:
      "24/7 water and fire damage restoration in Downtown Atlanta. Commercial & residential specialists. Fast 35-min response. Call (404) 808-3677.",
  },
  {
    slug: "conyers",
    city: "Conyers",
    state: "GA",
    county: "Rockdale County",
    featured: false,
    description:
      "Atlas Mitigation extends our professional restoration services to Conyers, Georgia, the county seat of Rockdale County. Located east of Atlanta along I-20, Conyers offers a mix of suburban neighborhoods and rural charm. Our certified technicians provide fast emergency response for water, fire, mold, and storm damage throughout Conyers and surrounding Rockdale County communities, helping homeowners and businesses recover quickly from unexpected disasters.",
    neighborhoods: [
      "Downtown Conyers",
      "Olde Towne Conyers",
      "Honey Creek",
      "Pine Log",
      "Milstead",
      "Magnet",
      "Lakeview Estates",
    ],
    zipCodes: ["30012", "30013", "30094"],
    responseTime: "55 minutes",
    projectsCompleted: 31,
    metaTitle: "Water & Fire Damage Restoration Conyers GA | Rockdale County",
    metaDescription:
      "Professional water and fire damage restoration in Conyers & Rockdale County, GA. 24/7 emergency response. Certified technicians. Call (404) 808-3677.",
  },
  {
    slug: "sandy-springs",
    city: "Sandy Springs",
    state: "GA",
    county: "Fulton County",
    featured: false,
    description:
      "Atlas Mitigation provides expert restoration services to Sandy Springs, Georgia, one of Atlanta's most affluent suburban cities. Known for its mix of luxury homes, corporate headquarters, and upscale shopping along the Perimeter, Sandy Springs demands restoration professionals who deliver exceptional quality. Our certified technicians respond quickly to water, fire, and mold emergencies throughout Sandy Springs, handling everything from high-rise condos along the Chattahoochee to estate homes in the city's prestigious neighborhoods.",
    neighborhoods: [
      "Riverside",
      "Mount Vernon",
      "Dunwoody",
      "Perimeter Center",
      "Powers Ferry",
      "Spalding Drive",
      "Glenridge",
      "Hammond Drive",
    ],
    zipCodes: ["30328", "30338", "30342", "30350"],
    responseTime: "40 minutes",
    projectsCompleted: 64,
    metaTitle: "Water & Fire Damage Restoration Sandy Springs GA | 24/7 Emergency",
    metaDescription:
      "Premium water and fire damage restoration in Sandy Springs, GA. Serving Riverside, Mount Vernon & all Fulton County neighborhoods. Call (404) 808-3677.",
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getFeaturedLocations(): Location[] {
  return locations.filter((l) => l.featured)
}
