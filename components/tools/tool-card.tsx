import Link from "next/link"
import { Tool } from "@/config/tools"
import { ArrowUpRight } from "lucide-react"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tool.image}
          alt={tool.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg font-semibold">{tool.name}</h3>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                {tool.category}
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-muted-foreground">
                {tool.pricing}
              </span>
            </div>
          </div>
          <Link
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUpRight className="h-4 w-4" />
            <span className="sr-only">Visit {tool.name}</span>
          </Link>
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {tool.description}
        </p>
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
      </div>
    </div>
  )
}
