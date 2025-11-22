export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "tutorials" | "comparisons" | "alternatives" | "guides" | "deepdive";
  description: string;
}[] = [
    {
      title: "News & Updates",
      slug: "news",
      description: "Latest news, tool releases, and updates from the no-code ecosystem.",
    },
    {
      title: "Tutorials",
      slug: "tutorials",
      description: "Step-by-step guides on building with no-code tools.",
    },
    {
      title: "Comparisons",
      slug: "comparisons",
      description: "Side-by-side comparisons of popular no-code tools.",
    },
    {
      title: "Alternatives",
      slug: "alternatives",
      description: "Discover alternatives to popular SaaS tools.",
    },
    {
      title: "Guides",
      slug: "guides",
      description: "Comprehensive guides and buyer's guides for choosing the right tools.",
    },
    {
      title: "Deep Dives",
      slug: "deepdive",
      description: "In-depth analysis and case studies of successful no-code projects.",
    },
  ];

export const BLOG_AUTHORS = {
  mickasmt: {
    name: "mickasmt",
    image: "/_static/avatars/mickasmt.png",
    twitter: "miickasmt",
  },
  shadcn: {
    name: "shadcn",
    image: "/_static/avatars/shadcn.jpeg",
    twitter: "shadcn",
  },
  balaji: {
    name: "balaji",
    image: "/_static/avatars/balaji.png",
    twitter: "balajimalathi_",
  },
};

