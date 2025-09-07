import { PokemonCard } from "./pokemon-card"
import type { PokemonListItem } from "../services/types"
import { PokemonCardSkeleton } from "./pokemon-card-skeleton"

interface IProps {
   pokemons: PokemonListItem[]
   isLoading: boolean
   error: Error | null
}

export function HomeContainer({ pokemons, isLoading, error }: IProps) {
   if (error?.message) {
      return <div className="w-full text-center">{error.message}</div>
   }

   if (isLoading) {
      return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 20 }).map((_, index) => (
               <PokemonCardSkeleton key={index} />
            ))}
         </div>
      )
   }

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {pokemons.map((pokemon) => (
            <PokemonCard
               key={pokemon.name}
               name={pokemon.name}
               url={pokemon.url}
            />
         ))}
      </div>
   )
}
