import type { Metadata } from "next"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { blogCategories } from "@/data/blog-posts"
import {
  getAllBlogPosts,
  getRecentBlogPosts,
} from "@/lib/sanity/fetch-with-fallback"
import { BlogListClient } from "./blog-list-client"

// Revalidate blog listing every 60 seconds so new posts appear without redeploying
export const revalidate = 60

export const metadata: Metadata = {
  title: "Restoration Tips & Guides Blog | Atlas Mitigation Atlanta GA",
  description:
    "Expert tips on water damage, fire restoration, mold prevention, and insurance claims. Professional guidance from Atlanta's restoration specialists.",
  openGraph: {
    title: "Restoration Tips & Guides Blog | Atlas Mitigation",
    description:
      "Expert tips on water damage, fire restoration, mold prevention, and insurance claims from Atlanta's restoration specialists.",
  },
}

export default async function BlogPage() {
  // Fetch from Sanity with fallback to local data
  const allPosts = await getAllBlogPosts()
  const recentPosts = await getRecentBlogPosts(5)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Restoration Tips & Guides
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Expert advice on water damage, fire restoration, mold prevention,
              and navigating insurance claims from Atlanta&apos;s trusted restoration
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Post Type + Category Filters (client-side) and Post Grid */}
      <BlogListClient posts={allPosts}>
        {/* Sidebar — rendered as a server component child */}
        <aside className="lg:col-span-4">
          <div className="sticky top-8 space-y-8">
            {/* Emergency CTA */}
            <Card className="border-atlas-primary/20 bg-atlas-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  Need Emergency Help?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  24/7 emergency restoration services available throughout
                  Atlanta metro area.
                </p>
                <Button variant="emergency" className="mt-4 w-full" asChild>
                  <a href="tel:+14048083677">Call (404) 808-3677</a>
                </Button>
                <Button
                  variant="outline"
                  className="mt-2 w-full"
                  size="sm"
                  asChild
                >
                  <Link href="/contact">Request Free Estimate</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Recent Articles</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-tight transition-colors group-hover:text-atlas-primary">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.datePublished).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(blogCategories).map(([key, { label }]) => {
                  const count = allPosts.filter(
                    (post) => post.category === key
                  ).length
                  return (
                    <Link
                      key={key}
                      href={`/blog?category=${key}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary"
                    >
                      <span>{label}</span>
                      <span className="text-muted-foreground">{count}</span>
                    </Link>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </aside>
      </BlogListClient>

      {/* CTA Section */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Professional Restoration Services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Don&apos;t wait when disaster strikes. Our certified technicians are
            ready to help 24/7 with water damage, fire damage, and mold
            remediation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="emergency"
              size="xl"
              className="bg-white text-atlas-primary hover:bg-white/90"
              asChild
            >
              <a href="tel:+14048083677">Call (404) 808-3677</a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-primary"
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
