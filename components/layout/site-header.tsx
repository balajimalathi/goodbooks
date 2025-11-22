"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 rounded-full border bg-background/70 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-heading text-xl font-bold">Goodbooks</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/tools"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Tools
            </Link>
            <Link
              href="/alternatives"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Alternatives
            </Link>
            <Link
              href="/updates"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Updates
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur-md">
          <nav className="flex flex-col gap-4 py-4">
            <Link
              href="/tools"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              href="/alternatives"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Alternatives
            </Link>
            <Link
              href="/updates"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Updates
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
