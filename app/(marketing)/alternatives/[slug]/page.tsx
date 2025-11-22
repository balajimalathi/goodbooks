import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Star } from "lucide-react"
import { TOOLS } from "@/config/tools"
import { ComparisonTable } from "@/components/tools/comparison-table"
import { ToolCard } from "@/components/tools/tool-card"

interface AlternativePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata(props: AlternativePageProps) {
  const params = await props.params
  const tool = TOOLS.find((t) => t.slug === params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found",
    }
  }

  return {
    title: `${tool.name} Alternatives & Comparisons`,
    description: `Compare ${tool.name} with top alternatives. Detailed feature comparison, pricing, pros & cons, and user reviews.`,
    openGraph: {
      title: `${tool.name} Alternatives & Comparisons`,
      description: `Compare ${tool.name} with top alternatives in ${tool.category}.`,
      images: [tool.logo],
    },
  }
}

export default async function AlternativePage(props: AlternativePageProps) {
  const params = await props.params
  const tool = TOOLS.find((t) => t.slug === params.slug)

  if (!tool) {
    notFound()
  }

  // Get alternatives or tools from same category
  const alternativeTools = tool.alternatives
    ? TOOLS.filter((t) => tool.alternatives?.includes(t.slug))
    : TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 3)

  // Create comparison set (main tool + alternatives)
  const comparisonTools = [tool, ...alternativeTools.slice(0, 3)]

  // Collect all unique features for comparison
  const allFeatures = Array.from(
    new Set(
      comparisonTools.flatMap((t) => t.features)
    )
  ).slice(0, 10)

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b bg-muted/30">
        <div className="container py-4">
          <Link
            href="/alternatives"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Alternatives
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium">
              💡 Comparison
            </div>
            <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {tool.name} Alternatives
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Compare {tool.name} with {alternativeTools.length} top alternatives in {tool.category.toLowerCase()}.
              Find the best tool for your needs with detailed feature comparisons and pricing breakdowns.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded border bg-background p-1">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold">{tool.name}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{tool.rating}</span>
                  </div>
                </div>
              </div>
              <span className="text-muted-foreground">vs</span>
              {alternativeTools.slice(0, 3).map((alt) => (
                <div key={alt.slug} className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded border bg-background p-1">
                    <img
                      src={alt.logo}
                      alt={alt.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{alt.name}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{alt.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            Feature Comparison
          </h2>
          <ComparisonTable tools={comparisonTools} features={allFeatures} />
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            Quick Overview
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {comparisonTools.map((t) => (
              <div key={t.slug} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background p-2">
                      <img
                        src={t.logo}
                        alt={t.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{t.name}</h3>
                      <p className="text-xs text-muted-foreground">{t.tagline}</p>
                    </div>
                  </div>
                  {t.slug === tool.slug && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Original
                    </span>
                  )}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{t.description}</p>
                <div className="mb-4 grid grid-cols-2 gap-4 rounded-lg border bg-muted/30 p-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Pricing</div>
                    <div className="font-semibold">{t.pricingModel}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                    <div className="flex items-center gap-1 font-semibold">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {t.rating}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/tools/${t.slug}`}
                    className="flex-1 inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    View Details
                  </Link>
                  <a
                    href={t.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Try {t.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Alternatives */}
      {alternativeTools.length > 3 && (
        <section className="border-t py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
              More {tool.category} Tools
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {alternativeTools.slice(3).map((alt) => (
                <ToolCard key={alt.slug} tool={alt} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            Common Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>What's the best alternative to {tool.name}?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The best alternative depends on your specific needs. {alternativeTools[0]?.name || "Other tools"} offers similar features
                with {alternativeTools[0]?.pricingModel.toLowerCase() || "different"} pricing. Consider your budget, team size, and required features when choosing.
              </p>
            </details>
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>How do these tools compare in terms of pricing?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tool.name} is {tool.pricingModel.toLowerCase()}, with plans starting at {
                  tool.pricingTiers[0].price === 0 ? "free" : `$${tool.pricingTiers[0].price}/${tool.pricingTiers[0].period}`
                }. Use the comparison table above to see detailed pricing for all alternatives.
              </p>
            </details>
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>Which tool has the best user ratings?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {(() => {
                  const highest = comparisonTools.reduce((prev, current) =>
                    current.rating > prev.rating ? current : prev
                  )
                  return `${highest.name} has the highest rating at ${highest.rating}/5.0 with ${highest.reviewCount.toLocaleString()} reviews.`
                })()}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
