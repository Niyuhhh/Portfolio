import FlipbookTurn from "@/components/flipbook-turn"
import { portfolioPages } from "@/components/portfolio-pages"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <FlipbookTurn pages={portfolioPages} />
      </ErrorBoundary>
    </main>
  )
}
