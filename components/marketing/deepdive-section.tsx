import { Layers, Zap, BarChart3 } from "lucide-react"

const FEATURES = [
  {
    title: "In-depth Reviews",
    description:
      "We test every tool extensively to provide you with honest, unbiased reviews and feature breakdowns.",
    icon: Layers,
  },
  {
    title: "Performance Benchmarks",
    description:
      "See how tools stack up against each other with our real-world performance testing and data.",
    icon: Zap,
  },
  {
    title: "Growth Analytics",
    description:
      "Learn how to leverage these tools to grow your business with our expert guides and case studies.",
    icon: BarChart3,
  },
]

export function DeepdiveSection() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Deep dive into the details
          </h2>
          <p className="mt-4 text-muted-foreground">
            We go beyond the surface to give you the insights you need.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
