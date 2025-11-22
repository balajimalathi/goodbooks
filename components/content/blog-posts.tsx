import { Post } from "contentlayer/generated";
import { BlogCard } from "@/components/content/blog-card";

export function BlogPosts({
  posts,
}: {
  posts: (Post & { blurDataURL: string })[];
}) {
  if (!posts.length) {
    return <p className="text-zinc-500">No posts found.</p>;
  }

  return (
    <main className="space-y-12">
      {/* Featured post - horizontal layout */}
      <BlogCard data={posts[0]} horizontale priority />
      {/* Grid of remaining posts */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.slice(1).map((post, idx) => (
          <BlogCard data={post} key={post._id} priority={idx <= 2} />
        ))}
      </div>
    </main>
  );
}
