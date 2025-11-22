import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pb-32 md:pt-48">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-primary"></span>
          The ultimate resource for web builders
        </div>
        <h1 className="mb-6 max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Build better websites, <br className="hidden md:block" />
          <span className="text-primary">faster than ever.</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Discover the best SaaS tools, read in-depth guides, and stay ahead of the curve with our curated directory and expert insights.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/tools"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore Tools
          </Link>
          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Read the Blog <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
    </section>
  )
}
