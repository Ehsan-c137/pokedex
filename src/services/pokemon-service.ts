import { type AllPokemonsResponse, type PokemonDetailResponse } from "./types"

export interface PokemonService {
   getAll(params: {
      limit?: number
      offset?: number
      search?: string
   }): Promise<AllPokemonsResponse>

   getDetail(id: string): Promise<PokemonDetailResponse>
}
