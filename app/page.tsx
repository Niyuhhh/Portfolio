"use client"

import { MagazineViewer } from "@/components/magazine-viewer"
import { portfolioPages } from "@/components/portfolio-pages"
import { ErrorBoundary } from "@/components/error-boundary"
import { useViewportScale } from "@/hooks/use-viewport-scale"

export default function Home() {
  const scale = useViewportScale(1920, 1080)

  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <MagazineViewer pages={portfolioPages} scale={scale} />
      </ErrorBoundary>
    </main>
  )
}
