import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/content/mdx-components";
import { getTableOfContents } from "@/lib/toc";
import { getBlurDataURL, formatDate } from "@/lib/utils";
import Author from "@/components/content/author";
import BlurImage from "@/components/shared/blur-image";
import { DashboardTableOfContents } from "@/components/shared/toc";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  const toc = await getTableOfContents(post.body.raw);

  const [thumbnailBlurhash, images] = await Promise.all([
    getBlurDataURL(post.image),
    await Promise.all(
      post.images.map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      })),
    ),
  ]);

  const relatedArticles = allPosts
    .filter((p) => post.related && post.related.includes(p.slugAsParams))
    .map((p) => ({
      ...p,
      blurDataURL: "", // In a real app, fetch this
    }));

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10 mx-auto">
      {/* Header section with metadata */}
      <div className="flex flex-col items-start gap-4 border-b border-zinc-200 pb-8 dark:border-zinc-700">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <Link href="/blog" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
            Back to blog
          </Link>
        </div>
        <h1 className="inline-block font-heading text-4xl font-bold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">{post.description}</p>
        <div className="flex items-center gap-4">
          {post.authors.map((author) => (
            <Author username={author} key={author} />
          ))}
        </div>
      </div>

      {/* Main content with TOC */}
      <div className="relative mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_200px]">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <BlurImage
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-zinc-100 transition-colors dark:bg-zinc-800"
            priority
            blurDataURL={thumbnailBlurhash}
          />
          <div className="block lg:hidden text-md">

            <DashboardTableOfContents toc={toc} />

          </div>
          <Mdx code={post.body.code} images={images} />
        </div>
        <div className="hidden text-sm lg:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-12 border-t pt-8">
          <h3 className="text-2xl font-bold">Related Articles</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedArticles.map((post) => (
              <Link key={post._id} href={post.slug} className="group flex flex-col gap-2">
                <h4 className="font-medium group-hover:underline">{post.title}</h4>
                <p className="text-sm text-zinc-500 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
