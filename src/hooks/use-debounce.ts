import { useState, useEffect } from "react"

/**
 * A hook to debounce a value. It will only update the returned value when the
 * input value has not changed for the specified delay.
 *
 * @param value The value to debounce.
 * @param delay The debounce delay in milliseconds.
 * @returns The debounced value.
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * // useEffect to fetch data will only run when debouncedSearchTerm changes
 */
export function useDebounce<T>(value: T, delay: number): T {
   const [debouncedValue, setDebouncedValue] = useState<T>(value)

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)

      return () => clearTimeout(handler)
   }, [value, delay])

   return debouncedValue
}
