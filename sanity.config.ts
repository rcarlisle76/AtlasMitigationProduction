import { defineConfig } from "sanity"
import { structureTool, type StructureBuilder } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"

// Sanity project configuration
const projectId = "prkqtff7"
const dataset = "production"

export default defineConfig({
  name: "atlas-mitigation",
  title: "Atlas Mitigation CMS",

  projectId,
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      name: "structure",
      title: "Content",
      structure: (S: StructureBuilder) =>
        S.list()
          .title("Content")
          .items([
            // Site Settings (Singleton)
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // Services
            S.documentTypeListItem("service").title("Services"),
            // Locations
            S.documentTypeListItem("location").title("Service Locations"),
            S.divider(),
            // Gallery
            S.documentTypeListItem("galleryItem").title("Before/After Gallery"),
            // Blog
            S.documentTypeListItem("blogPost").title("Blog Posts"),
            // Testimonials
            S.documentTypeListItem("testimonial").title("Testimonials"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
