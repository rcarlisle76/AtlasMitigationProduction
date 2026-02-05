import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowRight, Phone, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  blogPosts,
  getRelatedPosts,
  blogCategories,
} from "@/data/blog-posts"
import { getBlogPostBySlug } from "@/lib/sanity/fetch-with-fallback"
import { ArticleSchema } from "@/components/seo"
import { PortableText } from "@/components/sanity/PortableText"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      authors: [post.author.name],
    },
  }
}

function renderContentBlock(block: string, index: number) {
  if (block.startsWith("## ")) {
    return (
      <h2 key={index} className="mt-8 text-2xl font-bold first:mt-0">
        {block.replace("## ", "")}
      </h2>
    )
  } else if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="mt-6 text-xl font-semibold">
        {block.replace("### ", "")}
      </h3>
    )
  } else if (block.startsWith("- ")) {
    const items = block.split("\n").map((item, i) => (
      <li key={i}>{item.replace("- ", "")}</li>
    ))
    return (
      <ul key={index} className="my-4 list-disc space-y-2 pl-6">
        {items}
      </ul>
    )
  } else if (block.match(/^\d+\. /)) {
    const items = block.split("\n").map((item, i) => {
      if (item.match(/^\d+\. /)) {
        return <li key={i}>{item.replace(/^\d+\. /, "")}</li>
      }
      return null
    })
    return (
      <ol key={index} className="my-4 list-decimal space-y-2 pl-6">
        {items}
      </ol>
    )
  } else if (block.startsWith("**") && block.endsWith("**")) {
    return (
      <p key={index} className="my-4 font-bold">
        {block.replace(/\*\*/g, "")}
      </p>
    )
  } else {
    return (
      <p key={index} className="my-4 text-lg leading-relaxed">
        {block}
      </p>
    )
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedPosts
    ? getRelatedPosts(post.relatedPosts)
    : []
  const categoryInfo = blogCategories[post.category]

  // Check if content is portable text (array) or string (local data)
  const isPortableText = Array.isArray(post.content)
  const contentBlocks = isPortableText ? [] : (post.content as string).split("\n\n")

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        author={post.author.name}
      />

      {/* Hero Section */}
      <section className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-atlas-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-atlas-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          {/* Category Badge */}
          <Badge className={categoryInfo.color} variant="outline">
            {categoryInfo.label}
          </Badge>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>
                {post.author.name}
                {post.author.role && `, ${post.author.role}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-lg font-medium">Featured Image</div>
                <div className="text-sm">{post.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Article Content */}
            <article className="lg:col-span-8">
              {isPortableText ? (
                <PortableText value={post.content as any[]} />
              ) : (
                <div className="prose prose-lg max-w-none">
                  {contentBlocks.map((block, index) =>
                    renderContentBlock(block, index)
                  )}
                </div>
              )}

              <Separator className="my-12" />

              {/* Share Section */}
              <div className="flex items-center justify-between rounded-lg border bg-secondary/50 p-6">
                <div>
                  <h3 className="font-semibold">Share this article</h3>
                  <p className="text-sm text-muted-foreground">
                    Help others by sharing this restoration guide
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              <Separator className="my-12" />

              {/* Author Bio */}
              <div className="rounded-lg border bg-muted/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-atlas-primary text-2xl font-bold text-white">
                    {post.author.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{post.author.name}</h3>
                    {post.author.role && (
                      <p className="text-sm text-muted-foreground">
                        {post.author.role}
                      </p>
                    )}
                    <p className="mt-2 text-sm">
                      Expert restoration professionals serving the Atlanta metro
                      area with over 20 years of combined experience in water
                      damage, fire restoration, and mold remediation.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-8 space-y-8">
                {/* Emergency CTA */}
                <Card className="border-atlas-primary bg-atlas-primary text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">
                      Need Immediate Help?
                    </h3>
                    <p className="mt-2 text-sm text-white/90">
                      24/7 emergency restoration services. Our team responds
                      within 60 minutes.
                    </p>
                    <Button
                      variant="emergency"
                      className="mt-4 w-full bg-white text-atlas-primary hover:bg-white/90"
                      asChild
                    >
                      <a href="tel:+14048083677" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Call (404) 808-3677
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="mt-2 w-full border-white bg-transparent text-white hover:bg-white hover:text-atlas-primary"
                      size="sm"
                      asChild
                    >
                      <Link href="/contact">Request Free Estimate</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold">Quick Actions</h3>
                    <div className="space-y-2">
                      <Link href="/services" className="block">
                        <Button variant="outline" className="w-full" size="sm">
                          View All Services
                        </Button>
                      </Link>
                      <Link href="/blog" className="block">
                        <Button variant="outline" className="w-full" size="sm">
                          Read More Articles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-secondary py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Related Articles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Continue learning about restoration and property damage prevention
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => {
                const relatedCategoryInfo = blogCategories[related.category]
                return (
                  <Card
                    key={related.slug}
                    className="group transition-shadow hover:shadow-lg"
                  >
                    <div className="aspect-video bg-muted">
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        <div className="text-center">
                          <div className="text-xs font-medium">
                            Featured Image
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge
                        className={`mb-3 ${relatedCategoryInfo.color}`}
                        variant="outline"
                      >
                        {relatedCategoryInfo.label}
                      </Badge>
                      <h3 className="text-lg font-semibold leading-tight">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {related.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(related.datePublished).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {related.readTime} min
                        </div>
                      </div>
                      <Link
                        href={`/blog/${related.slug}`}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-atlas-primary hover:underline"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Don't Wait Until It's Too Late
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Water damage, fire damage, and mold problems get worse with time.
            Contact our certified restoration specialists for immediate help or
            a free inspection.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="emergency"
              size="xl"
              className="bg-white text-atlas-primary hover:bg-white/90"
              asChild
            >
              <a href="tel:+14048083677" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (404) 808-3677
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-primary"
              asChild
            >
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
