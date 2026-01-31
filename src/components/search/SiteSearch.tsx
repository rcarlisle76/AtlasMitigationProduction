"use client"

import { useEffect, useState, useCallback } from "react"
import { Search, FileText, MapPin, Newspaper, X } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { searchSite, type GroupedSearchResults, type SearchResult } from "@/lib/search"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SiteSearchProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const typeIcons = {
  service: FileText,
  location: MapPin,
  blog: Newspaper,
}

const typeLabels = {
  service: "Service",
  location: "Location",
  blog: "Blog Post",
}

const typeBadgeColors = {
  service: "bg-blue-100 text-blue-800 border-blue-200",
  location: "bg-green-100 text-green-800 border-green-200",
  blog: "bg-purple-100 text-purple-800 border-purple-200",
}

function SearchResultItem({ result, onClick }: { result: SearchResult; onClick: () => void }) {
  const Icon = typeIcons[result.type]

  return (
    <Link
      href={result.url}
      onClick={onClick}
      className="block rounded-lg border bg-card p-4 transition-all hover:border-atlas-primary hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-secondary p-2 text-muted-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground line-clamp-1">{result.title}</h3>
            <Badge
              variant="outline"
              className={cn("text-xs flex-shrink-0", typeBadgeColors[result.type])}
            >
              {typeLabels[result.type]}
            </Badge>
          </div>
          {result.matchedText && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {result.matchedText}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

function SearchResultsSection({
  title,
  results,
  icon: Icon,
  onResultClick,
}: {
  title: string
  results: SearchResult[]
  icon: React.ElementType
  onResultClick: () => void
}) {
  if (results.length === 0) return null

  return (
    <div>
      <div className="flex items-center gap-2 mb-3 px-2">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          {title}
          <span className="ml-2 text-atlas-primary">({results.length})</span>
        </h3>
      </div>
      <div className="space-y-2">
        {results.map((result, index) => (
          <SearchResultItem key={`${result.type}-${index}`} result={result} onClick={onResultClick} />
        ))}
      </div>
    </div>
  )
}

export function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<GroupedSearchResults>({
    services: [],
    locations: [],
    blog: [],
    total: 0,
  })
  const [isSearching, setIsSearching] = useState(false)

  // Debounced search
  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResults({ services: [], locations: [], blog: [], total: 0 })
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const timeoutId = setTimeout(() => {
      const searchResults = searchSite(query)
      setResults(searchResults)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  // Reset on close
  useEffect(() => {
    if (!open) {
      setQuery("")
      setResults({ services: [], locations: [], blog: [], total: 0 })
    }
  }, [open])

  const handleResultClick = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-xl">Search Atlas Mitigation</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="px-6 py-4 border-b bg-secondary/30">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services, locations, or blog posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-base"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1 px-6 py-4 space-y-6 min-h-[200px] max-h-[calc(80vh-200px)]">
          {!query || query.trim().length < 2 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-lg font-medium">
                Start typing to search
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Search across services, locations, and blog posts
              </p>
            </div>
          ) : isSearching ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-atlas-primary mb-4" />
              <p className="text-muted-foreground">Searching...</p>
            </div>
          ) : results.total === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-lg font-medium">
                No results found for "{query}"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Try different keywords or check your spelling
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2">
                <p className="text-sm text-muted-foreground">
                  Found <span className="font-semibold text-foreground">{results.total}</span>{" "}
                  {results.total === 1 ? "result" : "results"} for "{query}"
                </p>
              </div>

              <SearchResultsSection
                title="Services"
                results={results.services}
                icon={FileText}
                onResultClick={handleResultClick}
              />

              <SearchResultsSection
                title="Locations"
                results={results.locations}
                icon={MapPin}
                onResultClick={handleResultClick}
              />

              <SearchResultsSection
                title="Blog Posts"
                results={results.blog}
                icon={Newspaper}
                onResultClick={handleResultClick}
              />
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t bg-secondary/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">ESC</span>
              </kbd>
              <span>to close</span>
            </div>
            <div className="flex items-center gap-4">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">↑</span>
                <span className="text-xs">↓</span>
              </kbd>
              <span>to navigate</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
