import { BASE_URL, fetchWrapper } from "./index"
import { type AllPokemonsResponse, type PokemonDetailResponse } from "./types"
import { type PokemonService } from "./pokemon-service"

const POKEMON_API_URL = `${BASE_URL}/pokemon`

export async function getAllPokemons(params: {
   limit?: number
   offset?: number
   search?: string
}): Promise<AllPokemonsResponse> {
   // if (params.search) {
   //    try {
   //       // The PokeAPI doesn't support partial search on the list endpoint.
   //       // This will only find a pokemon if the user types the exact name.
   //       const pokemon = await getPokemonDetail(params.search.toLowerCase())
   //       const result: PokemonListItem = {
   //          name: pokemon.name,
   //          url: `${POKEMON_API_URL}/${pokemon.id}/`,
   //       }
   //       return {
   //          count: 1,
   //          next: null,
   //          previous: null,
   //          results: [result],
   //       }
   //    } catch (e) {
   //       // If pokemon is not found by name, return an empty list.
   //       return {
   //          count: 0,
   //          next: null,
   //          previous: null,
   //          results: [],
   //       }
   //    }
   // }

   const url = new URL(POKEMON_API_URL)
   if (params.limit) url.searchParams.append("limit", String(params.limit))
   if (params.offset) url.searchParams.append("offset", String(params.offset))

   return fetchWrapper<AllPokemonsResponse>(url.toString())
}

export async function getPokemonDetail(
   id: string
): Promise<PokemonDetailResponse> {
   return fetchWrapper<PokemonDetailResponse>(`${POKEMON_API_URL}/${id}`)
}

export const pokemonApi: PokemonService = {
   getAll: getAllPokemons,
   getDetail: getPokemonDetail,
}
