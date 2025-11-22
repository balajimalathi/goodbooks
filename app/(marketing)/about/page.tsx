import Link from "next/link"
import { ArrowRight, Users, Target, Zap } from "lucide-react"
import { TOOLS } from "@/config/tools"

export const metadata = {
  title: "About Goodbooks - Your No-Code Tools Directory",
  description: "Learn about Goodbooks, the community-driven directory for discovering the best no-code, low-code, and AI tools.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building the Future
              <br />
              <span className="text-primary">Without Code</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Goodbooks is a community-driven platform helping makers, founders, and creators
              discover the best no-code tools to build products faster.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-heading text-3xl font-bold sm:text-4xl">Our Mission</h2>
            <p className="mb-4 text-lg leading-relaxed">
              We believe anyone should be able to build products without writing code. That's why
              we created Goodbooks—a comprehensive directory and knowledge hub for the no-code ecosystem.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you're building your first website, launching a SaaS product, or automating
              your workflow, we help you find the right tools with honest reviews, detailed comparisons,
              and expert insights.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold sm:text-4xl">
            What We Stand For
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold">Community-Driven</h3>
              <p className="text-muted-foreground">
                Real reviews from real users. We prioritize authentic experiences over affiliate commissions.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold">Transparent</h3>
              <p className="text-muted-foreground">
                We clearly disclose affiliate relationships and never let them influence our honest assessments.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold">Always Updated</h3>
              <p className="text-muted-foreground">
                Daily updates on new releases, pricing changes, and feature launches to keep you informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold sm:text-4xl">
              By the Numbers
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 font-heading text-5xl font-bold text-primary">
                  {TOOLS.length}+
                </div>
                <div className="text-lg text-muted-foreground">No-Code Tools</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-heading text-5xl font-bold text-primary">
                  {TOOLS.reduce((sum, tool) => sum + tool.reviewCount, 0).toLocaleString()}+
                </div>
                <div className="text-lg text-muted-foreground">User Reviews</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-heading text-5xl font-bold text-primary">
                  Daily
                </div>
                <div className="text-lg text-muted-foreground">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
              Start Building Today
            </h2>
            <p className="mb-8 text-muted-foreground">
              Explore our directory of {TOOLS.length}+ no-code tools and find the perfect stack
              for your next project.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Browse Tools
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
