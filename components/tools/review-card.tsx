import { Star } from "lucide-react"

export interface Review {
  id: string
  author: string
  rating: number
  date: Date
  content: string
  verified?: boolean
  helpful?: number
}

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h4 className="font-semibold">{review.author}</h4>
            {review.verified && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Verified User
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-muted text-muted"
                    }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {review.date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-foreground">{review.content}</p>

      {review.helpful !== undefined && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{review.helpful} people found this helpful</span>
        </div>
      )}
    </div>
  )
}

// Placeholder reviews generator for demo
export function generatePlaceholderReviews(toolName: string): Review[] {
  return [
    {
      id: "1",
      author: "Sarah Mitchell",
      rating: 5,
      date: new Date("2024-11-15"),
      content: `${toolName} has completely transformed how we build products. The no-code interface is intuitive and powerful. We launched our MVP in just 2 weeks!`,
      verified: true,
      helpful: 24,
    },
    {
      id: "2",
      author: "Alex Chen",
      rating: 4,
      date: new Date("2024-11-10"),
      content: `Great tool overall. The learning curve is minimal and the documentation is excellent. Only wish there were more integration options.`,
      verified: true,
      helpful: 18,
    },
    {
      id: "3",
      author: "Jordan Taylor",
      rating: 5,
      date: new Date("2024-11-05"),
      content: `Best investment we made this year. ${toolName} saved us months of development time and thousands in developer costs. Highly recommend!`,
      verified: false,
      helpful: 31,
    },
  ]
}
