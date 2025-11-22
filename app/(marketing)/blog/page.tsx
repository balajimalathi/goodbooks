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

  return <BlogPosts posts={posts} />;
}
