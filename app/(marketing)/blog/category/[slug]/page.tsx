import { allPosts } from "contentlayer/generated";
import { BLOG_CATEGORIES } from "@/config/blog";
import { getBlurDataURL } from "@/lib/utils";
import { BlogCard } from "@/components/content/blog-card";

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export default async function BlogCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((ctg) => ctg.slug === slug);

  const articles = await Promise.all(
    allPosts
      .filter((post) => {
        const categories = post.categories.map((category) =>
          category.replaceAll("\r", "")
        );
        return categories.includes(slug);
      })
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, idx) => (
        <BlogCard key={article._id} data={article} priority={idx <= 2} />
      ))}
    </div>
  );
}
