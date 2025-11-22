import { allNews } from "contentlayer/generated"
import { Mdx } from "@/components/content/mdx-components"
import { getTableOfContents } from "@/lib/toc"
import { getBlurDataURL, formatDate } from "@/lib/utils"
import Author from "@/components/content/author"
import BlurImage from "@/components/shared/blur-image"
import { DashboardTableOfContents } from "@/components/shared/toc"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

export async function generateStaticParams() {
  return allNews.map((post) => ({
    slug: post.slugAsParams,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = allNews.find((post) => post.slugAsParams === slug)

  if (!post) {
    return {
      title: "News Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://goodbooks.io/updates/${post.slugAsParams}`,
      images: [
        {
          url: post.image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = allNews.find((post) => post.slugAsParams === slug)

  if (!post) {
    notFound()
  }

  const toc = await getTableOfContents(post.body.raw)

  const [thumbnailBlurhash, images] = await Promise.all([
    post.image ? getBlurDataURL(post.image) : Promise.resolve(''),
    await Promise.all(
      (post.images || []).filter(Boolean).map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      }))
    ),
  ])

  const relatedNews = allNews
    .filter((p) => p.slugAsParams !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen pb-20">
      {/* Back Button */}
      <div className="border-b">
        <div className="container py-4">
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Updates
          </Link>
        </div>
      </div>

      <article className="container relative max-w-5xl py-10 lg:py-14">
        {/* Header section */}
        <div className="flex flex-col items-start gap-6 border-b border-zinc-200 pb-10 dark:border-zinc-700">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              News
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {post.description}
          </p>

          <div className="flex items-center gap-4 pt-2">
            {post.authors && post.authors.map((author) => (
              <Author username={author} key={author} />
            ))}
          </div>
        </div>

        {/* Main content with TOC */}
        <div className="relative mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
          <div className="min-w-0">
            <BlurImage
              src={post.image!}
              alt={post.title}
              width={1200}
              height={630}
              className="mb-10 rounded-xl border bg-muted transition-colors"
              priority
              blurDataURL={thumbnailBlurhash}
            />

            <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
              <Mdx code={post.body.code} images={images} />
            </div>
          </div>

          <div className="hidden text-sm lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  On this page
                </h3>
                <DashboardTableOfContents toc={toc} />
              </div>

              {/* Share Widget could go here */}
            </div>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-20 border-t pt-12">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold">Related News</h2>
              <Link href="/updates" className="text-sm font-medium text-primary hover:underline">
                View all updates
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((item) => (
                <Link key={item._id} href={`/updates/${item.slugAsParams}`} className="group block space-y-3">
                  <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
                    {item.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>
                    <h3 className="font-heading text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
