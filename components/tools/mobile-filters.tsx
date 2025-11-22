"use client"

import * as React from "react"
import { Filter, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ToolFilters } from "@/components/tools/tool-filters"

interface MobileFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
  selectedPricing: string | null
  setSelectedPricing: (pricing: string | null) => void
  categories: string[]
  pricingOptions: string[]
}

export function MobileFilters(props: MobileFiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="outline"
        className="lg:hidden w-full mb-6 flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <Filter className="h-4 w-4" />
        Filters & Search
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-xs border-r bg-background p-6 shadow-xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <ToolFilters {...props} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
