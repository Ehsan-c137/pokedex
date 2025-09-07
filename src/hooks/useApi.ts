import { useState, useCallback } from "react"

interface ApiState<T> {
   data: T | null
   isLoading: boolean
   error: Error | null
}

export function useApi<T, TArgs extends unknown[]>(
   apiFunc: (...args: TArgs) => Promise<T>
): [execute: (...args: TArgs) => Promise<void>, state: ApiState<T>] {
   const [state, setState] = useState<ApiState<T>>({
      data: null,
      isLoading: false,
      error: null,
   })

   const execute = useCallback(
      async (...args: TArgs) => {
         setState({ data: null, isLoading: true, error: null })
         try {
            const result = await apiFunc(...args)
            setState({ data: result, isLoading: false, error: null })
         } catch (err) {
            setState({ data: null, isLoading: false, error: err as Error })
         }
      },
      [apiFunc]
   )

   return [execute, state]
}
