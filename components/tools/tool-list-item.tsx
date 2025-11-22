import Link from "next/link"
import { Tool } from "@/config/tools"
import { Star, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ToolListItemProps {
  tool: Tool
}

export function ToolListItem({ tool }: ToolListItemProps) {
  return (
    <div className="group relative flex flex-col sm:flex-row gap-4 rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:border-primary/20">
      {/* Logo Section */}
      <div className="flex items-center sm:items-start gap-4 sm:w-48 sm:shrink-0">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-full sm:w-full sm:object-contain p-4">
          <Image
            width={24}
            height={24}
            src={tool.logo}
            alt={tool.name}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col sm:hidden">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-lg font-semibold">{tool.name}</h3>
            {tool.verified && (
              <span className="text-primary" title="Verified">✓</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{tool.rating}</span>
            <span>({tool.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-2">
        {/* Desktop Header */}
        <div className="hidden sm:flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-xl font-semibold">{tool.name}</h3>
              {tool.verified && (
                <span className="text-primary" title="Verified">✓</span>
              )}
              {tool.popular && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Popular
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{tool.tagline}</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{tool.rating}</span>
            <span className="text-muted-foreground">({tool.reviewCount})</span>
          </div>
        </div>

        {/* Description - Hidden on Mobile */}
        <p className="hidden sm:block text-sm text-muted-foreground line-clamp-2">
          {tool.description}
        </p>

        {/* Features & Tags - Hidden on Mobile */}
        <div className="hidden sm:flex flex-wrap gap-2 mt-auto">
          <span className="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium">
            {tool.category}
          </span>
          <span className="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium">
            {tool.pricingModel}
          </span>
          {tool.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-center gap-2 sm:border-l sm:pl-4">
        <span className="text-sm font-medium sm:hidden">
          {tool.pricingModel}
        </span>

        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none" asChild>
            <Link href={`/tools/${tool.slug}`}>
              Details
            </Link>
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none" asChild>
            <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
              Visit <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
