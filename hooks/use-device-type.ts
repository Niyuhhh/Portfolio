import { useIsMobile } from "@/hooks/use-mobile"

export type DeviceType = "mobile" | "desktop"

export function useDeviceType(): DeviceType {
  const isMobile = useIsMobile()
  return isMobile ? "mobile" : "desktop"
}

