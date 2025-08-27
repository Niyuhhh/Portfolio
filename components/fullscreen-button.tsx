"use client"

import { useState, useEffect } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { BookButton } from "@/components/book-button"

export function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", handleChange)
    return () => document.removeEventListener("fullscreenchange", handleChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    } else {
      await document.exitFullscreen()
    }
  }

  return (
    <BookButton
      variant="ghost"
      size="icon"
      onClick={toggleFullscreen}
      className="bg-transparent hover:bg-white/10 text-white/70 hover:text-white border-none w-16 h-16 transition-all duration-300"
    >
      {isFullscreen ? (
        <Minimize2 className="h-8 w-8" />
      ) : (
        <Maximize2 className="h-8 w-8" />
      )}
    </BookButton>
  )
}

