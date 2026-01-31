import { defineType, defineField } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Atlas Mitigation",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'E.g., "Premium Fire and Water Damage Restoration"',
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "phone",
          type: "string",
          title: "Phone Number",
          initialValue: "(404) 808-3677",
        },
        {
          name: "email",
          type: "string",
          title: "Email Address",
        },
        {
          name: "address",
          type: "string",
          title: "Street Address",
          initialValue: "1720 Mars Hill Rd",
        },
        {
          name: "city",
          type: "string",
          title: "City",
          initialValue: "Acworth",
        },
        {
          name: "state",
          type: "string",
          title: "State",
          initialValue: "GA",
        },
        {
          name: "zipCode",
          type: "string",
          title: "ZIP Code",
          initialValue: "30101",
        },
      ],
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "object",
      fields: [
        {
          name: "emergency",
          type: "string",
          title: "Emergency Services",
          initialValue: "24/7 Available",
        },
        {
          name: "office",
          type: "string",
          title: "Office Hours",
          initialValue: "Mon-Fri: 8AM-6PM",
        },
      ],
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook URL" },
        { name: "instagram", type: "url", title: "Instagram URL" },
        { name: "linkedin", type: "url", title: "LinkedIn URL" },
        { name: "google", type: "url", title: "Google Business Profile URL" },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "seo",
      title: "Default SEO",
      type: "object",
      description: "Default SEO settings for the entire site",
      fields: [
        {
          name: "metaTitle",
          type: "string",
          title: "Default Meta Title",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Default Meta Description",
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
          title: "Default Keywords",
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "trustBadges",
      title: "Trust Badges/Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Badge Name",
              description: 'E.g., "IICRC Certified"',
            },
            {
              name: "image",
              type: "image",
              title: "Badge Image",
            },
          ],
          preview: {
            select: {
              title: "name",
              media: "image",
            },
          },
        },
      ],
    }),
    defineField({
      name: "emergencyCTA",
      title: "Emergency CTA",
      type: "object",
      description: "Emergency call-to-action settings",
      fields: [
        {
          name: "headline",
          type: "string",
          title: "Headline",
          initialValue: "24/7 Emergency Service",
        },
        {
          name: "subheadline",
          type: "string",
          title: "Subheadline",
          initialValue: "Fast response when disaster strikes",
        },
        {
          name: "buttonText",
          type: "string",
          title: "Button Text",
          initialValue: "Call Now",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      }
    },
  },
})
