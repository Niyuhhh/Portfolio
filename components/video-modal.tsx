"use client"

import type { ReactNode } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface VideoModalProps {
  trigger: ReactNode
  /**
   * A YouTube URL (watch, share or embed) that will be transformed into an embeddable URL.
   */
  videoUrl?: string
}

const toEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "")
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`
      }
    }

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v")
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.search.includes("autoplay=1")
          ? parsed.toString()
          : `${parsed.toString()}${parsed.search ? "&" : "?"}autoplay=1`
      }
    }
  } catch (error) {
    console.warn("Unable to parse video URL", error)
  }

  return url.includes("autoplay=1") ? url : `${url}${url.includes("?") ? "&" : "?"}autoplay=1`
}

export function VideoModal({
  trigger,
  videoUrl = "https://www.youtube.com/embed/WOCJAxqM7uU?autoplay=1",
}: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-screen-xl w-full p-0" showCloseButton>
        <div className="aspect-video w-full">
          <iframe
            src={toEmbedUrl(videoUrl)}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoModal
