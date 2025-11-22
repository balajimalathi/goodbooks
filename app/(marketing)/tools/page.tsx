"use client"

import { useState, useMemo } from "react"
import { TOOLS } from "@/config/tools"
import { ToolCard } from "@/components/tools/tool-card"
import { Search } from "lucide-react"

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null)

  const categories = Array.from(new Set(TOOLS.map((t) => t.category)))
  const pricingOptions = Array.from(new Set(TOOLS.map((t) => t.pricing)))

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory
        ? tool.category === selectedCategory
        : true
      const matchesPricing = selectedPricing
        ? tool.pricing === selectedPricing
        : true

      return matchesSearch && matchesCategory && matchesPricing
    })
  }, [searchQuery, selectedCategory, selectedPricing])

  return (
    <div className="container py-10">
      <div className="mb-10 flex flex-col gap-4 text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
          SaaS Tools Directory
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the best web building, marketing, and design tools to supercharge your workflow.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-6 rounded-xl border bg-card p-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tools..."
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${selectedCategory === null
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-transparent text-muted-foreground hover:bg-secondary"
                }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${selectedCategory === category
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-transparent text-muted-foreground hover:bg-secondary"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {pricingOptions.map((pricing) => (
              <button
                key={pricing}
                onClick={() =>
                  setSelectedPricing(selectedPricing === pricing ? null : pricing)
                }
                className={`inline-flex items-center justify-center rounded-md border px-3 py-1 text-sm font-medium transition-colors ${selectedPricing === pricing
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-transparent text-muted-foreground hover:bg-secondary/50"
                  }`}
              >
                {pricing}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">No tools found</h3>
          <p className="mb-4 mt-2 text-muted-foreground">
            We couldn't find any tools matching your search or filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory(null)
              setSelectedPricing(null)
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
