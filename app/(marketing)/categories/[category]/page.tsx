import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { TOOLS } from "@/config/tools"
import { CATEGORIES } from "@/config/categories"
import { ToolCard } from "@/components/tools/tool-card"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata(props: CategoryPageProps) {
  const params = await props.params
  const category = CATEGORIES.find((c) => c.slug === params.category)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} Tools - No-Code Directory`,
    description: category.description,
  }
}

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params
  const category = CATEGORIES.find((c) => c.slug === params.category)

  if (!category) {
    notFound()
  }

  // Get tools for this category
  const categoryTools = TOOLS.filter((t) =>
    category.name === "AI & LLM"
      ? t.category === "AI & LLM"
      : t.category.toLowerCase().includes(category.slug.split("-")[0]) ||
      category.slug.includes(t.category.toLowerCase().replace(" ", "-"))
  )

  // Get popular tools in this category
  const popularTools = categoryTools.filter((t) => t.popular)
  const newTools = categoryTools.filter((t) => t.new)

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b bg-muted/30">
        <div className="container py-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Tools
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.name}
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {category.name} Tools
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              {category.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1">
                <span className="font-semibold">{categoryTools.length}</span>
                <span className="text-muted-foreground">Total Tools</span>
              </div>
              {popularTools.length > 0 && (
                <div className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1">
                  <span className="font-semibold">{popularTools.length}</span>
                  <span className="text-muted-foreground">Popular</span>
                </div>
              )}
              {newTools.length > 0 && (
                <div className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1">
                  <span className="font-semibold">{newTools.length}</span>
                  <span className="text-muted-foreground">New</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      {popularTools.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
              Popular {category.name} Tools
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {popularTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tools */}
      <section className={`${popularTools.length > 0 ? "border-t bg-muted/30" : ""} py-12 md:py-16`}>
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            {popularTools.length > 0 ? `All ${category.name} Tools` : `${category.name} Tools`}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools
              .filter((t) => !t.popular || popularTools.length === 0)
              .map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
          </div>
          {categoryTools.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No tools found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Browse Other Categories */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <h2 className="mb-8 font-heading text-2xl font-bold sm:text-3xl">
            Browse Other Categories
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary"
              >
                <div className="mb-2 text-3xl">{cat.icon}</div>
                <h3 className="mb-2 font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
