import Link from "next/link";
import { BLOG_AUTHORS } from "@/config/blog";
import BlurImage from "@/components/shared/blur-image";

export default function Author({
  username,
  imageOnly,
}: {
  username: string;
  imageOnly?: boolean;
}) {
  const author = BLOG_AUTHORS[username as keyof typeof BLOG_AUTHORS];
  if (!author) return null;

  return imageOnly ? (
    <BlurImage
      src={author.image}
      alt={author.name}
      width={32}
      height={32}
      className="rounded-full h-8 w-8"
    />
  ) : (
    <Link href={`https://twitter.com/${author.twitter}`} className="flex items-center gap-2 group">
      <BlurImage src={author.image} alt={author.name} width={40} height={40} className="rounded-full h-10 w-10" />
      <div>
        <p className="text-sm font-medium group-hover:text-indigo-500 transition-colors">{author.name}</p>
        <p className="text-xs text-zinc-500">@{author.twitter}</p>
      </div>
    </Link>
  );
}
