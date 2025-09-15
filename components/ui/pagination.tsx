"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SectionSelectorProps extends React.ComponentProps<"div"> {
  sections: { label: string; page: number }[]
  currentPage: number
  goToPage: (page: number) => void
}

function SectionSelector({
  sections,
  currentPage,
  goToPage,
  className,
  ...props
}: SectionSelectorProps) {
  const activeSection = React.useMemo(() => {
    return sections.reduce<{
      label: string
      page: number
    } | undefined>((matched, section) => {
      if (section.page <= currentPage) {
        if (!matched || section.page >= matched.page) {
          return section
        }
      }
      return matched
    }, undefined)
  }, [sections, currentPage])

  const value = activeSection ? String(activeSection.page) : undefined

  return (
    <div
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    >
      <Select value={value} onValueChange={(next) => goToPage(Number(next))}>
        <SelectTrigger className="h-9 min-w-[12rem] border-none bg-white/10 text-white">
          <SelectValue placeholder="Sélectionner une section" />
        </SelectTrigger>
        <SelectContent className="border-none bg-white/10 text-white backdrop-blur-sm">
          {sections.map((section) => (
            <SelectItem
              key={section.page}
              value={String(section.page)}
              className="text-white focus:bg-white/20"
            >
              {section.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { SectionSelector }

