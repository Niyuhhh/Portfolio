"use client"

import * as React from "react"
import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
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

  const showOverlay = enableOnMobile && isMobile && orientation === "portrait"

  const canLockOrientation =
    typeof screen !== "undefined" && !!screen.orientation && !!screen.orientation.lock

  return (
    <div className="relative">
      {children}
      <div
        className={cn(
          "absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/80 text-white transition-opacity duration-300",
          showOverlay ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <RotateCcw className="h-12 w-12" />
        <p className="text-lg font-medium">Tournez votre appareil</p>
        {canLockOrientation ? (
          <Button
            onClick={() =>
              requestFullscreenAndLockLandscape(fullscreenTargetRef?.current ?? undefined)
            }
          >
            Plein écran & verrouiller en paysage
          </Button>
        ) : (
          <p className="max-w-xs text-center text-sm opacity-80">
            Le verrouillage d'orientation n'est pas disponible. Passez en paysage
            manuellement.
          </p>
        )}
      </div>
    </div>
  )
}

