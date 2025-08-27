import { createContext, useContext } from "react"

export const HighlightButtonsContext = createContext(true)

export function useHighlightButtons() {
  return useContext(HighlightButtonsContext)
}
