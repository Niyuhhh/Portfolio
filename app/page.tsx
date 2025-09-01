import ResponsiveFlipBook from "@/components/responsive-book"
import { portfolioPages } from "@/components/portfolio-pages"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <ResponsiveFlipBook pages={portfolioPages} />
      </ErrorBoundary>
    </main>
  )
}
