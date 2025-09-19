"use client"

import { useState, useEffect } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const doc = document as Document & {
      webkitFullscreenElement?: Element | null
    }

    const handleChange = () => {
      const fullscreenElement = doc.fullscreenElement ?? doc.webkitFullscreenElement
      setIsFullscreen(Boolean(fullscreenElement))
    }

    document.addEventListener("fullscreenchange", handleChange)
    document.addEventListener("webkitfullscreenchange", handleChange)

    handleChange()

    return () => {
      document.removeEventListener("fullscreenchange", handleChange)
      document.removeEventListener("webkitfullscreenchange", handleChange)
    }
  }, [])

  const toggleFullscreen = async () => {
    try {
      const doc = document as Document & {
        webkitFullscreenElement?: Element | null
        webkitExitFullscreen?: () => Promise<void>
      }
      const element = document.documentElement as HTMLElement & {
        webkitRequestFullscreen?: () => Promise<void>
      }

      const fullscreenElement = doc.fullscreenElement ?? doc.webkitFullscreenElement

      if (!fullscreenElement) {
        if (element.requestFullscreen) {
          await element.requestFullscreen()
        } else if (element.webkitRequestFullscreen) {
          await element.webkitRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen()
        }
      }
      setErrorMessage("")
    } catch (error) {
      setErrorMessage("Échec de l'activation du mode plein écran")
      toast({
        variant: "destructive",
        description: "Impossible d'activer le mode plein écran.",
      })
    }
  }

  return (
    <>
      <Button
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
      </Button>
      <span aria-live="polite" className="sr-only">
        {errorMessage}
      </span>
    </>
  )
}

