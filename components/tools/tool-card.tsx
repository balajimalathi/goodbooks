import Link from "next/link"
import { Tool } from "@/config/tools"
import { Star } from "lucide-react"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.logo}
          alt={tool.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading text-lg font-semibold">{tool.name}</h3>
              {tool.verified && (
                <span className="inline-flex items-center text-primary" title="Verified">
                  ✓
                </span>
              )}
            </div>
            <div className="mt-1 flex flex-wrap gap-2">
              {tool.popular && (
                <span className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  Popular
                </span>
              )}
              {tool.new && (
                <span className="inline-flex items-center rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white">
                  New
                </span>
              )}
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                {tool.category}
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                {tool.pricingModel}
              </span>
            </div>
          </div>
        </div>
        <p className="mb-1 text-xs text-muted-foreground">{tool.tagline}</p>
        <p className="mb-4 line-clamp-2 text-sm text-foreground">
          {tool.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{tool.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({tool.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        <div className="mt-auto flex flex-wrap gap-1">
          {tool.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
          {tool.features.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              +{tool.features.length - 3}
            </span>
          )}
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <Link
            href={`/tools/${tool.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Learn More
          </Link>
          <a
            href={tool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  )
}
