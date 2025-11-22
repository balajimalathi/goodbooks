import { Check, X } from "lucide-react"
import { Tool } from "@/config/tools"
import Link from "next/link"

interface ComparisonTableProps {
  tools: Tool[]
  features: string[]
}

export function ComparisonTable({ tools, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="sticky left-0 bg-muted/50 p-4 text-left font-heading text-sm font-semibold">
              Feature
            </th>
            {tools.map((tool) => (
              <th key={tool.slug} className="min-w-[200px] p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-card p-2">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="font-heading text-sm font-semibold hover:text-primary"
                    >
                      {tool.name}
                    </Link>
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <span>⭐ {tool.rating}</span>
                      <span>·</span>
                      <span>{tool.pricingModel}</span>
                    </div>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price Comparison */}
          <tr className="border-b bg-muted/30">
            <td className="sticky left-0 bg-muted/30 p-4 font-medium">
              Starting Price
            </td>
            {tools.map((tool) => {
              const lowestTier = tool.pricingTiers.sort((a, b) => {
                if (a.price === "Custom") return 1
                if (b.price === "Custom") return -1
                return (a.price as number) - (b.price as number)
              })[0]
              return (
                <td key={tool.slug} className="p-4 text-center">
                  {lowestTier.price === "Custom" ? (
                    <span className="font-semibold">Custom</span>
                  ) : lowestTier.price === 0 ? (
                    <span className="font-semibold text-green-600">Free</span>
                  ) : (
                    <div>
                      <span className="font-semibold">${lowestTier.price}</span>
                      <span className="text-xs text-muted-foreground">/{lowestTier.period}</span>
                    </div>
                  )}
                </td>
              )
            })}
          </tr>

          {/* Features Comparison */}
          {features.map((feature, index) => (
            <tr key={feature} className={index % 2 === 0 ? "bg-card" : "bg-muted/20"}>
              <td className="sticky left-0 bg-inherit p-4">{feature}</td>
              {tools.map((tool) => {
                const hasFeature = tool.features.some(
                  (f) => f.toLowerCase().includes(feature.toLowerCase()) ||
                    feature.toLowerCase().includes(f.toLowerCase())
                )
                return (
                  <td key={tool.slug} className="p-4 text-center">
                    {hasFeature ? (
                      <Check className="mx-auto h-5 w-5 text-green-600" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
                    )}
                  </td>
                )
              })}
            </tr>
          ))}

          {/* Rating */}
          <tr className="border-t bg-muted/30">
            <td className="sticky left-0 bg-muted/30 p-4 font-medium">
              User Rating
            </td>
            {tools.map((tool) => (
              <td key={tool.slug} className="p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="font-semibold">{tool.rating}</span>
                  <span className="text-xs text-muted-foreground">/ 5.0</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {tool.reviewCount.toLocaleString()} reviews
                </div>
              </td>
            ))}
          </tr>

          {/* CTA Row */}
          <tr className="border-t bg-card">
            <td className="sticky left-0 bg-card p-4"></td>
            {tools.map((tool) => (
              <td key={tool.slug} className="p-4">
                <div className="flex flex-col gap-2">
                  <a
                    href={tool.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Try {tool.name}
                  </a>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Learn More
                  </Link>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
