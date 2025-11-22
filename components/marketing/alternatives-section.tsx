import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ALTERNATIVES = [
  { name: "Zapier", slug: "zapier", category: "Automation" },
  { name: "Webflow", slug: "webflow", category: "Website Builder" },
  { name: "Notion", slug: "notion", category: "Productivity" },
  { name: "Airtable", slug: "airtable", category: "Database" },
  { name: "Bubble", slug: "bubble", category: "App Builder" },
  { name: "Shopify", slug: "shopify", category: "E-commerce" },
]

export function AlternativesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium">
            🔍 Comparisons
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            Find the Perfect Alternative
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Not sure which tool is right for you? Compare alternatives and make an informed decision.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALTERNATIVES.map((alt) => (
            <Link
              key={alt.slug}
              href={`/alternatives/${alt.slug}`}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary"
            >
              <div className="mb-2 text-xs font-medium text-muted-foreground">
                {alt.category}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                {alt.name} Alternatives
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Compare features, pricing, and alternatives to {alt.name}
              </p>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                View Comparison
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/alternatives"
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View All Comparisons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
