import Link from "next/link"
import { Calendar, ArrowRight, Star, ExternalLink, Shield, Rocket, Zap } from "lucide-react"
import { UPDATES } from "@/config/updates"
import { TOOLS } from "@/config/tools"
import { formatDistanceToNow } from "date-fns"
import { Button } from "@/components/ui/button"

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
    case "startup":
      return "🚀"
    case "security":
      return "🛡️"
    case "event":
      return "📅"
    default:
      return "📢"
  }
}

const getUpdateBadge = (type: string) => {
  switch (type) {
    case "release":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
    case "pricing":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20"
    case "feature":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
    case "llm":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
    case "startup":
      return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20"
    case "security":
      return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
    case "event":
      return "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20"
    default:
      return "bg-muted text-foreground border-border"
  }
}

export default function UpdatesPage() {
  const newArrivals = TOOLS.filter((t) => t.new).slice(0, 5)

  // Featured Content
  const featuredUpdate = UPDATES[0]
  const topStories = UPDATES.slice(1, 4)
  const feedUpdates = UPDATES.slice(4)

  // Category specific updates for widgets
  const startupUpdates = UPDATES.filter(u => u.type === 'startup').slice(0, 3)
  const securityUpdates = UPDATES.filter(u => u.type === 'security').slice(0, 3)
  const eventUpdates = UPDATES.filter(u => u.type === 'event').slice(0, 3)

  return (
    <div className="min-h-screen pb-20">
      {/* Big Hero Section */}
      <section className="border-b bg-muted/10 py-12">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="font-heading text-4xl font-bold tracking-tight">
              Tech News
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Updates
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Featured Article (Left - 2 cols) */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                {featuredUpdate.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={featuredUpdate.image}
                    alt={featuredUpdate.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Zap className="h-16 w-16 text-primary/20" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6 pt-24">
                <div className="mb-3 flex items-center gap-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getUpdateBadge(featuredUpdate.type)}`}>
                    {getUpdateIcon(featuredUpdate.type)} {featuredUpdate.type.toUpperCase()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(featuredUpdate.date, { addSuffix: true })}
                  </span>
                </div>
                <h2 className="mb-2 font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                  <Link href={featuredUpdate.link || `/tools/${featuredUpdate.toolSlug}`} className="hover:text-primary transition-colors">
                    {featuredUpdate.title}
                  </Link>
                </h2>
                <p className="line-clamp-2 text-muted-foreground md:text-lg">
                  {featuredUpdate.description}
                </p>
              </div>
            </div>

            {/* Top Stories (Right - 1 col) */}
            <div className="flex flex-col gap-4">
              {/* <h3 className="font-heading text-lg font-semibold text-muted-foreground">Top Stories</h3> */}
              {topStories.map((story) => (
                <div key={story.id} className="group relative flex flex-1 flex-col justify-center rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 ${getUpdateBadge(story.type)}`}>
                      {story.type}
                    </span>
                    <span>•</span>
                    <span>{formatDistanceToNow(story.date)} ago</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    <Link href={story.link || `/tools/${story.toolSlug}`}>
                      {story.title}
                    </Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content - The River */}
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="font-heading text-2xl font-bold">Latest News</h2>
            </div>

            <div className="space-y-8">
              {feedUpdates.map((update) => (
                <article
                  key={update.id}
                  className="group flex flex-col gap-4 md:flex-row md:gap-6"
                >
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      {update.toolName && (
                        <Link
                          href={`/tools/${update.toolSlug}`}
                          className="font-medium text-foreground hover:text-primary hover:underline"
                        >
                          {update.toolName}
                        </Link>
                      )}
                      <span>•</span>
                      <time dateTime={update.date.toISOString()}>
                        {formatDistanceToNow(update.date, { addSuffix: true })}
                      </time>
                    </div>

                    <h3 className="font-heading text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      <Link href={update.link || `/tools/${update.toolSlug}`}>
                        {update.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {update.description}
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getUpdateBadge(
                          update.type
                        )}`}
                      >
                        {getUpdateIcon(update.type)} {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                      </span>
                      {update.link && (
                        <a
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          Read more <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Startups Widget */}
            {startupUpdates.length > 0 && (
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 border-b pb-2">
                  <Rocket className="h-5 w-5 text-orange-500" />
                  <h3 className="font-heading text-lg font-semibold">Startups</h3>
                </div>
                <div className="space-y-4">
                  {startupUpdates.map(update => (
                    <div key={update.id} className="group">
                      <Link href={update.link || '#'} className="font-medium hover:text-primary transition-colors line-clamp-2">
                        {update.title}
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{update.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Widget */}
            {securityUpdates.length > 0 && (
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 border-b pb-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  <h3 className="font-heading text-lg font-semibold">Security</h3>
                </div>
                <div className="space-y-4">
                  {securityUpdates.map(update => (
                    <div key={update.id} className="group">
                      <Link href={update.link || '#'} className="font-medium hover:text-primary transition-colors line-clamp-2">
                        {update.title}
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{update.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Events Widget */}
            {eventUpdates.length > 0 && (
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 border-b pb-2">
                  <Calendar className="h-5 w-5 text-pink-500" />
                  <h3 className="font-heading text-lg font-semibold">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {eventUpdates.map(update => (
                    <div key={update.id} className="group">
                      <Link href={update.link || '#'} className="font-medium hover:text-primary transition-colors line-clamp-2">
                        {update.title}
                      </Link>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDistanceToNow(update.date, { addSuffix: true })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Arrivals Widget */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold">New Arrivals</h3>
                <Link href="/tools" className="text-xs font-medium text-primary hover:underline">
                  View all
                </Link>
              </div>
              <div className="space-y-6">
                {newArrivals.map((tool) => (
                  <div key={tool.slug} className="flex items-start gap-3 group">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-muted p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="block truncate font-medium hover:text-primary transition-colors"
                      >
                        {tool.name}
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span className="inline-flex items-center gap-0.5">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {tool.rating}
                        </span>
                        <span>•</span>
                        <span className="truncate">{tool.category}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" asChild>
                      <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="rounded-xl border bg-primary/5 p-6">
              <h3 className="font-heading text-lg font-semibold mb-2">
                Weekly Digest
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the top stories and new tools delivered to your inbox every Friday.
              </p>
              <Button className="w-full" asChild>
                <Link href="/newsletter">Subscribe</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

