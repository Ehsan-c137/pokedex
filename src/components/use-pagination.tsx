import { useContext, createContext } from "react"
import type { IContext } from "./pagination-context"

export const paginationContext = createContext<IContext | null>(null)

export function usePagination() {
   const pagination = useContext(paginationContext)
   if (!pagination) {
      throw new Error("usePagination must be used within a PaginationProvider")
   }
   return pagination
}
