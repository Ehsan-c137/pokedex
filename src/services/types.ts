export interface PokemonListItem {
   name: string
   url: string
}

export interface AllPokemonsResponse {
   count: number
   next: string | null
   previous: string | null
   results: PokemonListItem[]
}

export interface PokemonDetailResponse {
   id: number
   name: string
   height: number
   weight: number
   abilities: {
      ability: {
         name: string
         url: string
      }
      is_hidden: boolean
      slot: number
   }[]
   types: {
      slot: number
      type: {
         name: string
         url: string
      }
   }[]
   sprites: {
      front_default: string
   }
}
