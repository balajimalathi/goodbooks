import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { TOOLS } from "@/config/tools"

export function HeroSection() {
  const toolCount = TOOLS.length
  const popularTools = TOOLS.filter((t) => t.popular).length

  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pb-32 md:pt-48">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-4 w-4 text-primary" />
          Discover the best no-code & AI tools
        </div>
        <h1 className="mb-6 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Build products faster{" "}
          <br className="hidden md:block" />
          <span className="text-primary">without writing code.</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Your go-to directory for no-code tools, low-code platforms, and AI solutions.
          Find the perfect stack to build, launch, and scale your next project.
        </p>

        {/* Social Proof */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg">🔧</span>
            </div>
            <span><strong className="text-foreground">{toolCount}+</strong> Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg">⭐</span>
            </div>
            <span><strong className="text-foreground">{popularTools}</strong> Popular Picks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg">🚀</span>
            </div>
            <span><strong className="text-foreground">Updated</strong> Daily</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/tools"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Explore Directory
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#newsletter"
            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Get Weekly Updates
          </Link>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
    </section>
  )
}
