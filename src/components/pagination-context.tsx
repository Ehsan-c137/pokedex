import {
   useEffect,
   useMemo,
   useReducer,
   useCallback,
   type ReactNode,
} from "react"
import { paginationContext } from "./use-pagination"
import {
   type PokemonListItem,
   type AllPokemonsResponse,
} from "../services/types"
import { getAllPokemons } from "../services/pokemon"

export interface IContext {
   currentPage: number
   next: string | null
   previous: string | null
   totalPages: number
   data: PokemonListItem[] | null
   error: Error | null
   isLoading: boolean
   offset: number
   limit: number
   search: string
   goToNextPage: () => void
   goToPreviousPage: () => void
   setSearchTerm: (term: string) => void
}

type State = Omit<
   IContext,
   "goToNextPage" | "goToPreviousPage" | "setSearchTerm"
>

type PaginationAction =
   | { type: "FETCH_START" }
   | { type: "FETCH_SUCCESS"; payload: AllPokemonsResponse }
   | { type: "FETCH_ERROR"; payload: Error }
   | { type: "SET_SEARCH"; payload: string }
   | { type: "SET_PAGE_FROM_URL"; payload: string | null }

function reducer(state: State, action: PaginationAction): State {
   switch (action.type) {
      case "FETCH_START":
         return { ...state, isLoading: true, error: null }
      case "FETCH_SUCCESS":
         return {
            ...state,
            isLoading: false,
            data: action.payload.results,
            next: action.payload.next,
            previous: action.payload.previous,
            totalPages: Math.ceil(action.payload.count / state.limit),
         }
      case "FETCH_ERROR":
         return { ...state, isLoading: false, error: action.payload }
      case "SET_SEARCH":
         return { ...state, search: action.payload, offset: 0, currentPage: 1 }
      case "SET_PAGE_FROM_URL": {
         if (!action.payload) return state
         try {
            const url = new URL(action.payload)
            const offset = parseInt(url.searchParams.get("offset") || "0", 10)
            const limit = parseInt(
               url.searchParams.get("limit") || state.limit.toString(),
               10
            )
            const currentPage = Math.floor(offset / limit) + 1
            return { ...state, offset, currentPage, limit }
         } catch {
            return state
         }
      }
      default:
         return state
   }
}

const initialState: State = {
   offset: 0,
   totalPages: 0,
   currentPage: 1,
   limit: 20,
   next: null,
   previous: null,
   search: "",
   data: null,
   error: null,
   isLoading: false,
}

interface PaginationProviderProps {
   children: ReactNode
}

export function PaginationProvider({ children }: PaginationProviderProps) {
   const [state, dispatch] = useReducer(reducer, initialState)

   const fetchPokemons = useCallback(async () => {
      dispatch({ type: "FETCH_START" })
      try {
         const data = await getAllPokemons({
            limit: state.limit,
            offset: state.offset,
            search: state.search,
         })
         dispatch({ type: "FETCH_SUCCESS", payload: data })
      } catch (error) {
         dispatch({ type: "FETCH_ERROR", payload: error as Error })
      }
   }, [state.limit, state.offset, state.search])

   useEffect(() => {
      fetchPokemons()
   }, [fetchPokemons])

   const goToNextPage = useCallback(() => {
      if (state.next) {
         dispatch({ type: "SET_PAGE_FROM_URL", payload: state.next })
      }
   }, [state.next])

   const goToPreviousPage = useCallback(() => {
      if (state.previous) {
         dispatch({ type: "SET_PAGE_FROM_URL", payload: state.previous })
      }
   }, [state.previous])

   const setSearchTerm = useCallback((term: string) => {
      dispatch({ type: "SET_SEARCH", payload: term })
   }, [])

   const value = useMemo(
      () => ({
         ...state,
         goToNextPage,
         goToPreviousPage,
         setSearchTerm,
      }),
      [state, goToNextPage, goToPreviousPage, setSearchTerm]
   )

   return (
      <paginationContext.Provider value={value}>
         {children}
      </paginationContext.Provider>
   )
}
