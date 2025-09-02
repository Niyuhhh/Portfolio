import * as React from "react"

export type Orientation = "portrait" | "landscape"

function getOrientation(): Orientation {
  if (typeof window === "undefined") return "portrait"
  return window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape"
}

export function useOrientation() {
  const [orientation, setOrientation] = React.useState<Orientation>(getOrientation())

  React.useEffect(() => {
    const handler = () => setOrientation(getOrientation())
    window.addEventListener("orientationchange", handler)
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("orientationchange", handler)
      window.removeEventListener("resize", handler)
    }
  }, [])

  const requestFullscreenAndLockLandscape = React.useCallback(async (element?: HTMLElement | null) => {
    const target = element ?? document.documentElement
    if (target.requestFullscreen) {
      await target.requestFullscreen()
    }
    if (screen.orientation && screen.orientation.lock) {
      try {
        await screen.orientation.lock("landscape")
      } catch (e) {
        // ignore
      }
    }
  }, [])

  return { orientation, requestFullscreenAndLockLandscape }
}

