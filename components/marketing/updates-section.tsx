import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { UPDATES } from "@/config/updates"
import { formatDistanceToNow } from "date-fns"

export function UpdatesSection() {
  const recentUpdates = UPDATES.slice(0, 5)

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case "release":
        return "🆕"
      case "pricing":
        return "💰"
      case "feature":
        return "✨"
      case "llm":
        return "🤖"
      default:
        return "📢"
    }
  }

  const getUpdateBadge = (type: string) => {
    switch (type) {
      case "release":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "pricing":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "feature":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400"
      case "llm":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400"
      default:
        return "bg-muted text-foreground"
    }
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium">
            🔥 Live Updates
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What's New in No-Code
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Latest releases, pricing changes, and feature updates from the no-code ecosystem.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {recentUpdates.map((update) => (
              <div
                key={update.id}
                className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-xl">
                    {getUpdateIcon(update.type)}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${getUpdateBadge(
                          update.type
                        )}`}
                      >
                        {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                      </span>
                      {update.toolName && (
                        <span className="text-xs text-muted-foreground">
                          {update.toolName}
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground">
                        · {formatDistanceToNow(update.date, { addSuffix: true })}
                      </span>
                    </div>
                    <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {update.description}
                    </p>
                    {update.link && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Calendar className="h-4 w-4" />
              View All Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
