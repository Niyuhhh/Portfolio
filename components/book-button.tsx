"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useHighlightButtons } from "./highlight-buttons-context"
import type { ComponentProps } from "react"

export function BookButton({ className, ...props }: ComponentProps<typeof Button>) {
  const highlightButtons = useHighlightButtons()
  return (
    <Button
      className={cn(className, highlightButtons && "grayscale pointer-events-none")}
      {...props}
    />
  )
}
