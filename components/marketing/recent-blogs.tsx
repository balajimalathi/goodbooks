import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { BlogCard } from "@/components/content/blog-card"
import { ArrowRight } from "lucide-react"
import { getBlurDataURL } from "@/lib/utils"

export async function RecentBlogs() {
  const recentPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  const posts = await Promise.all(
    recentPosts.map(async (post) => ({
      ...post,
      blurDataURL: await getBlurDataURL(post.image),
    }))
  )

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Latest from the blog
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tips, tutorials, and insights for web creators.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center text-sm font-medium text-primary hover:underline md:flex"
          >
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} data={post} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="flex items-center text-sm font-medium text-primary hover:underline"
          >
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

