"use client"

import { useState, useEffect } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", handleChange)
    return () => document.removeEventListener("fullscreenchange", handleChange)
  }, [])

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
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

