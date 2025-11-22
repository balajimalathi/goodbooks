import { Check } from "lucide-react"
import { PricingTier } from "@/config/tools"

interface PricingTableProps {
  tiers: PricingTier[]
  toolName: string
  affiliateLink: string
}

export function PricingTable({ tiers, toolName, affiliateLink }: PricingTableProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${tier.popular ? "border-primary shadow-primary/20" : ""
              }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="mb-2 font-heading text-xl font-bold">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                {tier.price === "Custom" ? (
                  <span className="text-3xl font-bold">Custom</span>
                ) : tier.price === 0 ? (
                  <span className="text-3xl font-bold">Free</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </>
                )}
              </div>
            </div>

            <ul className="mb-6 space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${tier.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                }`}
            >
              Get {toolName}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
