"use client"

import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ToolFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
  selectedPricing: string | null
  setSelectedPricing: (pricing: string | null) => void
  categories: string[]
  pricingOptions: string[]
  className?: string
}

export function ToolFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedPricing,
  setSelectedPricing,
  categories,
  pricingOptions,
  className,
}: ToolFiltersProps) {
  const hasActiveFilters = searchQuery || selectedCategory || selectedPricing

  return (
    <div className={cn("space-y-8", className)}>
      {/* Search */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Search</h3>
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
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground text-left",
              selectedCategory === null ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground"
            )}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground text-left",
                selectedCategory === category ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Pricing</h3>
        <div className="flex flex-col gap-2">
          {pricingOptions.map((pricing) => (
            <label key={pricing} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPricing === pricing}
                onChange={() => setSelectedPricing(selectedPricing === pricing ? null : pricing)}
                className="h-4 w-4 rounded border-primary text-primary focus:ring-primary"
              />
              {pricing}
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setSearchQuery("")
            setSelectedCategory(null)
            setSelectedPricing(null)
          }}
        >
          Clear Filters
          <X className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
