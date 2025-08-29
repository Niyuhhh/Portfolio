"use client"

import { useEffect, useState } from "react"
import { MagazineViewer } from "@/components/magazine-viewer"
import { portfolioPages, portfolioImageUrls } from "@/components/portfolio-pages"
import { ErrorBoundary } from "@/components/error-boundary"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        portfolioImageUrls.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image()
              img.src = src
              img.onload = () => resolve()
              img.onerror = () => resolve()
            })
        )
      )
      setIsLoaded(true)
    }
    preload()
  }, [])

  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        {isLoaded ? <MagazineViewer pages={portfolioPages} /> : <LoadingScreen />}
      </ErrorBoundary>
    </main>
  )
}
