"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SiteSearch } from "@/components/search/SiteSearch"

export default function TestSearchPage() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Search Feature Test</h1>
        <p className="text-muted-foreground">
          Click the button below or press Cmd+K / Ctrl+K to open search
        </p>
        <Button onClick={() => setSearchOpen(true)} size="lg">
          Open Search
        </Button>
        <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
      </div>
    </div>
  )
}
