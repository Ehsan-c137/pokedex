import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/use-debounce"

interface SearchBarProps {
   onSearch: (term: string) => void
   value: string
   nextUrl: string | null
   previousUrl: string | null
   onNext: () => void
   onPrevious: () => void
}

export function SearchBar({
   onSearch,
   value,
   nextUrl,
   previousUrl,
   onNext,
   onPrevious,
}: SearchBarProps) {
   const [searchTerm, setSearchTerm] = useState("")

   const debouncedSearchTerm = useDebounce(searchTerm, 500)

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
   }

   useEffect(() => {
      onSearch(debouncedSearchTerm)
   }, [debouncedSearchTerm, onSearch])

   return (
      <div className="flex flex-col gap-4 items-center">
         <div className="flex gap-4 px-2 py-1 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition max-w-3xl rounded-full">
            <span>
               <SearchIcon />
            </span>
            <input
               type="text"
               placeholder="Search for Pokemon"
               className="outline-none border-none w-full"
               value={searchTerm ?? value}
               onChange={handleSearch}
            />
         </div>
         <div className="flex items-center gap-8 text-amber-50">
            <button onClick={onPrevious} disabled={!previousUrl}>
               Previous
            </button>
            <button onClick={onNext} disabled={!nextUrl}>
               Next
            </button>
         </div>
      </div>
   )
}

const SearchIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-search-icon lucide-search"
   >
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
   </svg>
)
