"use client"

import * as React from "react"
import { ArrowUp, Search, Sparkles, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ToolListItem } from "@/components/tools/tool-list-item"
import { TOOLS, type Tool } from "@/config/tools"

export function HeroPrompt() {
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState<Tool[]>([])
  const [hasSearched, setHasSearched] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const resultsRef = React.useRef<HTMLDivElement>(null)

  const handleSearch = () => {
    if (!query.trim()) return

    setHasSearched(true)
    const lowerQuery = query.toLowerCase()

    // Simple keyword matching logic
    const filtered = TOOLS.filter((tool) => {
      const searchableText = [
        tool.name,
        tool.tagline,
        tool.description,
        tool.category,
        ...(tool.subcategories || []),
        ...(tool.features || []),
        tool.pricingModel,
      ].join(" ").toLowerCase()

      // Check for price constraints (very basic)
      if (lowerQuery.includes("free") && tool.pricingModel !== "Free" && tool.pricingModel !== "Freemium") {
        return false
      }

      return searchableText.includes(lowerQuery) || lowerQuery.split(" ").some(word => searchableText.includes(word) && word.length > 3)
    })

    setResults(filtered)

    // Scroll to results after a short delay to allow animation to start
    setTimeout(() => {
      if (resultsRef.current) {
        const yOffset = -100; // Offset for fixed header
        const element = resultsRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSearch()
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setHasSearched(false)
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const suggestions = [
    "Free website builders",
    "AI marketing tools",
    "E-commerce for beginners",
    "Open source databases",
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setQuery(suggestion)
              if (textareaRef.current) {
                textareaRef.current.focus()
              }
            }}
            className="rounded-full border border-input bg-background/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="relative z-20 mb-8">
        <div
          className={cn(
            "relative flex flex-col overflow-hidden rounded-3xl border bg-background shadow-sm transition-all duration-200",
            isFocused ? "border-primary/50 ring-4 ring-primary/10" : "border-input hover:border-primary/20"
          )}
        >
          <textarea
            ref={textareaRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask for a tool (e.g., 'I need a free website builder for my portfolio')..."
            className="min-h-[80px] w-full resize-none bg-transparent px-6 py-5 text-lg placeholder:text-muted-foreground focus:outline-none sm:min-h-[100px] sm:text-xl"
          />

          <div className="flex items-center justify-between px-4 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground cursor-pointer" title="Attach (Demo)">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              {query && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                  onClick={clearSearch}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <Button
                size="icon"
                className={cn(
                  "h-8 w-8 rounded-full transition-all duration-200",
                  query.trim() ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}
                onClick={handleSearch}
                disabled={!query.trim()}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {hasSearched && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 text-left"
          >
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-semibold">
                Found {results.length} {results.length === 1 ? "result" : "results"}
              </h3>
              {results.length === 0 && (
                <p className="text-muted-foreground">Try adjusting your search terms.</p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {results.map((tool) => (
                <ToolListItem key={tool.slug} tool={tool} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
