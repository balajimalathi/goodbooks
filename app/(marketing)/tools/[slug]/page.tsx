import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Star, Check, Zap } from "lucide-react"
import { TOOLS } from "@/config/tools"
import { PricingTable } from "@/components/tools/pricing-table"
import { ReviewCard, generatePlaceholderReviews } from "@/components/tools/review-card"
import { ToolCard } from "@/components/tools/tool-card"

interface ToolPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata(props: ToolPageProps) {
  const params = await props.params
  const tool = TOOLS.find((t) => t.slug === params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found",
    }
  }

  return {
    title: `${tool.name} - ${tool.tagline}`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - ${tool.tagline}`,
      description: tool.description,
      images: [tool.logo],
    },
  }
}

export default async function ToolPage(props: ToolPageProps) {
  const params = await props.params
  const tool = TOOLS.find((t) => t.slug === params.slug)

  if (!tool) {
    notFound()
  }

  const relatedTools = TOOLS.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 3)

  const alternativeTools = tool.alternatives
    ? TOOLS.filter((t) => tool.alternatives?.includes(t.slug)).slice(0, 3)
    : relatedTools

  const reviews = generatePlaceholderReviews(tool.name)

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b bg-muted/30">
        <div className="container py-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-12 md:py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border bg-card p-3 shadow-sm">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="flex items-center gap-2 font-heading text-3xl font-bold sm:text-4xl">
                    {tool.name}
                    {tool.verified && (
                      <span className="text-primary" title="Verified">
                        ✓
                      </span>
                    )}
                  </h1>
                  <p className="text-muted-foreground">{tool.tagline}</p>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{tool.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({tool.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                {tool.popular && (
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Popular
                  </span>
                )}
                {tool.new && (
                  <span className="inline-flex items-center rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                    New
                  </span>
                )}
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold">
                  {tool.category}
                </span>
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {tool.pricingModel}
                </span>
              </div>

              <p className="mb-6 text-lg leading-relaxed">{tool.longDescription}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={tool.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Visit {tool.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Official Website
                </a>
              </div>
            </div>

            {/* Quick Stats Sidebar */}
            <div className="space-y-4">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-semibold">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="font-medium">{tool.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Pricing Model</dt>
                    <dd className="font-medium">{tool.pricingModel}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Rating</dt>
                    <dd className="font-medium">{tool.rating}/5.0</dd>
                  </div>
                  {tool.subcategories && tool.subcategories.length > 0 && (
                    <div>
                      <dt className="mb-2 text-muted-foreground">Tags</dt>
                      <dd className="flex flex-wrap gap-1">
                        {tool.subcategories.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {tool.integrations && tool.integrations.length > 0 && (
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 font-heading text-lg font-semibold">Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.integrations.slice(0, 6).map((integration) => (
                      <span
                        key={integration}
                        className="inline-flex items-center rounded-md border bg-background px-2.5 py-1 text-xs font-medium"
                      >
                        {integration}
                      </span>
                    ))}
                    {tool.integrations.length > 6 && (
                      <span className="inline-flex items-center rounded-md border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        +{tool.integrations.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-6 font-heading text-2xl font-bold sm:text-3xl">Overview</h2>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed">{tool.longDescription}</p>
            <p className="mt-4 leading-relaxed">
              {tool.name} is a {tool.pricingModel.toLowerCase()} {tool.category.toLowerCase()} tool that helps teams and individuals build better products faster.
              With a {tool.rating}/5.0 rating from {tool.reviewCount.toLocaleString()} users, it's trusted by thousands of customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">Pros & Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-semibold text-green-600 dark:text-green-400">
                <Check className="h-5 w-5" />
                Pros
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>Intuitive interface - easy to learn and use</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>Comprehensive feature set for {tool.category.toLowerCase()}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>Great customer support and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <span>Regular updates and new features</span>
                </li>
                {tool.integrations && tool.integrations.length > 0 && (
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>Integrates with {tool.integrations.length}+ popular tools</span>
                  </li>
                )}
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-semibold text-yellow-600 dark:text-yellow-400">
                <span className="text-2xl">⚠️</span>
                Cons
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">•</span>
                  <span>Can be expensive for larger teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">•</span>
                  <span>Learning curve for advanced features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 dark:text-yellow-400">•</span>
                  <span>Some features only available in higher tiers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-lg border bg-card p-4 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Releases & Updates */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">Recent Updates</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Latest Release
                </span>
                <span className="text-sm text-muted-foreground">2 weeks ago</span>
              </div>
              <h3 className="mb-2 font-semibold">New features and improvements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Improved performance and loading times</li>
                <li>• New collaboration features for teams</li>
                <li>• Enhanced mobile experience</li>
                <li>• Bug fixes and stability improvements</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                  Previous Update
                </span>
                <span className="text-sm text-muted-foreground">1 month ago</span>
              </div>
              <h3 className="mb-2 font-semibold">Major feature release</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Added new automation capabilities</li>
                <li>• Improved integration with third-party tools</li>
                <li>• Enhanced security features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts (for AI tools) */}
      {tool.category === "AI & LLM" && (
        <section className="border-t bg-muted/30 py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">Popular Prompts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Code Generation</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  "Write a React component that displays a responsive navigation bar with dropdown menus"
                </p>
                <span className="text-xs text-muted-foreground">Used by 1.2k users</span>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Content Writing</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  "Create a blog post outline about no-code tools for startups, including key benefits and examples"
                </p>
                <span className="text-xs text-muted-foreground">Used by 890 users</span>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Data Analysis</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  "Analyze this CSV file and provide insights on user engagement trends"
                </p>
                <span className="text-xs text-muted-foreground">Used by 654 users</span>
              </div>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Problem Solving</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  "Debug this JavaScript error and suggest the best fix with explanation"
                </p>
                <span className="text-xs text-muted-foreground">Used by 1.5k users</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-heading text-2xl font-bold sm:text-3xl">Pricing Plans</h2>
            <p className="text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </div>
          <PricingTable
            tiers={tool.pricingTiers}
            toolName={tool.name}
            affiliateLink={tool.affiliateLink}
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 font-heading text-2xl font-bold sm:text-3xl">
                User Reviews
              </h2>
              <p className="text-muted-foreground">
                What people are saying about {tool.name}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{tool.rating}</span>
              <span className="text-muted-foreground">
                / 5.0 ({tool.reviewCount} reviews)
              </span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>What makes {tool.name} different from competitors?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tool.name} stands out with its {tool.pricingModel.toLowerCase()} pricing model, {tool.rating}/5.0 user rating, and comprehensive feature set.
                It's designed specifically for {tool.category.toLowerCase()} and integrates seamlessly with {tool.integrations?.length || 0}+ popular tools.
              </p>
            </details>
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>Is there a free trial or free plan available?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tool.pricingModel === "Free"
                  ? `Yes! ${tool.name} offers a completely free plan with ${tool.pricingTiers[0]?.features.length || "many"} features included.`
                  : tool.pricingModel === "Freemium"
                    ? `Yes! ${tool.name} offers a free plan to get started, with the option to upgrade for additional features and capacity.`
                    : `${tool.name} offers a free trial period to test all features before committing to a paid plan.`}
              </p>
            </details>
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>What integrations does {tool.name} support?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tool.integrations && tool.integrations.length > 0
                  ? `${tool.name} integrates with ${tool.integrations.length}+ popular tools including ${tool.integrations.slice(0, 3).join(", ")}, and many more.`
                  : `${tool.name} offers various integration options through API and webhooks, allowing you to connect with your favorite tools.`}
              </p>
            </details>
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>Is {tool.name} suitable for beginners?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Absolutely! {tool.name} is designed to be user-friendly for both beginners and advanced users.
                It offers extensive documentation, tutorials, and a supportive community to help you get started quickly.
              </p>
            </details>
            <details className="group rounded-xl border bg-card p-6 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between font-semibold">
                <span>What kind of customer support does {tool.name} offer?</span>
                <span className="text-muted-foreground transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tool.name} provides multiple support channels including email support, live chat, detailed documentation, video tutorials, and an active community forum.
                Premium plans may include priority support and dedicated account managers.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Alternatives/Related Tools */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="mb-2 font-heading text-2xl font-bold sm:text-3xl">
              {tool.alternatives ? "Similar Tools" : "Related Tools"}
            </h2>
            <p className="text-muted-foreground">
              Other {tool.category.toLowerCase()} tools you might like
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {alternativeTools.map((altTool) => (
              <ToolCard key={altTool.slug} tool={altTool} />
            ))}
          </div>
          {tool.alternatives && tool.alternatives.length > 3 && (
            <div className="mt-8 text-center">
              <Link
                href={`/alternatives/${tool.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View All Alternatives
                <Zap className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
