import {
  Droplets,
  Flame,
  Wind,
  CloudRain,
  Building2,
  AlertTriangle,
  Cigarette,
  type LucideIcon,
} from "lucide-react"

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  icon: LucideIcon
  excerpt: string
  description: string
  processSteps: ServiceProcess[]
  benefits: string[]
  faqs: ServiceFAQ[]
  relatedServices: string[]
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: "water-damage-restoration",
    title: "Water Damage Restoration",
    shortTitle: "Water Damage",
    icon: Droplets,
    excerpt:
      "Fast water extraction, drying, and restoration for flooded basements, burst pipes, and storm damage.",
    description: `Water damage can strike at any moment—a burst pipe in the middle of the night, a failed appliance, or a severe storm that overwhelms your home's defenses. When water invades your property, every minute counts. The longer water sits, the more damage it causes to your structure, belongings, and the greater the risk of mold growth.

Atlas Mitigation provides comprehensive water damage restoration services for homes and businesses throughout the Atlanta metro area. Our IICRC-certified technicians respond within 60 minutes, 24 hours a day, 7 days a week. We understand that water damage is stressful, which is why we handle everything from initial water extraction to final repairs, including working directly with your insurance company.

Our water damage restoration process uses state-of-the-art equipment including industrial-grade water extractors, commercial dehumidifiers, and advanced moisture detection technology. We don't just dry the visible water—we ensure all moisture is removed from walls, floors, and hidden spaces to prevent long-term damage and mold growth.

Whether you're dealing with a flooded basement, water damage from a roof leak, or sewage backup, our team has the expertise and equipment to restore your property to its pre-loss condition. We specialize in high-end homes and understand the importance of preserving custom finishes, hardwood floors, and valuable belongings.`,
    processSteps: [
      {
        step: 1,
        title: "Emergency Response",
        description:
          "Our team arrives within 60 minutes to assess the damage, stop the water source, and begin immediate water extraction.",
      },
      {
        step: 2,
        title: "Water Extraction",
        description:
          "Using powerful pumps and extraction equipment, we remove standing water from all affected areas quickly and efficiently.",
      },
      {
        step: 3,
        title: "Moisture Detection",
        description:
          "Advanced moisture meters and thermal imaging identify hidden water in walls, floors, and ceilings that could cause future problems.",
      },
      {
        step: 4,
        title: "Drying & Dehumidification",
        description:
          "Industrial dehumidifiers and air movers create optimal drying conditions to remove all moisture from your property.",
      },
      {
        step: 5,
        title: "Cleaning & Sanitizing",
        description:
          "We clean and sanitize all affected areas, treating for bacteria and preventing odors and mold growth.",
      },
      {
        step: 6,
        title: "Restoration & Repairs",
        description:
          "Final repairs restore your property to its pre-loss condition, from drywall replacement to flooring and paint.",
      },
    ],
    benefits: [
      "60-minute emergency response time",
      "IICRC certified water damage technicians",
      "Direct insurance billing and claim assistance",
      "Advanced moisture detection technology",
      "Complete structural drying guaranteed",
      "Mold prevention treatment included",
      "Salvage and content restoration services",
      "24/7 availability including holidays",
    ],
    faqs: [
      {
        question: "How quickly can you respond to water damage?",
        answer:
          "We offer 24/7 emergency service and typically arrive within 60 minutes of your call. Fast response is critical to minimizing damage and preventing mold growth.",
      },
      {
        question: "Will my insurance cover water damage restoration?",
        answer:
          "Most homeowner's insurance policies cover sudden and accidental water damage from events like burst pipes or appliance failures. We work directly with your insurance company to streamline the claims process.",
      },
      {
        question: "How long does water damage restoration take?",
        answer:
          "The timeline depends on the extent of damage. Minor water damage may take 3-5 days to dry, while severe flooding can take 1-2 weeks. We provide daily updates on progress.",
      },
      {
        question: "Can you save my hardwood floors after water damage?",
        answer:
          "In many cases, yes. Quick response and proper drying techniques can save hardwood floors. Our technicians specialize in preserving high-end finishes and materials.",
      },
    ],
    relatedServices: [
      "mold-remediation",
      "storm-damage",
      "emergency-services",
    ],
    metaTitle: "Water Damage Restoration Acworth GA | 24/7 Emergency Service",
    metaDescription:
      "Fast 24/7 water damage restoration in Acworth, Marietta & Atlanta. IICRC certified. 60-min response. Burst pipes, flooding, sewage cleanup. Call (404) 808-3677.",
  },
  {
    slug: "fire-damage-restoration",
    title: "Fire Damage Restoration",
    shortTitle: "Fire Damage",
    icon: Flame,
    excerpt:
      "Complete fire and smoke damage repair, from structural repairs to content cleaning and restoration.",
    description: `A fire can devastate your home or business in minutes, leaving behind not just structural damage but smoke, soot, and water damage from firefighting efforts. The aftermath of a fire is overwhelming, but you don't have to face it alone. Atlas Mitigation provides complete fire damage restoration services to help you rebuild and recover.

Our fire restoration team understands the unique challenges of fire damage. Smoke and soot can penetrate deep into building materials, and without proper treatment, odors can linger indefinitely. We use specialized cleaning techniques, thermal fogging, and ozone treatments to eliminate smoke odors completely—not just mask them.

Beyond smoke and soot cleanup, we handle all aspects of fire damage restoration including structural repairs, content cleaning and restoration, and working with your insurance company. Our experience with high-end homes means we understand how to restore custom finishes, antiques, and valuable belongings that require special care.

Fire damage restoration requires immediate action. Soot becomes more difficult to remove the longer it sits, and smoke odors can become permanently embedded in materials. Contact Atlas Mitigation as soon as it's safe to begin the restoration process and minimize secondary damage to your property.`,
    processSteps: [
      {
        step: 1,
        title: "Emergency Board-Up",
        description:
          "We secure your property immediately with professional board-up and tarping services to prevent further damage and unauthorized entry.",
      },
      {
        step: 2,
        title: "Damage Assessment",
        description:
          "Our team conducts a thorough assessment of fire, smoke, and water damage to create a comprehensive restoration plan.",
      },
      {
        step: 3,
        title: "Water Removal",
        description:
          "We extract water used in firefighting efforts and begin the drying process to prevent mold and additional damage.",
      },
      {
        step: 4,
        title: "Soot & Smoke Removal",
        description:
          "Specialized cleaning removes soot from all surfaces using appropriate techniques for each material type.",
      },
      {
        step: 5,
        title: "Odor Elimination",
        description:
          "Thermal fogging, ozone treatment, and hydroxyl generators eliminate smoke odors permanently, not just mask them.",
      },
      {
        step: 6,
        title: "Restoration & Rebuild",
        description:
          "Complete reconstruction restores your property to pre-fire condition, from drywall to custom finishes.",
      },
    ],
    benefits: [
      "24/7 emergency response and board-up services",
      "Complete smoke and soot removal",
      "Permanent odor elimination guaranteed",
      "Content cleaning and restoration",
      "Full structural repairs and reconstruction",
      "Direct insurance company coordination",
      "Electronics and document restoration",
      "High-end finish and antique restoration",
    ],
    faqs: [
      {
        question: "What should I do immediately after a fire?",
        answer:
          "First, ensure everyone is safe and the fire department has cleared the property. Don't enter until it's declared safe. Contact your insurance company and a professional restoration company like Atlas Mitigation as soon as possible.",
      },
      {
        question: "Can smoke damage be completely removed?",
        answer:
          "Yes, with professional treatment. We use specialized cleaning techniques, thermal fogging, and ozone treatments to completely eliminate smoke odors and damage—not just cover them up.",
      },
      {
        question: "Will my belongings be salvageable?",
        answer:
          "Many items can be restored with professional cleaning and treatment. We assess all contents and provide honest recommendations about what can be saved versus replaced.",
      },
      {
        question: "How long does fire damage restoration take?",
        answer:
          "The timeline varies based on damage severity. Minor fire damage may take 1-2 weeks, while major structural damage can take several months. We provide detailed timelines after our initial assessment.",
      },
    ],
    relatedServices: [
      "smoke-damage-cleanup",
      "water-damage-restoration",
      "emergency-services",
    ],
    metaTitle: "Fire Damage Restoration Acworth GA | Smoke & Soot Cleanup",
    metaDescription:
      "Professional fire damage restoration in Acworth, Marietta & Atlanta. Smoke removal, soot cleanup, odor elimination. 24/7 emergency service. Call (404) 808-3677.",
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    shortTitle: "Mold Removal",
    icon: Wind,
    excerpt:
      "Professional mold inspection, removal, and prevention to protect your property and health.",
    description: `Mold can grow anywhere moisture exists, often hidden behind walls, under floors, or in crawl spaces where you can't see it. Left untreated, mold damages your property and can cause serious health problems for your family. Atlas Mitigation provides professional mold remediation services that eliminate mold at its source and prevent it from returning.

Our mold remediation process begins with a thorough inspection using advanced moisture detection equipment and, when necessary, air quality testing. We identify not just visible mold but hidden colonies and the moisture sources that allow mold to thrive. Understanding the root cause is essential for permanent mold elimination.

We follow strict IICRC S520 protocols for mold remediation, including proper containment to prevent spore spread, HEPA air filtration, and safe removal of affected materials. All work is performed by certified technicians who understand the health risks associated with mold exposure and take appropriate precautions.

After mold removal, we address the underlying moisture problem to prevent recurrence. This may include recommendations for improved ventilation, drainage solutions, or waterproofing. Our goal is not just to remove the current mold but to create conditions that prevent future growth.`,
    processSteps: [
      {
        step: 1,
        title: "Inspection & Testing",
        description:
          "Comprehensive inspection identifies all mold growth, moisture sources, and the extent of contamination using advanced detection equipment.",
      },
      {
        step: 2,
        title: "Containment",
        description:
          "Affected areas are sealed with plastic barriers and negative air pressure prevents mold spores from spreading during removal.",
      },
      {
        step: 3,
        title: "Air Filtration",
        description:
          "HEPA air scrubbers and filtration devices capture microscopic mold spores from the air throughout the remediation process.",
      },
      {
        step: 4,
        title: "Mold Removal",
        description:
          "Contaminated materials are safely removed and disposed of. Non-porous surfaces are cleaned with antimicrobial treatments.",
      },
      {
        step: 5,
        title: "Moisture Control",
        description:
          "The underlying moisture source is addressed to prevent mold from returning, including drainage and ventilation improvements.",
      },
      {
        step: 6,
        title: "Restoration",
        description:
          "Removed materials are replaced, and the area is restored to its original condition with mold-resistant products when appropriate.",
      },
    ],
    benefits: [
      "Certified mold remediation specialists",
      "Advanced moisture detection technology",
      "Proper containment prevents spore spread",
      "HEPA air filtration during remediation",
      "Address root cause moisture problems",
      "Post-remediation verification testing",
      "Mold-resistant materials for repairs",
      "Health-focused safe removal practices",
    ],
    faqs: [
      {
        question: "How do I know if I have mold?",
        answer:
          "Signs include musty odors, visible mold growth, water stains, or unexplained allergic symptoms. However, mold often grows hidden. If you suspect mold, a professional inspection can identify problems you can't see.",
      },
      {
        question: "Is mold dangerous to my health?",
        answer:
          "Yes, mold exposure can cause respiratory problems, allergic reactions, and other health issues, especially for those with asthma or compromised immune systems. Professional remediation protects your family's health.",
      },
      {
        question: "Can I remove mold myself?",
        answer:
          "Small areas (under 10 sq ft) may be DIY-able, but improper removal can spread spores throughout your home. For larger areas or hidden mold, professional remediation is essential for safe, complete removal.",
      },
      {
        question: "How do you prevent mold from coming back?",
        answer:
          "We address the underlying moisture problem—whether it's a leak, humidity issue, or drainage problem. Without eliminating the moisture source, mold will return even after removal.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "storm-damage",
      "emergency-services",
    ],
    metaTitle: "Mold Remediation Acworth GA | Professional Mold Removal",
    metaDescription:
      "Certified mold remediation in Acworth, Marietta & Atlanta. Safe mold removal, moisture control, prevention. Protect your family's health. Call (404) 808-3677.",
  },
  {
    slug: "smoke-damage-cleanup",
    title: "Smoke Damage Cleanup",
    shortTitle: "Smoke Damage",
    icon: Cigarette,
    excerpt:
      "Expert smoke and soot cleaning, deodorization, and restoration for smoke-affected properties.",
    description: `Smoke damage extends far beyond what you can see. Even when fire damage is minimal, smoke can penetrate every corner of your property, leaving behind soot, staining, and persistent odors that affect your health and quality of life. Atlas Mitigation specializes in comprehensive smoke damage cleanup that restores your property completely.

Smoke behaves differently depending on the fire's fuel source. Protein fires from cooking leave invisible residue that causes permanent discoloration. Synthetic materials produce thick, sticky soot. Our technicians are trained to identify smoke types and apply the appropriate cleaning methods for each situation.

Our smoke cleanup process addresses all affected surfaces, from walls and ceilings to HVAC systems and contents. We use specialized cleaning agents, dry sponges for delicate surfaces, and wet cleaning for more durable materials. Every approach is tailored to the specific type of smoke damage and the materials affected.

Odor elimination is perhaps the most challenging aspect of smoke damage restoration. We don't mask odors—we eliminate them permanently using thermal fogging, ozone treatment, and hydroxyl generators. Our deodorization process reaches smoke particles embedded in materials that cleaning alone can't address.`,
    processSteps: [
      {
        step: 1,
        title: "Damage Assessment",
        description:
          "We evaluate smoke penetration throughout your property, identifying affected areas including hidden spaces and HVAC systems.",
      },
      {
        step: 2,
        title: "Pre-Cleaning",
        description:
          "Loose soot is removed with specialized vacuums and dry cleaning methods to prevent smearing during wet cleaning.",
      },
      {
        step: 3,
        title: "Surface Cleaning",
        description:
          "All surfaces are cleaned using appropriate methods—dry sponges, wet cleaning, or ultrasonic cleaning for delicate items.",
      },
      {
        step: 4,
        title: "HVAC Cleaning",
        description:
          "Ductwork and HVAC systems are thoroughly cleaned to remove smoke particles that would otherwise recirculate.",
      },
      {
        step: 5,
        title: "Odor Elimination",
        description:
          "Thermal fogging, ozone, and hydroxyl treatments permanently eliminate smoke odors from all materials.",
      },
      {
        step: 6,
        title: "Final Restoration",
        description:
          "Surfaces are sealed, repainted, or replaced as needed to complete the restoration process.",
      },
    ],
    benefits: [
      "Specialized smoke type identification",
      "Appropriate cleaning for each material",
      "Complete HVAC system cleaning",
      "Permanent odor elimination",
      "Content cleaning and restoration",
      "Antique and electronics restoration",
      "Insurance claim assistance",
      "No odor guarantee",
    ],
    faqs: [
      {
        question: "Why do smoke odors linger after cleaning?",
        answer:
          "Smoke particles are microscopic and penetrate deep into porous materials. Surface cleaning alone won't remove them. Our thermal fogging and ozone treatments reach particles embedded in materials.",
      },
      {
        question: "Can smoke damage my HVAC system?",
        answer:
          "Yes, smoke circulates through your HVAC system, coating ducts and components. Without cleaning, these particles recirculate whenever you run your system, prolonging odor problems.",
      },
      {
        question: "Is smoke damage covered by insurance?",
        answer:
          "Most homeowner policies cover smoke damage from fire. Even if fire damage is minimal, the smoke damage claim can be substantial. We help document damage for your claim.",
      },
      {
        question: "How long does smoke cleanup take?",
        answer:
          "Timeline depends on severity. Light smoke damage may take a few days, while heavy smoke from a major fire can take weeks. Odor elimination often extends beyond visible cleaning.",
      },
    ],
    relatedServices: [
      "fire-damage-restoration",
      "emergency-services",
      "commercial-restoration",
    ],
    metaTitle: "Smoke Damage Cleanup Acworth GA | Soot & Odor Removal",
    metaDescription:
      "Professional smoke damage cleanup in Acworth, Marietta & Atlanta. Soot removal, odor elimination, HVAC cleaning. Guaranteed results. Call (404) 808-3677.",
  },
  {
    slug: "storm-damage",
    title: "Storm & Flood Damage Restoration",
    shortTitle: "Storm Damage",
    icon: CloudRain,
    excerpt:
      "Emergency response for storm, wind, and flood damage to get your property secured and restored.",
    description: `Georgia storms can be devastating—from severe thunderstorms and tornadoes to hurricanes and flooding. When storm damage strikes your home or business, you need a restoration partner who can respond immediately to secure your property and begin restoration. Atlas Mitigation provides comprehensive storm damage services from emergency board-up to complete restoration.

Storm damage often combines multiple challenges: wind damage to roofs and structures, water intrusion, fallen trees, and debris. Our team is equipped to handle all aspects of storm damage restoration, coordinating the various services needed to fully restore your property. We work efficiently to minimize secondary damage from ongoing water intrusion.

Flooding presents unique challenges including contaminated water, structural damage, and high mold risk. Our technicians are trained in Category 3 (black water) extraction and the enhanced cleaning and sanitization these situations require. We take flooding seriously because the health risks are significant.

After major storms, demand for restoration services surges. Atlas Mitigation maintains the equipment, personnel, and resources to respond to multiple storm damage emergencies simultaneously. We prioritize our response based on safety concerns and damage severity, but we never leave property owners waiting.`,
    processSteps: [
      {
        step: 1,
        title: "Emergency Response",
        description:
          "Immediate dispatch to secure your property with board-up, tarping, and debris removal to prevent further damage.",
      },
      {
        step: 2,
        title: "Damage Documentation",
        description:
          "Thorough documentation of all damage for insurance purposes, including photos, video, and detailed reports.",
      },
      {
        step: 3,
        title: "Water Extraction",
        description:
          "Flood water is extracted immediately. For contaminated water, we follow strict safety and sanitization protocols.",
      },
      {
        step: 4,
        title: "Drying & Dehumidification",
        description:
          "Industrial equipment dries all affected areas completely to prevent mold and structural damage.",
      },
      {
        step: 5,
        title: "Cleaning & Sanitizing",
        description:
          "All affected areas are cleaned and sanitized, with special treatment for flood water contamination.",
      },
      {
        step: 6,
        title: "Restoration & Repairs",
        description:
          "Complete structural repairs restore your property, from roof damage to flooring and everything in between.",
      },
    ],
    benefits: [
      "Rapid emergency response after storms",
      "Emergency board-up and tarping",
      "Tree and debris removal",
      "Flood water extraction and sanitization",
      "Complete structural drying",
      "Mold prevention treatment",
      "Full reconstruction services",
      "Storm damage insurance specialists",
    ],
    faqs: [
      {
        question: "What should I do immediately after storm damage?",
        answer:
          "Ensure everyone is safe, then document damage with photos before temporary repairs. Contact your insurance company and a restoration professional. Avoid walking on damaged roofs or entering flooded areas.",
      },
      {
        question: "How quickly can you respond after a major storm?",
        answer:
          "We maintain surge capacity for major storm events. While response times may be longer after area-wide disasters, we prioritize based on safety and severity. We'll give you an honest timeline.",
      },
      {
        question: "Is flood damage covered by homeowner's insurance?",
        answer:
          "Standard homeowner's policies typically don't cover flood damage—that requires separate flood insurance. However, wind and rain damage are usually covered. We help clarify coverage with your insurer.",
      },
      {
        question: "How dangerous is flood water?",
        answer:
          "Flood water is often contaminated with sewage, chemicals, and debris. It's classified as Category 3 (black water) and requires specialized handling. Don't attempt DIY cleanup of flood water.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "mold-remediation",
      "emergency-services",
    ],
    metaTitle: "Storm Damage Restoration Acworth GA | Flood & Wind Damage",
    metaDescription:
      "Emergency storm damage restoration in Acworth, Marietta & Atlanta. Flood cleanup, wind damage repairs, 24/7 response. Call (404) 808-3677.",
  },
  {
    slug: "emergency-services",
    title: "24/7 Emergency Restoration Services",
    shortTitle: "Emergency",
    icon: AlertTriangle,
    excerpt:
      "24/7 emergency response with rapid deployment to minimize damage and start restoration immediately.",
    description: `Disasters don't wait for business hours, and neither do we. Atlas Mitigation provides true 24/7 emergency restoration services with rapid response anywhere in the Atlanta metro area. When you call our emergency line, you speak directly with a dispatcher who can have a team en route within minutes.

Our emergency response focuses on mitigation—taking immediate action to stop ongoing damage and prevent the situation from worsening. This includes water extraction, emergency board-up, power restoration, and other critical first steps. Quick mitigation can save thousands of dollars in additional damage and significantly reduce restoration time.

We maintain fully stocked emergency response vehicles and trained technicians ready to deploy at any hour. Our team leaders have extensive experience assessing damage, prioritizing actions, and coordinating multiple trades when needed. You get expert guidance from the first phone call through project completion.

Emergency situations are stressful. Beyond the technical response, our team provides clear communication, honest assessments, and support navigating insurance claims. We understand you're dealing with a crisis, and we're here to help you through it—not just fix your property.`,
    processSteps: [
      {
        step: 1,
        title: "Emergency Call",
        description:
          "Call our 24/7 emergency line. A live dispatcher gathers information and begins coordinating response immediately.",
      },
      {
        step: 2,
        title: "Rapid Dispatch",
        description:
          "Emergency response teams are dispatched immediately, typically arriving within 60 minutes anywhere in our service area.",
      },
      {
        step: 3,
        title: "Situation Assessment",
        description:
          "Team leaders assess the situation, identify immediate threats, and develop a prioritized action plan.",
      },
      {
        step: 4,
        title: "Emergency Mitigation",
        description:
          "Immediate action stops ongoing damage—water extraction, board-up, tarping, or other critical interventions.",
      },
      {
        step: 5,
        title: "Documentation",
        description:
          "All damage and emergency actions are documented for insurance purposes, with photos and detailed reports.",
      },
      {
        step: 6,
        title: "Restoration Planning",
        description:
          "Once the emergency is stabilized, we develop a comprehensive restoration plan and timeline.",
      },
    ],
    benefits: [
      "True 24/7/365 availability",
      "60-minute average response time",
      "Live emergency dispatchers",
      "Fully equipped response vehicles",
      "Experienced emergency team leaders",
      "Immediate mitigation to prevent further damage",
      "Same-day insurance contact",
      "Clear communication throughout crisis",
    ],
    faqs: [
      {
        question: "How quickly can you respond to an emergency?",
        answer:
          "Our average response time is 60 minutes or less anywhere in our service area. For life-safety emergencies, call 911 first, then call us.",
      },
      {
        question: "What qualifies as an emergency?",
        answer:
          "Any situation with ongoing damage or safety risks: active water leaks, recent fire or smoke, storm damage with open structure, sewage backup, or situations requiring immediate board-up.",
      },
      {
        question: "What should I do while waiting for your team?",
        answer:
          "Ensure everyone is safe. If possible and safe, stop water sources (main shutoff), turn off HVAC if there's smoke, and move valuables away from water. Don't enter unsafe structures.",
      },
      {
        question: "Will insurance cover emergency services?",
        answer:
          "Yes, emergency mitigation is almost always covered and often required by insurance policies. Prompt mitigation can prevent claim denial for failure to mitigate.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "fire-damage-restoration",
      "storm-damage",
    ],
    metaTitle: "24/7 Emergency Restoration Acworth GA | Immediate Response",
    metaDescription:
      "24/7 emergency restoration in Acworth, Marietta & Atlanta. 60-minute response. Water, fire, storm damage. Call now: (404) 808-3677.",
  },
  {
    slug: "commercial-restoration",
    title: "Commercial Restoration Services",
    shortTitle: "Commercial",
    icon: Building2,
    excerpt:
      "Large-scale restoration services for businesses, minimizing downtime and protecting your investment.",
    description: `When disaster strikes your business, every hour of downtime costs money. Atlas Mitigation understands the unique challenges of commercial restoration—the need for speed, minimal disruption, and protecting your business operations. We've restored everything from small retail spaces to large industrial facilities, always with a focus on getting you back in business.

Commercial properties present unique challenges: larger spaces, complex building systems, specialized equipment, and the need to work around or coordinate with ongoing operations. Our commercial team includes project managers experienced in large-scale restoration who can coordinate multiple crews, trades, and timelines effectively.

We offer after-hours and weekend scheduling to minimize disruption to your business operations. For occupied buildings, we establish containment and safety protocols that allow work to proceed while protecting employees and customers. Communication with property managers and business owners is a priority throughout every project.

Insurance claims for commercial properties are often complex, involving business interruption coverage, equipment replacement, and tenant coordination. Our commercial team includes specialists who understand commercial policies and can help you maximize your claim while meeting all documentation requirements.`,
    processSteps: [
      {
        step: 1,
        title: "Emergency Response",
        description:
          "Rapid deployment to secure your facility, extract water, and prevent ongoing damage to minimize business interruption.",
      },
      {
        step: 2,
        title: "Business Impact Assessment",
        description:
          "We evaluate not just physical damage but impact on operations, helping prioritize restoration to critical areas.",
      },
      {
        step: 3,
        title: "Project Planning",
        description:
          "Detailed project plans include timelines, phasing to minimize disruption, and coordination with your operations.",
      },
      {
        step: 4,
        title: "Restoration Work",
        description:
          "Multiple crews and trades work efficiently, often during off-hours, to complete restoration as quickly as possible.",
      },
      {
        step: 5,
        title: "Equipment & Systems",
        description:
          "Beyond structure, we address HVAC, electrical, and specialized equipment that may be affected.",
      },
      {
        step: 6,
        title: "Final Inspection",
        description:
          "Thorough inspection ensures all work meets commercial standards before returning the space to full operation.",
      },
    ],
    benefits: [
      "Experienced commercial project managers",
      "After-hours and weekend scheduling",
      "Minimal disruption to operations",
      "Multi-crew capability for large projects",
      "HVAC and equipment coordination",
      "Tenant and property manager communication",
      "Commercial insurance claim expertise",
      "Business interruption documentation",
    ],
    faqs: [
      {
        question: "Can you work around our business hours?",
        answer:
          "Yes, we routinely perform commercial restoration during evenings, nights, and weekends to minimize disruption to your operations. We'll work with your schedule.",
      },
      {
        question: "How do you minimize disruption to our employees and customers?",
        answer:
          "We use containment barriers, air scrubbers, and carefully planned work sequences. For occupied buildings, we coordinate scheduling and access to maintain safe, comfortable conditions.",
      },
      {
        question: "Do you handle large commercial facilities?",
        answer:
          "Yes, we have the equipment and personnel for large-scale commercial projects including warehouses, office buildings, and industrial facilities. We scale our response to match your needs.",
      },
      {
        question: "Can you help with business interruption claims?",
        answer:
          "Our commercial team understands business interruption documentation requirements. We provide detailed records of damage, restoration timeline, and other documentation to support your claim.",
      },
    ],
    relatedServices: [
      "water-damage-restoration",
      "fire-damage-restoration",
      "emergency-services",
    ],
    metaTitle: "Commercial Restoration Acworth GA | Business Water & Fire Damage",
    metaDescription:
      "Commercial restoration services in Acworth, Marietta & Atlanta. Minimal downtime, 24/7 response, insurance specialists. Call (404) 808-3677.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug))
}
