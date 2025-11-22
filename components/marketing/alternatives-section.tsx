import Link from "next/link"

const ALTERNATIVES = [
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Shopify", slug: "shopify" },
  { name: "Wix", slug: "wix" },
  { name: "Squarespace", slug: "squarespace" },
]

export function AlternativesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Find the perfect alternative
          </h2>
          <p className="mt-4 text-muted-foreground">
            Compare top tools and find the right fit for your next project.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {ALTERNATIVES.map((alt) => (
            <Link
              key={alt.slug}
              href={`/blog/alternatives-to-${alt.slug}`}
              className="group flex h-24 flex-col items-center justify-center rounded-xl border bg-card p-4 text-center transition-colors hover:border-primary hover:bg-primary/5"
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                Alternatives to
              </span>
              <span className="font-heading text-lg font-bold">{alt.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
