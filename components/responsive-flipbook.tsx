"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false })

interface Page {
  id: number
  content: ReactNode
}

interface ResponsiveFlipBookProps {
  pages: Page[]
}

export default function ResponsiveFlipBook({ pages }: ResponsiveFlipBookProps) {
  const bookRef = useRef<any>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Ajuste la taille du flipbook selon la fenêtre
  useEffect(() => {
    const updateSize = () => {
      const { innerWidth, innerHeight } = window
      const maxWidth = innerWidth * 0.9
      const maxHeight = innerHeight * 0.9

      // ratio original (2 pages côte à côte)
      const ratio = 1000 / 710
      let width = maxWidth
      let height = maxWidth / ratio

      if (height > maxHeight) {
        height = maxHeight
        width = height * ratio
      }

      setDimensions({ width, height })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev()
  const flipNext = () => bookRef.current?.pageFlip()?.flipNext()

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center">
      {dimensions.width > 0 && (
        <>
          <HTMLFlipBook
            width={dimensions.width / 2} // 2 pages
            height={dimensions.height}
            showCover
            ref={bookRef}
            className="shadow-lg"
          >
            {pages.map((page) => (
              <div key={page.id} className="w-full h-full overflow-hidden">
                {page.content}
              </div>
            ))}
          </HTMLFlipBook>

          {/* Boutons navigation */}
          <button
            onClick={flipPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 p-2 rounded"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={flipNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 p-2 rounded"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  )
}

