import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogPostSkeleton } from "@/components/ui/skeleton"
import { blogCategories, type BlogCategory } from "@/data/blog-posts"
import {
  getAllBlogPosts,
  getRecentBlogPosts,
} from "@/lib/sanity/fetch-with-fallback"

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

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const selectedCategory = params.category as BlogCategory | undefined

  // Fetch from Sanity with fallback to local data
  const allPosts = await getAllBlogPosts()

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts

  const sortedPosts = filteredPosts.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )

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
              and navigating insurance claims from Atlanta's trusted restoration
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Filter by category:
            </span>
            <Link href="/blog">
              <Button
                variant={!selectedCategory ? "default" : "outline"}
                size="sm"
              >
                All Posts
              </Button>
            </Link>
            {Object.entries(blogCategories).map(([key, { label }]) => (
              <Link key={key} href={`/blog?category=${key}`}>
                <Button
                  variant={selectedCategory === key ? "default" : "outline"}
                  size="sm"
                >
                  {label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-8">
              {selectedCategory && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    {blogCategories[selectedCategory].label} Articles
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {sortedPosts.length} article
                    {sortedPosts.length !== 1 ? "s" : ""} found
                  </p>
                </div>
              )}

              <div className="grid gap-8">
                {sortedPosts.map((post) => {
                  const categoryInfo = blogCategories[post.category]
                  return (
                    <Card
                      key={post.slug}
                      className="group overflow-hidden transition-shadow hover:shadow-lg"
                    >
                      <div className="grid gap-6 md:grid-cols-12">
                        {/* Featured Image Placeholder */}
                        <div className="md:col-span-4">
                          <div className="aspect-video bg-muted md:aspect-square md:h-full">
                            <div className="flex h-full items-center justify-center text-muted-foreground">
                              <div className="text-center">
                                <div className="text-sm font-medium">
                                  Featured Image
                                </div>
                                <div className="text-xs">
                                  {post.category.replace("-", " ")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-8">
                          <CardHeader className="p-6 pb-4">
                            <div className="mb-3 flex items-center gap-3">
                              <Badge
                                className={categoryInfo.color}
                                variant="outline"
                              >
                                {categoryInfo.label}
                              </Badge>
                            </div>
                            <Link href={`/blog/${post.slug}`}>
                              <h2 className="text-2xl font-bold leading-tight transition-colors group-hover:text-atlas-primary">
                                {post.title}
                              </h2>
                            </Link>
                          </CardHeader>
                          <CardContent className="p-6 pt-0">
                            <p className="mb-4 text-muted-foreground">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.datePublished).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readTime} min read
                              </div>
                            </div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-atlas-primary hover:underline"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>

              {sortedPosts.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No articles found in this category.
                  </p>
                  <Link href="/blog" className="mt-4 inline-block">
                    <Button>View All Posts</Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Professional Restoration Services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Don't wait when disaster strikes. Our certified technicians are
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
