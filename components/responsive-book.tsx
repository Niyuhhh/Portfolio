"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false })

interface Page {
  id: number
  content: React.ReactNode
}

interface ResponsiveFlipBookProps {
  pages: Page[]
}

const BOOK_WIDTH = 1000
const BOOK_HEIGHT = 710

export default function ResponsiveFlipBook({ pages }: ResponsiveFlipBookProps) {
  const bookRef = useRef<any>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const { innerWidth, innerHeight } = window
      const newScale = Math.min(
        innerWidth / BOOK_WIDTH,
        innerHeight / BOOK_HEIGHT
      )
      setScale(newScale)
    }
    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  const flipPrev = () => {
    bookRef.current?.pageFlip()?.flipPrev()
  }

  const flipNext = () => {
    bookRef.current?.pageFlip()?.flipNext()
  }

  const scaledWidth = BOOK_WIDTH * scale
  const scaledHeight = BOOK_HEIGHT * scale

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <div
        style={{
          width: BOOK_WIDTH,
          height: BOOK_HEIGHT,
          position: "absolute",
          top: `calc(50% - ${scaledHeight / 2}px)`,
          left: `calc(50% - ${scaledWidth / 2}px)`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <HTMLFlipBook
          width={BOOK_WIDTH / 2}
          height={BOOK_HEIGHT}
          showCover
          ref={bookRef}
        >
          {pages.map((page) => (
            <div key={page.id} className="w-full h-full overflow-hidden">
              {page.content}
            </div>
          ))}
        </HTMLFlipBook>
        <button
          onClick={flipPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 p-2 rounded"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={flipNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 p-2 rounded"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
