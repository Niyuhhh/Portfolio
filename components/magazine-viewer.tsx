"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Pagination } from "@/components/ui/pagination"
import { FullScreenButton } from "@/components/fullscreen-button"
import type { default as FlipBook } from "react-pageflip"

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false })

const CLOSED_SCALE = 1
const OPEN_SCALE = 1
const INITIAL_POS = { x: 0, y: 0 }
const FLIP_DURATION = 700

interface Page {
  id: number
  content: React.ReactNode
  isDoublePage?: boolean
}

interface MagazineViewerProps {
  pages: Page[]
}

export function MagazineViewer({ pages }: MagazineViewerProps) {
  const bookRef = useRef<FlipBook | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [scale, setScale] = useState(CLOSED_SCALE)
  const [translate, setTranslate] = useState(INITIAL_POS)
  const [isDragging, setIsDragging] = useState(false)
  const [maxDims, setMaxDims] = useState({ maxWidth: 0, maxHeight: 0 })
  const lastPointer = useRef(INITIAL_POS)

  const totalPages = pages.length
  const PAGE_WIDTH = 500
  const PAGE_HEIGHT = 710
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
    bookRef.current?.pageFlip()?.flipNext()
  }

  const handlePrevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev()
  }

  const goToPage = (page: number) => {
    bookRef.current?.pageFlip()?.flip(page - 1)
  }

  const zoomAtPoint = useCallback(
    (point: DOMPoint, targetScale: number) => {
      let newScale = Math.min(Math.max(targetScale, OPEN_SCALE), 2)

      if (newScale <= OPEN_SCALE) {
        setTranslate(INITIAL_POS)
        setScale(newScale)
        return
      }

      const currentMatrix = new DOMMatrix()
        .translate(offsetX + translate.x, translate.y)
        .scale(scale)
      const bookPoint = point.matrixTransform(currentMatrix.inverse())

      const newPageWidth = PAGE_WIDTH * newScale
      const offsetXNew =
        currentPage === 0
          ? -newPageWidth / 2
          : currentPage === totalPages - 1
          ? newPageWidth / 2
          : 0

      const newTranslateX = point.x - offsetXNew - bookPoint.x * newScale
      const newTranslateY = point.y - bookPoint.y * newScale

      setTranslate({ x: newTranslateX, y: newTranslateY })
      setScale(newScale)
    },
    [currentPage, totalPages, offsetX, scale, translate]
  )

  const zoom = (delta: number) => {
    const bookCenter = new DOMPoint(
      offsetX + translate.x + pageWidth / 2,
      translate.y + pageHeight / 2
    )
    zoomAtPoint(bookCenter, scale + delta)
  }

  const zoomIn = () => zoom(0.1)

  const zoomOut = () => zoom(-0.1)

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const cursor = new DOMPoint(e.clientX - rect.left, e.clientY - rect.top)
      const zoomIntensity = 0.001
      const newScale = scale * Math.exp(-e.deltaY * zoomIntensity)
      zoomAtPoint(cursor, newScale)
    },
    [scale, zoomAtPoint]
  )

  const handleFlip = (e: any) => {
    const page = e.data
    setCurrentPage(page)
  }

  const startDragging = (clientX: number, clientY: number) => {
    setIsDragging(true)
    lastPointer.current = { x: clientX, y: clientY }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scale <= OPEN_SCALE) return
    startDragging(e.clientX, e.clientY)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (scale <= OPEN_SCALE) return
    const touch = e.touches[0]
    startDragging(touch.clientX, touch.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const dx = e.clientX - lastPointer.current.x
    const dy = e.clientY - lastPointer.current.y
    setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
    lastPointer.current = { x: e.clientX, y: e.clientY }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const touch = e.touches[0]
    const dx = touch.clientX - lastPointer.current.x
    const dy = touch.clientY - lastPointer.current.y
    setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
    lastPointer.current = { x: touch.clientX, y: touch.clientY }
  }

  const endDragging = () => {
    setIsDragging(false)
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
    let startDistance = 0
    let initialScale = scale
    let isPinching = false

    const getDistance = (t1: Touch, t2: Touch) =>
      Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY)

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
        isPinching = false
      } else if (e.touches.length === 2) {
        e.preventDefault()
        isPinching = true
        startDistance = getDistance(e.touches[0], e.touches[1])
        initialScale = scale
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isPinching && e.touches.length === 2) {
        e.preventDefault()
        const newDistance = getDistance(e.touches[0], e.touches[1])
        const rect = container.getBoundingClientRect()
        const midpoint = new DOMPoint(
          (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left,
          (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top,
        )
        const newScale = (newDistance / startDistance) * initialScale
        zoomAtPoint(midpoint, newScale)
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isPinching && e.touches.length < 2) {
        isPinching = false
        return
      }

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

    container.addEventListener("touchstart", handleTouchStart, { passive: false })
    container.addEventListener("touchmove", handleTouchMove, { passive: false })
    container.addEventListener("touchend", handleTouchEnd)

    return () => {
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
    }
  }, [scale, zoomAtPoint])

  useEffect(() => {
    const updateSizes = () => {
      setMaxDims({
        maxWidth: window.innerWidth * 0.9,
        maxHeight: window.innerHeight * 0.8,
      })
    }
    updateSizes()
    window.addEventListener("resize", updateSizes)
    return () => window.removeEventListener("resize", updateSizes)
  }, [])

  return (
    <div
      ref={containerRef}
      className="book-container relative w-full h-screen overflow-hidden flex items-center justify-center p-4"
      style={{ backgroundColor: "#0E0E0E" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={endDragging}
      onMouseLeave={endDragging}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={endDragging}
    >
      <HTMLFlipBook
        width={pageWidth}
        height={pageHeight}
        showCover
        maxShadowOpacity={0.2}
        drawShadow
        flippingTime={FLIP_DURATION}
        showPageCorners
        disableFlipByClick
        swipeDistance={30}
        className="book shadow-md flipbook"
        ref={bookRef}
        onFlip={handleFlip}
        style={{
          transform: `translate(${offsetX + translate.x}px, ${translate.y}px) scale(${scale})`,
          transition: isDragging ? "none" : "transform 0.3s ease",
          transformOrigin: "0 0",
          ["--flip-duration" as any]: `${FLIP_DURATION}ms`,
          ...(maxDims.maxWidth && { maxWidth: `${maxDims.maxWidth}px` }),
          ...(maxDims.maxHeight && { maxHeight: `${maxDims.maxHeight}px` }),
        }}
      >
        {pages.map((page, index) => {
          const isFirst = index === 0
          const isLast = index === totalPages - 1

          return (
            <div
              key={page.id}
              className={`w-full h-full bg-white overflow-hidden shadow-md ${
                isFirst || isLast ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (isFirst) handleNextPage()
                else if (isLast) handlePrevPage()
              }}
            >
              {page.content}
            </div>
          )
        })}
      </HTMLFlipBook>

      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrevPage}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent hover:bg-white/10 text-white/70 hover:text-white border-none w-16 h-16 transition-all duration-300"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNextPage}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-transparent hover:bg-white/10 text-white/70 hover:text-white border-none w-16 h-16 transition-all duration-300"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-4">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage + 1}
          goToPage={goToPage}
        />
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">
        <FullScreenButton />
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
