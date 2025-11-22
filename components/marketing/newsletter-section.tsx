import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border bg-background p-8 text-center shadow-sm md:p-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Subscribe to our newsletter
            </h2>
            <p className="text-muted-foreground">
              Get the latest tool reviews, tutorials, and industry news delivered straight to your inbox.
            </p>
          </div>
          <form className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
