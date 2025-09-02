"use client"

import * as React from "react"
import { RotateCcw } from "lucide-react"
import { useDeviceType } from "@/hooks/use-device-type"
import { useOrientation } from "@/hooks/use-orientation"
import { cn } from "@/lib/utils"

interface LandscapeGuardProps {
  children: React.ReactNode
  enableOnMobile?: boolean
  fullscreenTargetRef?: React.RefObject<HTMLElement>
}

export function LandscapeGuard({
  children,
  enableOnMobile = true,
  fullscreenTargetRef,
}: LandscapeGuardProps) {
  const deviceType = useDeviceType()
  const isMobile = deviceType === "mobile"
  const { orientation, requestFullscreenAndLockLandscape } = useOrientation()

  React.useEffect(() => {
    if (isMobile) {
      requestFullscreenAndLockLandscape(fullscreenTargetRef?.current ?? undefined)
    }
  }, [isMobile, requestFullscreenAndLockLandscape, fullscreenTargetRef])

  const showOverlay = enableOnMobile && isMobile && orientation === "portrait"

  return (
    <div className="relative">
      {children}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/80 text-white transition-opacity duration-300",
          showOverlay ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <RotateCcw className="h-12 w-12" />
        <p className="text-lg font-medium">Tournez votre appareil</p>
      </div>
    </div>
  )
}

