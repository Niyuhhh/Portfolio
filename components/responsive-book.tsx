"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

function ResponsiveBook() {
  const [screenHeight, setScreenHeight] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const updateSize = () => {
      setScreenHeight(window.innerHeight)
      setScreenWidth(window.innerWidth)
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div
      style={{
        height: screenHeight * 0.85,
        width: screenWidth * 0.85,
        margin: "0 auto",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Book content goes here */}
    </div>
  )
}

export default dynamic(() => Promise.resolve(ResponsiveBook), { ssr: false })
