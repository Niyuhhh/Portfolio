"use client"

import { MagazineViewer } from "@/components/magazine-viewer"
import { portfolioPages } from "@/components/portfolio-pages"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <MagazineViewer pages={portfolioPages} />
      </ErrorBoundary>
    </main>
  )
}
