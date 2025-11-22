"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BLOG_CATEGORIES } from "@/config/blog";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { cn } from "@/lib/utils";

function CategoryLink({ title, href, active }: { title: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
      )}
    >
      {title}
    </Link>
  );
}

export function BlogHeaderLayout() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = BLOG_CATEGORIES.find((category) => category.slug === slug);

  return (
    <div className="border-b border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/50 sticky top-0 z-40">
      <MaxWidthWrapper className="py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{data?.title || "Blog"}</h1>
            <p className="mt-1 text-zinc-500">{data?.description || "Latest news and updates."}</p>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <CategoryLink title="All" href="/blog" active={!slug} />
            {BLOG_CATEGORIES.map((category) => (
              <CategoryLink
                key={category.slug}
                title={category.title}
                href={`/blog/category/${category.slug}`}
                active={category.slug === slug}
              />
            ))}
          </nav>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
