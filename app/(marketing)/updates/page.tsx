import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { UPDATES } from "@/config/updates"
import { formatDistanceToNow } from "date-fns"

export const metadata = {
  title: "Real-Time Updates - No-Code & AI Tool News",
  description: "Stay updated with the latest releases, pricing changes, and feature updates from the no-code ecosystem.",
}

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

export default function UpdatesPage() {
  // Group updates by type
  const updatesByType = {
    all: UPDATES,
    release: UPDATES.filter((u) => u.type === "release"),
    pricing: UPDATES.filter((u) => u.type === "pricing"),
    feature: UPDATES.filter((u) => u.type === "feature"),
    llm: UPDATES.filter((u) => u.type === "llm"),
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-xs font-medium">
              <Calendar className="h-3 w-3" />
              Updated Daily
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Real-Time Updates
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Stay ahead of the curve with the latest releases, pricing changes, and feature
              updates from the no-code, low-code, and AI ecosystem.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1 text-sm">
                <span className="text-lg">🆕</span>
                <span>{updatesByType.release.length} Releases</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1 text-sm">
                <span className="text-lg">✨</span>
                <span>{updatesByType.feature.length} Features</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1 text-sm">
                <span className="text-lg">💰</span>
                <span>{updatesByType.pricing.length} Pricing</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1 text-sm">
                <span className="text-lg">🤖</span>
                <span>{updatesByType.llm.length} AI/LLM</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">Latest Updates</h2>
            <div className="space-y-4">
              {UPDATES.map((update) => (
                <div
                  key={update.id}
                  className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted text-2xl">
                      {getUpdateIcon(update.type)}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getUpdateBadge(
                            update.type
                          )}`}
                        >
                          {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                        </span>
                        {update.toolName && (
                          <>
                            <span className="text-xs text-muted-foreground">·</span>
                            <Link
                              href={`/tools/${update.toolSlug}`}
                              className="text-xs font-medium text-primary hover:underline"
                            >
                              {update.toolName}
                            </Link>
                          </>
                        )}
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">
                          {formatDistanceToNow(update.date, { addSuffix: true })}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
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
                          Read full announcement
                          <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
              Never Miss an Update
            </h2>
            <p className="mb-8 text-muted-foreground">
              Get the latest no-code tool updates delivered to your inbox every week.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Subscribe to Newsletter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
