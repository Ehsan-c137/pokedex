import { useEffect } from "react"
import { useApi } from "../hooks/useApi"
import { getPokemonDetail } from "../services/pokemon"
import type { PokemonListItem } from "../services/types"
import { PokemonCardSkeleton } from "./pokemon-card-skeleton"
import { Link } from "react-router-dom"

export function PokemonCard({ name, url }: PokemonListItem) {
   const [fetchPokemonDetail, { data, error, isLoading }] =
      useApi(getPokemonDetail)

   useEffect(() => {
      if (!url) return
      const id = url.split("/").filter(Boolean).pop()
      if (id) {
         fetchPokemonDetail(id)
      }
   }, [fetchPokemonDetail, url])

   if (isLoading) {
      return <PokemonCardSkeleton />
   }

   if (error || !data) {
      return (
         <div className="flex items-center justify-center p-4 border rounded-lg shadow-md min-h-[196px]">
            Error.
         </div>
      )
   }

   return (
      <Link
         to={`/pokemon/${data.id}`}
         className="bg-white flex flex-col items-center gap-2 p-4 rounded-lg shadow-md font-normal"
      >
         <img
            className="w-24 h-24"
            alt={name}
            src={data.sprites.front_default}
         />
         <p className="text-xl capitalize font-bold">{name}</p>
         <p className="text-gray-500">#{data.id.toString().padStart(3, "0")}</p>
      </Link>
   )
}
