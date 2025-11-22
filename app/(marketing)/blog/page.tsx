import { allPosts } from "contentlayer/generated";
import { getBlurDataURL } from "@/lib/utils";
import { BlogPosts } from "@/components/content/blog-posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – RepoVox",
  description: "Latest news and updates from RepoVox.",
};

export default async function BlogPage() {
  const posts = await Promise.all(
    allPosts
      .filter((post) => post.published)
      .sort((a, b) => b.date.localeCompare(a.date))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  );

  return (
    <div className="container py-10">
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
          Blog
        </h1>
        <p className="text-muted-foreground">
          Tips, tutorials, and insights for web creators.
        </p>
      </div>
      <BlogPosts posts={posts} />
    </div>
  );
}
