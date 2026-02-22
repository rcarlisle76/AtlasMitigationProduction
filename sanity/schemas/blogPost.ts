import { defineType, defineField } from "sanity"

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'E.g., "What to Do Immediately After Water Damage"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postType",
      title: "Post Type",
      type: "string",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Vlog", value: "vlog" },
        ],
        layout: "radio",
      },
      initialValue: "article",
      description: "Choose whether this is a written article or a video blog (vlog)",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram Video URL",
      type: "url",
      description: "Paste the Instagram Reel or Post URL (e.g., https://www.instagram.com/reel/ABC123/)",
      hidden: ({ parent }) => parent?.postType !== "vlog",
      validation: (Rule) =>
        Rule.uri({ scheme: ["https"] }).custom((url, context) => {
          const parent = context.parent as { postType?: string }
          if (parent?.postType === "vlog" && !url) {
            return "Instagram URL is required for vlogs"
          }
          return true
        }),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Atlas Mitigation Team",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Brief summary for blog listing (150-160 characters)",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Water Damage", value: "water-damage" },
          { title: "Fire Damage", value: "fire-damage" },
          { title: "Mold Remediation", value: "mold" },
          { title: "Insurance", value: "insurance" },
          { title: "Prevention", value: "prevention" },
          { title: "Restoration Tips", value: "restoration-tips" },
        ],
      },
    }),
    defineField({
      name: "relatedServices",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      description: "Link to relevant services",
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
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
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "focusKeyword",
          type: "string",
          title: "Focus Keyword",
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
      category: "category",
      publishedAt: "publishedAt",
      featured: "featured",
      media: "featuredImage",
      postType: "postType",
    },
    prepare({ title, category, publishedAt, featured, media, postType }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString()
        : "No date"
      return {
        title: title,
        subtitle: `${postType === "vlog" ? "🎬 Vlog" : "📝 Article"} | ${category || "Uncategorized"} | ${date}${featured ? " ⭐ Featured" : ""}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: "Published Date (Newest First)",
      name: "publishedDateDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
})
