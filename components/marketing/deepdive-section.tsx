import { Book, TrendingUp, Users } from "lucide-react"

const FEATURES = [
  {
    title: "In-Depth Guides",
    description:
      "Learn how to build real products with step-by-step tutorials, case studies, and expert insights from successful no-code builders.",
    icon: Book,
  },
  {
    title: "Honest Reviews",
    description:
      "We test every tool extensively to provide unbiased reviews with real pros, cons, and pricing breakdowns—no fluff, just facts.",
    icon: TrendingUp,
  },
  {
    title: "Community Driven",
    description:
      "Join thousands of makers, founders, and creators sharing their experiences, ratings, and tips for building without code.",
    icon: Users,
  },
]

export function DeepdiveSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium">
            📚 Resources
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From beginner tutorials to advanced automation workflows—we've got you covered.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center rounded-xl border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
