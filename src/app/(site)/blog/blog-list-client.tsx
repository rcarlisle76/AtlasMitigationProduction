"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogCategories, type BlogCategory, type BlogPost } from "@/data/blog-posts"

type PostTypeFilter = "all" | "article" | "vlog"

interface BlogListClientProps {
  posts: BlogPost[]
  children?: ReactNode
}

export function BlogListClient({ posts, children }: BlogListClientProps) {
  const [activePostType, setActivePostType] = useState<PostTypeFilter>("all")
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(null)

  const filteredPosts = posts
    .filter((post) => {
      if (activePostType !== "all" && post.postType !== activePostType) return false
      if (activeCategory && post.category !== activeCategory) return false
      return true
    })
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    )

  return (
    <>
      {/* Post Type Tabs + Category Filter */}
      <section className="border-b bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Post Type Tabs */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Type:
            </span>
            {(
              [
                { value: "all", label: "All" },
                { value: "article", label: "Articles" },
                { value: "vlog", label: "Vlogs" },
              ] as const
            ).map(({ value, label }) => (
              <Button
                key={value}
                variant={activePostType === value ? "default" : "outline"}
                size="sm"
                onClick={() => setActivePostType(value)}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Filter by category:
            </span>
            <Button
              variant={!activeCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
            >
              All Posts
            </Button>
            {Object.entries(blogCategories).map(([key, { label }]) => (
              <Button
                key={key}
                variant={activeCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(key as BlogCategory)}
              >
                {label}
              </Button>
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
              {(activeCategory || activePostType !== "all") && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">
                    {activeCategory
                      ? blogCategories[activeCategory].label
                      : activePostType === "vlog"
                        ? "Vlog"
                        : activePostType === "article"
                          ? "Article"
                          : "All"}{" "}
                    Posts
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {filteredPosts.length} post
                    {filteredPosts.length !== 1 ? "s" : ""} found
                  </p>
                </div>
              )}

              <div className="grid gap-8">
                {filteredPosts.map((post) => {
                  const categoryInfo = post.category
                    ? blogCategories[post.category]
                    : null
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
                                  {post.category
                                    ? post.category.replace("-", " ")
                                    : "General"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-8">
                          <CardHeader className="p-6 pb-4">
                            <div className="mb-3 flex items-center gap-3">
                              {categoryInfo && (
                                <Badge
                                  className={categoryInfo.color}
                                  variant="outline"
                                >
                                  {categoryInfo.label}
                                </Badge>
                              )}
                              {post.postType === "vlog" && (
                                <Badge
                                  className="bg-pink-100 text-pink-800 border-pink-200"
                                  variant="outline"
                                >
                                  <Video className="mr-1 h-3 w-3" />
                                  Vlog
                                </Badge>
                              )}
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
                                {new Date(
                                  post.datePublished
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
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

              {filteredPosts.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No posts found matching the selected filters.
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => {
                      setActivePostType("all")
                      setActiveCategory(null)
                    }}
                  >
                    View All Posts
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar (passed as children from server component) */}
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
