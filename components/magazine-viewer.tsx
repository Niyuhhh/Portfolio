"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Plus, Minus } from "lucide-react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/ui/pagination"

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false })

const CLOSED_SCALE = 1
const OPEN_SCALE = 1
const INITIAL_POS = { x: 0, y: 0 }

interface Page {
  id: number
  content: React.ReactNode
  isDoublePage?: boolean
}

interface MagazineViewerProps {
  pages: Page[]
}

export function MagazineViewer({ pages }: MagazineViewerProps) {
  const bookRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [scale, setScale] = useState(CLOSED_SCALE)
  const [translate, setTranslate] = useState(INITIAL_POS)

  const totalPages = pages.length
  const PAGE_WIDTH = 420
  const PAGE_HEIGHT = 594
  const pageWidth = PAGE_WIDTH * scale
  const pageHeight = PAGE_HEIGHT * scale
  const bookEdge = pageWidth / 2
  const offsetX =
    currentPage === 0
      ? -pageWidth / 2
      : currentPage === totalPages - 1
      ? pageWidth / 2
      : 0

  const handleNextPage = () => {
    bookRef.current?.pageFlip().flipNext()
  }

  const handlePrevPage = () => {
    bookRef.current?.pageFlip().flipPrev()
  }

  const goToPage = (page: number) => {
    bookRef.current?.pageFlip().flip(page - 1)
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2))
  }

  const zoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.1, OPEN_SCALE)
      if (newScale <= OPEN_SCALE) {
        setTranslate(INITIAL_POS)
      }
      return newScale
    })
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const cursor = new DOMPoint(e.clientX - rect.left, e.clientY - rect.top)

      // Current transformation matrix of the book
      const currentMatrix = new DOMMatrix()
        .translate(offsetX + translate.x, translate.y)
        .scale(scale)

      // Convert cursor position to book coordinates
      const bookPoint = cursor.matrixTransform(currentMatrix.inverse())

      // Smooth zoom factor based on wheel delta
      const zoomIntensity = 0.001
      let newScale = scale * Math.exp(-e.deltaY * zoomIntensity)
      newScale = Math.min(Math.max(newScale, OPEN_SCALE), 2)

      if (newScale <= OPEN_SCALE) {
        setTranslate(INITIAL_POS)
        setScale(newScale)
        return
      }

      const newPageWidth = PAGE_WIDTH * newScale
      const offsetXNew =
        currentPage === 0
          ? -newPageWidth / 2
          : currentPage === totalPages - 1
          ? newPageWidth / 2
          : 0

      // Calculate translation so the point under cursor stays fixed
      const newTranslateX = cursor.x - offsetXNew - bookPoint.x * newScale
      const newTranslateY = cursor.y - bookPoint.y * newScale

      setTranslate({ x: newTranslateX, y: newTranslateY })
      setScale(newScale)
    },
    [scale, translate, currentPage, totalPages, offsetX]
  )

  const handleFlip = (e: any) => {
    const page = e.data
    setCurrentPage(page)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNextPage()
      if (e.key === "ArrowLeft") handlePrevPage()
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  // Handle mouse wheel for zooming
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [handleWheel])

  // Handle touch gestures for mobile
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      // Only trigger if horizontal swipe is more significant than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        if (diffX > 0) {
          handleNextPage() // Swipe left = next page
        } else {
          handlePrevPage() // Swipe right = previous page
        }
      }
    }

    container.addEventListener("touchstart", handleTouchStart)
    container.addEventListener("touchend", handleTouchEnd)

    return () => {
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#0E0E0E" }}
    >
      <HTMLFlipBook
        width={pageWidth}
        height={pageHeight}
        showCover
        maxShadowOpacity={0.2}
        className="shadow-md"
        ref={bookRef}
        onFlip={handleFlip}
          style={{
            transform: `translate(${offsetX + translate.x}px, ${translate.y}px) scale(${scale})`,
            transition: "transform 0.3s ease",
            transformOrigin: "0 0",
          }}
      >
        {pages.map((page) => (
          <div
            key={page.id}
            className="w-full h-full bg-white overflow-hidden shadow-md"
          >
            {page.content}
          </div>
        ))}
      </HTMLFlipBook>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage + 1}
          goToPage={goToPage}
        />
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={zoomIn}
          className="bg-transparent hover:bg-white/10 text-white/70 hover:text-white border-none w-16 h-16 transition-all duration-300"
        >
          <Plus className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={zoomOut}
          className="bg-transparent hover:bg-white/10 text-white/70 hover:text-white border-none w-16 h-16 transition-all duration-300"
        >
          <Minus className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
