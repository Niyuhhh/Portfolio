import * as React from "react"

export function useOrientation() {
  const [orientation, setOrientation] = React.useState<"portrait" | "landscape">("portrait")
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  React.useEffect(() => {
    const getOrientation = () => {
      if (window.matchMedia("(orientation: landscape)").matches) {
        return "landscape"
      }
      const type = screen.orientation?.type
      return type && type.startsWith("landscape") ? "landscape" : "portrait"
    }

    const handleChange = () => {
      setOrientation(getOrientation())
      setIsFullscreen(!!document.fullscreenElement)
    }

    handleChange()

    document.addEventListener("fullscreenchange", handleChange)
    window.addEventListener("orientationchange", handleChange)
    screen.orientation?.addEventListener("change", handleChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleChange)
      window.removeEventListener("orientationchange", handleChange)
      screen.orientation?.removeEventListener("change", handleChange)
    }
  }, [])

  const requestFullscreenAndLockLandscape = React.useCallback(
    async (ref?: React.RefObject<HTMLElement>) => {
      const element = ref?.current || document.documentElement
      if (!element) return
      await element.requestFullscreen?.()
      try {
        await screen.orientation?.lock("landscape")
      } catch (_) {}
    },
    []
  )

  return { orientation, isFullscreen, requestFullscreenAndLockLandscape }
}

