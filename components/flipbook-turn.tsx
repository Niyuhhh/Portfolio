"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

interface FlipbookTurnProps {
  pages: string[]
}

export default function FlipbookTurn({ pages }: FlipbookTurnProps) {
  const flipbookRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeFlipbook = () => {
      if (!flipbookRef.current || !(window as any).jQuery) return
      const ratio = 1600 / 600
      let width = window.innerWidth
      let height = width / ratio
      if (height > window.innerHeight) {
        height = window.innerHeight
        width = height * ratio
      }
      ;(window as any).jQuery(flipbookRef.current).turn("size", width, height)
    }

    const init = () => {
      if (!flipbookRef.current || !(window as any).jQuery) return
      const $flipbook = (window as any).jQuery(flipbookRef.current)
      $flipbook.turn({ display: "double", autoCenter: true })
      resizeFlipbook()
      window.addEventListener("resize", resizeFlipbook)
    }

    init()
    return () => {
      window.removeEventListener("resize", resizeFlipbook)
      if (flipbookRef.current && (window as any).jQuery) {
        (window as any).jQuery(flipbookRef.current).turn("destroy")
      }
    }
  }, [])

  const goPrev = () => {
    if ((window as any).jQuery) {
      (window as any).jQuery(flipbookRef.current).turn("previous")
    }
  }

  const goNext = () => {
    if ((window as any).jQuery) {
      (window as any).jQuery(flipbookRef.current).turn("next")
    }
  }

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.js" strategy="beforeInteractive" />
      <div id="flipbook-container">
        <div id="flipbook" ref={flipbookRef}>
          {pages.map((src, idx) => (
            <div className="page" key={idx}>
              <img src={src} alt={`Page ${idx + 1}`} />
            </div>
          ))}
        </div>
        <button id="prev" onClick={goPrev}>←</button>
        <button id="next" onClick={goNext}>→</button>
      </div>
    </>
  )
}
