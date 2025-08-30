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

interface PaginationProps extends React.ComponentProps<"div"> {
  totalPages: number
  currentPage: number
  goToPage: (page: number) => void
  scale?: number
}

function Pagination({
  totalPages,
  currentPage,
  goToPage,
  className,
  scale = 1,
  ...props
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      style={{ transform: `scale(${scale})` }}
      {...props}
    >
      <Select
        value={String(currentPage)}
        onValueChange={(value) => goToPage(Number(value))}
      >
        <SelectTrigger className="h-9 w-24 bg-white/10 text-white border-none">
          <SelectValue placeholder={`Page ${currentPage}`} />
        </SelectTrigger>
        <SelectContent className="bg-white/10 backdrop-blur-sm text-white border-none">
          {pages.map((page) => (
            <SelectItem
              key={page}
              value={String(page)}
              className="text-white focus:bg-white/20"
            >
              {page}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { Pagination }

