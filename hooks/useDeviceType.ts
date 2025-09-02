import * as React from "react"

interface DeviceType {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export function useDeviceType() {
  const [device, setDevice] = React.useState<DeviceType>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const pointerQuery = window.matchMedia("(pointer: coarse)")
    const widthQuery = window.matchMedia("(max-width: 768px)")

    const update = () => {
      const ua = navigator.userAgent
      const isTablet = /Tablet|iPad/i.test(ua)
      const isMobile =
        (!isTablet && /Mobi|Android/i.test(ua)) || pointerQuery.matches || widthQuery.matches
      const isDesktop = !isMobile && !isTablet

      setDevice({ isMobile, isTablet, isDesktop })
    }

    update()

    window.addEventListener("resize", update)
    pointerQuery.addEventListener("change", update)
    widthQuery.addEventListener("change", update)

    return () => {
      window.removeEventListener("resize", update)
      pointerQuery.removeEventListener("change", update)
      widthQuery.removeEventListener("change", update)
    }
  }, [])

  return device
}

