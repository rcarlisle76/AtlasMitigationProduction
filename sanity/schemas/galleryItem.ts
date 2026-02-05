import { defineType, defineField } from "sanity"

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Before/After Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      description: 'E.g., "Water Damage Restoration - Luxury Home in Acworth"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service",
      title: "Service Type",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
      description: "Where this project was completed",
    }),
    defineField({
      name: "beforeImage",
      title: "Before Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the damage shown",
        },
      ],
    }),
    defineField({
      name: "afterImage",
      title: "After Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the restored condition",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
      rows: 4,
      description: "Brief description of the project and restoration work",
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      description: "Show prominently on homepage and gallery",
      initialValue: false,
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),
    defineField({
      name: "stats",
      title: "Project Stats",
      type: "object",
      fields: [
        {
          name: "duration",
          type: "string",
          title: "Project Duration",
          description: 'E.g., "3 days", "1 week"',
        },
        {
          name: "area",
          type: "string",
          title: "Area Affected",
          description: 'E.g., "2,500 sq ft", "Entire basement"',
        },
        {
          name: "timeToComplete",
          type: "string",
          title: "Time to Complete",
          description: 'E.g., "Completed in 72 hours"',
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "High-End Residential", value: "high-end-residential" },
          { title: "Commercial", value: "commercial" },
          { title: "Large Property", value: "large-property" },
          { title: "Multi-Family", value: "multi-family" },
          { title: "Industrial", value: "industrial" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      service: "service.title",
      featured: "featured",
      media: "beforeImage",
    },
    prepare({ title, service, featured, media }) {
      return {
        title: title,
        subtitle: `${service || "No service"}${featured ? " - Featured" : ""}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: "Completion Date (Newest First)",
      name: "completionDateDesc",
      by: [{ field: "completionDate", direction: "desc" }],
    },
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "completionDate", direction: "desc" },
      ],
    },
  ],
})
