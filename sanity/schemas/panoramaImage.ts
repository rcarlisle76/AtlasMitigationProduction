import { defineType, defineField } from "sanity"

export const panoramaImage = defineType({
  name: "panoramaImage",
  title: "360° Panorama Image",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'E.g., "Kitchen Water Damage Restoration"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "panoramaImage",
      title: "360° Panorama Image",
      type: "image",
      description:
        "Equirectangular 360° JPEG from Encircle or similar capture tool",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Custom Thumbnail",
      type: "image",
      description:
        "Optional custom thumbnail. If not provided, an auto-crop of the panorama image will be used.",
      options: { hotspot: true },
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Overlay caption shown on the 360° viewer",
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
      description: "Where this 360° photo was captured",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief project description",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show prominently in the gallery",
      initialValue: false,
    }),
    defineField({
      name: "captureDate",
      title: "Capture Date",
      type: "date",
      description: "When the 360° photo was taken",
    }),
  ],
  preview: {
    select: {
      title: "title",
      service: "service.title",
      thumbnail: "thumbnail",
      panorama: "panoramaImage",
    },
    prepare({ title, service, thumbnail, panorama }) {
      return {
        title: title,
        subtitle: service || "No service assigned",
        media: thumbnail || panorama,
      }
    },
  },
  orderings: [
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "captureDate", direction: "desc" },
      ],
    },
    {
      title: "Capture Date (Newest)",
      name: "captureDateDesc",
      by: [{ field: "captureDate", direction: "desc" }],
    },
  ],
})
