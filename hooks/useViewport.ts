import * as React from "react"

interface Viewport {
  width: number
  height: number
}

export function useViewport() {
  const [viewport, setViewport] = React.useState<Viewport>({ width: 0, height: 0 })

  React.useEffect(() => {
    const update = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return viewport
}

