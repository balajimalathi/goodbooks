"use client"

import { useState, useMemo } from "react"
import { TOOLS } from "@/config/tools"
import { ToolCard } from "@/components/tools/tool-card"
import { ToolFilters } from "@/components/tools/tool-filters"
import { MobileFilters } from "@/components/tools/mobile-filters"
import { Search } from "lucide-react"

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPricing, setSelectedPricing] = useState<string | null>(null)

  const categories = Array.from(new Set(TOOLS.map((t) => t.category))).sort()
  const pricingOptions = Array.from(new Set(TOOLS.map((t) => t.pricingModel))).sort()

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory
        ? tool.category === selectedCategory
        : true
      const matchesPricing = selectedPricing
        ? tool.pricingModel === selectedPricing
        : true

      return matchesSearch && matchesCategory && matchesPricing
    })
  }, [searchQuery, selectedCategory, selectedPricing])

  const filterProps = {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedPricing,
    setSelectedPricing,
    categories,
    pricingOptions,
  }

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

      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Mobile Filters */}
        <MobileFilters {...filterProps} />

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4">
            <ToolFilters {...filterProps} />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
            </p>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
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
      </div>
    </div>
  )
}

