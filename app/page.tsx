import { MagazineViewer } from "@/components/magazine-viewer"
import { portfolioPages } from "@/components/portfolio-pages"
import { ErrorBoundary } from "@/components/error-boundary"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="p-4">
        <Link href="/book" className="underline">
          Book Index
        </Link>
      </nav>
      <ErrorBoundary>
        <MagazineViewer pages={portfolioPages} />
      </ErrorBoundary>
    </main>
  )
}
