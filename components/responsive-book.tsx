"use client"

import dynamic from "next/dynamic"
import { useViewport } from "@/hooks/useViewport"

function ResponsiveBook() {
  const { width: screenWidth, height: screenHeight } = useViewport()

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
