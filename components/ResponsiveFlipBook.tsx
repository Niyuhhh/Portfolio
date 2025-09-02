"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import type { default as FlipBook } from "react-pageflip"

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false })

export interface ResponsiveFlipBookProps {
  pages: ReactNode[]
  pageAspectRatio?: number
  marginLeftRatio?: number
  marginRightRatio?: number
  marginTopRatio?: number
  marginBottomRatio?: number
  maxBookWidth?: number
  maxBookHeight?: number
  className?: string
}

export function ResponsiveFlipBook({
  pages,
  pageAspectRatio = 1.414,
  marginLeftRatio = 0,
  marginRightRatio = 0,
  marginTopRatio = 0,
  marginBottomRatio = 0,
  maxBookWidth,
  maxBookHeight,
  className,
}: ResponsiveFlipBookProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bookRef = useRef<FlipBook | null>(null)
  const [{ pageWidth, pageHeight, left, top }, setLayout] = useState({
    pageWidth: 0,
    pageHeight: 0,
    left: 0,
    top: 0,
  })

  const updateLayout = () => {
    const container = containerRef.current
    if (!container) return
    const cw = container.clientWidth
    const ch = container.clientHeight

    const marginLeft = cw * marginLeftRatio
    const marginRight = cw * marginRightRatio
    const marginTop = ch * marginTopRatio
    const marginBottom = ch * marginBottomRatio

    let frameWidth = cw - marginLeft - marginRight
    let frameHeight = ch - marginTop - marginBottom

    if (maxBookWidth !== undefined) frameWidth = Math.min(frameWidth, maxBookWidth)
    if (maxBookHeight !== undefined) frameHeight = Math.min(frameHeight, maxBookHeight)

    frameWidth = Math.max(frameWidth, 0)
    frameHeight = Math.max(frameHeight, 0)

    let newPageWidth = frameWidth / 2
    let newPageHeight = newPageWidth * pageAspectRatio

    if (newPageHeight > frameHeight) {
      newPageHeight = frameHeight
      newPageWidth = newPageHeight / pageAspectRatio
    }

    const bookWidth = newPageWidth * 2
    const bookHeight = newPageHeight

    const newLeft = marginLeft + (frameWidth - bookWidth) / 2
    const newTop = marginTop + (frameHeight - bookHeight) / 2

    setLayout(prev => {
      if (
        prev.pageWidth === newPageWidth &&
        prev.pageHeight === newPageHeight &&
        prev.left === newLeft &&
        prev.top === newTop
      ) {
        return prev
      }
      return {
        pageWidth: newPageWidth,
        pageHeight: newPageHeight,
        left: newLeft,
        top: newTop,
      }
    })
  }

  useEffect(() => {
    updateLayout()
    const container = containerRef.current
    let resizeObserver: ResizeObserver | null = null
    if (container && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateLayout)
      resizeObserver.observe(container)
    } else {
      window.addEventListener("resize", updateLayout)
    }
    return () => {
      if (resizeObserver && container) {
        resizeObserver.unobserve(container)
        resizeObserver.disconnect()
      } else {
        window.removeEventListener("resize", updateLayout)
      }
    }
  }, [
    pageAspectRatio,
    marginLeftRatio,
    marginRightRatio,
    marginTopRatio,
    marginBottomRatio,
    maxBookWidth,
    maxBookHeight,
  ])

  useEffect(() => {
    if (bookRef.current) {
      bookRef.current.pageFlip().update()
    }
  }, [pageWidth, pageHeight])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {pageWidth > 0 && pageHeight > 0 && (
        <HTMLFlipBook
          ref={bookRef}
          width={pageWidth}
          height={pageHeight}
          usePortrait={false}
          autoSize={false}
          style={{ position: "absolute", left, top }}
        >
          {pages.map((page, index) => (
            <div key={index} className="w-full h-full">
              {page}
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  )
}

export default ResponsiveFlipBook

