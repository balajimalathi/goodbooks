import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Newsletter - Stay Updated with No-Code Tools",
  description: "Get weekly updates on the latest no-code tools, tutorials, and industry insights delivered to your inbox.",
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-xs font-medium">
              📬 Newsletter
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Stay Ahead of the Curve
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Get the latest no-code tool updates, tutorials, and industry insights delivered
              to your inbox every week. Join thousands of makers and founders.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border bg-card p-8 shadow-lg md:p-12">
              <h2 className="mb-6 font-heading text-2xl font-bold">Subscribe to Goodbooks Weekly</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold sm:text-3xl">
              What You'll Get
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Weekly Tool Roundups</h3>
                  <p className="text-sm text-muted-foreground">
                    Curated selection of the week's best new tools and updates
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Exclusive Tutorials</h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guides on building with no-code tools
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Pricing Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Be first to know about pricing changes and special offers
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Industry Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Trends, analysis, and predictions for the no-code space
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Case Studies</h3>
                  <p className="text-sm text-muted-foreground">
                    Real stories from successful no-code builders
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Tool Comparisons</h3>
                  <p className="text-sm text-muted-foreground">
                    Head-to-head comparisons to help you choose the right tool
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
              Trusted by Thousands
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border bg-card p-6">
                <div className="mb-2 text-4xl font-bold text-primary">5k+</div>
                <div className="text-sm text-muted-foreground">Active Subscribers</div>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <div className="mb-2 text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Open Rate</div>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <div className="mb-2 text-4xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Subscriber Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
