import Link from "next/link";
import { Post } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import Author from "@/components/content/author";
import BlurImage from "@/components/shared/blur-image";
import { cn } from "@/lib/utils";

export function BlogCard({
  data,
  priority,
  horizontale = false,
}: {
  data: Post & { blurDataURL: string };
  priority?: boolean;
  horizontale?: boolean;
}) {
  return (
    <article className={cn("group relative flex flex-col gap-4", horizontale && "md:grid md:grid-cols-2 md:gap-8")}>
      <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <BlurImage
          alt={data.title}
          src={data.image}
          blurDataURL={data.blurDataURL}
          priority={priority}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-500 transition-colors">
          {data.title}
        </h2>
        <p className="text-zinc-500 line-clamp-2">{data.description}</p>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex -space-x-2">
            {data.authors.map((author) => (
              <Author username={author} key={author} imageOnly />
            ))}
          </div>
          <p className="text-sm text-zinc-500">{formatDate(data.date)}</p>
        </div>
      </div>
      <Link href={data.slug} className="absolute inset-0" />
    </article>
  );
}
