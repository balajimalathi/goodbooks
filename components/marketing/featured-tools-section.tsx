import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TOOLS } from "@/config/tools"
import { ToolCard } from "@/components/tools/tool-card"

export function FeaturedToolsSection() {
  const featuredTools = TOOLS.filter((tool) => tool.popular).slice(0, 6)

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium">
            ⭐ Featured
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Popular No-Code Tools
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            The most loved tools by makers, founders, and creators. Start building without code.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View All {TOOLS.length}+ Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
