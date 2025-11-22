import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import { TOOLS } from "@/config/tools"

export const metadata = {
  title: "Tool Alternatives & Comparisons",
  description: "Compare popular no-code tools side-by-side. Find the best alternative for your needs.",
}

// Group tools by category for alternatives
const alternativeGroups = [
  {
    title: "Website Builder Alternatives",
    description: "Compare no-code website builders",
    tools: TOOLS.filter((t) => t.category === "Website Builder"),
    slug: "website-builders",
  },
  {
    title: "E-commerce Platform Alternatives",
    description: "Compare e-commerce and online store platforms",
    tools: TOOLS.filter((t) => t.category === "E-commerce"),
    slug: "ecommerce",
  },
  {
    title: "Automation Tool Alternatives",
    description: "Compare workflow automation platforms",
    tools: TOOLS.filter((t) => t.category === "Automation"),
    slug: "automation",
  },
  {
    title: "Design Tool Alternatives",
    description: "Compare design and creative tools",
    tools: TOOLS.filter((t) => t.category === "Design"),
    slug: "design",
  },
  {
    title: "AI & LLM Alternatives",
    description: "Compare AI and language model tools",
    tools: TOOLS.filter((t) => t.category === "AI & LLM"),
    slug: "ai-llm",
  },
]

export default function AlternativesPage() {
  // Get all popular tools for featured comparisons
  const popularTools = TOOLS.filter((t) => t.popular).slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium">
              🔍 Comparisons
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find the Best Alternative
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Compare popular no-code tools side-by-side. Discover the perfect alternative
              with detailed feature comparisons, pricing breakdowns, and user ratings.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>Updated daily with the latest tool information</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            Popular Comparisons
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/alternatives/${tool.slug}`}
                className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background p-2">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{tool.name} Alternatives</h3>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  Compare {tool.name} with top alternatives. See features, pricing, and reviews.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>⭐ {tool.rating}</span>
                    <span>·</span>
                    <span>{tool.pricingModel}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Category */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            Browse by Category
          </h2>
          <div className="space-y-6">
            {alternativeGroups.filter((group) => group.tools.length > 0).map((group) => (
              <div key={group.slug} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="mb-1 font-heading text-xl font-semibold">
                      {group.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {group.tools.length} tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/alternatives/${tool.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      <div className="flex h-6 w-6 items-center justify-center">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span>{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
              Can't find what you're looking for?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Browse our complete directory of {TOOLS.length}+ no-code and low-code tools.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Browse All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
