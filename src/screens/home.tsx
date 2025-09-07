import { PaginationProvider } from "../components/pagination-context"
import { usePagination } from "../components/use-pagination"
import { SearchBar } from "./search-bar"
import { HomeContainer } from "../components/home"

function HomePokemonList() {
   const {
      data,
      isLoading,
      error,
      next,
      previous,
      goToNextPage,
      goToPreviousPage,
      setSearchTerm,
      search,
   } = usePagination()

   return (
      <div className="flex flex-col gap-4 h-full w-full">
         <SearchBar
            onSearch={setSearchTerm}
            value={search}
            nextUrl={next}
            previousUrl={previous}
            onNext={goToNextPage}
            onPrevious={goToPreviousPage}
         />
         <HomeContainer
            pokemons={data || []}
            isLoading={isLoading}
            error={error}
         />
      </div>
   )
}

export function HomeScreen() {
   return (
      <PaginationProvider>
         <HomePokemonList />
      </PaginationProvider>
   )
}
