"use client"

import type { ReactNode } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface VideoModalProps {
  trigger: ReactNode
}

export function VideoModal({ trigger }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-6xl w-full p-0" showCloseButton>
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/WOCJAxqM7uU?autoplay=1"
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
