import * as React from "react"

export function useViewportScale(baseWidth: number, baseHeight: number) {
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    const updateScale = () => {
      const { innerWidth, innerHeight } = window
      const newScale = Math.min(innerWidth / baseWidth, innerHeight / baseHeight)
      setScale(newScale)
      document.documentElement.style.setProperty("--viewport-scale", newScale.toString())
    }
    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [baseWidth, baseHeight])

  return scale
}

