import { defineType, defineField } from "sanity"

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Name",
      type: "string",
      description: 'E.g., "Water Damage Restoration" or "Fire Damage Cleanup"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Auto-generated URL (e.g., water-damage-restoration)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief summary for cards and meta descriptions (150-160 characters)",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed service information with formatting",
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name (e.g., droplet, flame, bacteria, wind)",
      options: {
        list: [
          { title: "Droplet (Water)", value: "droplet" },
          { title: "Flame (Fire)", value: "flame" },
          { title: "Bug (Mold)", value: "bug" },
          { title: "Wind (Smoke)", value: "wind" },
          { title: "Cloud Rain (Storm)", value: "cloud-rain" },
          { title: "Alert Triangle (Emergency)", value: "alert-triangle" },
          { title: "Building (Commercial)", value: "building" },
          { title: "Wrench (General)", value: "wrench" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Service",
      type: "boolean",
      description: "Show prominently on homepage",
      initialValue: false,
    }),
    defineField({
      name: "emergency",
      title: "24/7 Emergency Service",
      type: "boolean",
      description: "Available for emergency calls",
      initialValue: true,
    }),
    defineField({
      name: "processSteps",
      title: "Service Process Steps",
      type: "array",
      description: "Step-by-step process for this service",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "step",
              type: "string",
              title: "Step Number",
              description: 'E.g., "1", "2", "3"',
            },
            {
              name: "title",
              type: "string",
              title: "Step Title",
              description: 'E.g., "Initial Assessment"',
            },
            {
              name: "description",
              type: "text",
              title: "Step Description",
              rows: 3,
            },
          ],
          preview: {
            select: {
              step: "step",
              title: "title",
            },
            prepare({ step, title }) {
              return {
                title: `Step ${step}: ${title}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: "benefits",
      title: "Key Benefits",
      type: "array",
      of: [{ type: "string" }],
      description: 'List of benefits (e.g., "Fast response time", "Certified professionals")',
    }),
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the image for accessibility and SEO",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "targetMarket",
      title: "Target Market",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "High-End Residential", value: "high-end-residential" },
          { title: "Commercial Properties", value: "commercial" },
          { title: "Large Properties", value: "large-properties" },
          { title: "Multi-Family", value: "multi-family" },
          { title: "Industrial", value: "industrial" },
        ],
      },
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          type: "string",
          title: "Meta Title",
          description: "Custom title for search engines (50-60 characters)",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          description: "Custom description for search results (150-160 characters)",
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
          title: "Focus Keywords",
          description: "Target keywords for this service",
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      featured: "featured",
      emergency: "emergency",
      media: "image",
    },
    prepare({ title, featured, emergency, media }) {
      return {
        title: title,
        subtitle: `${featured ? "Featured " : ""}${emergency ? "24/7 Emergency" : ""}`,
        media: media,
      }
    },
  },
})
