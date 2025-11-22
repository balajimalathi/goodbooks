import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { TOOLS } from "@/config/tools"
import { HeroPrompt } from "@/components/marketing/hero-prompt"

export function HeroSection() {
  const toolCount = TOOLS.length
  const popularTools = TOOLS.filter((t) => t.popular).length

  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-16">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-4 w-4 text-primary" />
          Discover the best no-code & AI tools
        </div>
        <h1 className="mb-6 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          What are you{" "}
          <span className="text-primary">building today?</span>
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Describe what you need, and we'll find the perfect tools for your stack.
          From website builders to AI agents.
        </p>

        <HeroPrompt />

        {/* Social Proof */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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
      </div>


    </section>
  )
}
