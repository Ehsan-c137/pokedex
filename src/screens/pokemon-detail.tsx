import { useParams } from "react-router-dom"
import { useApi } from "../hooks/useApi"
import { getPokemonDetail } from "../services/pokemon"
import { useEffect } from "react"
import { PokemonDetailContainer } from "../components/pokemon-detail"

export function PokemonDetailScreen() {
   const { id } = useParams()
   const [fetchPokemonDetail, { data, error, isLoading }] =
      useApi(getPokemonDetail)

   useEffect(() => {
      if (!id) return
      fetchPokemonDetail(id)
   }, [fetchPokemonDetail, id])

   return (
      <PokemonDetailContainer data={data} isLoading={isLoading} error={error} />
   )
}
