"use client"

import Image from "next/image"
import { useState } from "react"

interface Page21VideoProps {
  imageSrc: string
  alt?: string
}

const Page21Video = ({ imageSrc, alt = "" }: Page21VideoProps) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="relative w-full h-full">
      {showVideo ? (
        <iframe
          src="https://www.youtube.com/embed/WOCJAxqM7uU"
          title="Portfolio video"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <>
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            unoptimized
          />
          <div
            className="absolute top-[100px] left-[100px] w-[150px] h-[100px] cursor-pointer"
            onClick={() => setShowVideo(true)}
          />
        </>
      )}
    </div>
  )
}

export default Page21Video
