import { type PokemonDetailResponse } from "../services/types"
import { Divider } from "./divider"
import { PokemonDetailSkeleton } from "./pokemon-detail-skeleton"

interface IProps {
   data: PokemonDetailResponse | null
   isLoading: boolean
   error: Error | null
}

export function PokemonDetailContainer({ data, isLoading, error }: IProps) {
   if (error?.message) {
      return <div className="w-full text-center">{error.message}</div>
   }

   if (isLoading || !data) {
      return <PokemonDetailSkeleton />
   }

   const abilities = data.abilities
      .filter((ability) => !ability.is_hidden)
      .map((ability) => ability.ability.name)

   return (
      <div className="w-full h-full flex justify-center items-center">
         <div className="flex flex-col gap-2 items-center">
            <img
               src={data.sprites.front_default}
               alt={data.name}
               className="w-24 h-24"
            />
            <div className="w-full flex gap-4 items-center justify-between">
               <p className="text-2xl font-bold capitalize">{data.name}</p>
               <p className="flex items-center text-blue-400 font-medium">
                  {data.id.toString().padStart(3, "0")}
               </p>
            </div>
            <div className="space-y-2">
               <p className="font-medium">Type</p>
               <div className="flex gap-2 flex-wrap">
                  {data.types.map((type, index) => (
                     <div
                        key={index}
                        className="flex items-center gap-2 bg-red-600/10 px-2 py-1 font-medium rounded-full"
                     >
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <p className="text-red-500">{type.type.name}</p>
                     </div>
                  ))}
               </div>
            </div>
            <Divider />
            <div className="flex flex-col w-full font-medium">
               <div className="flex justify-between">
                  <p>Height</p>
                  <p>{data.height} m</p>
               </div>
               <div className="flex justify-between">
                  <p>Weight</p>
                  <p>{data.weight} Kg</p>
               </div>
            </div>
            <Divider />
            <div className="flex flex-col w-full">
               <p className="font-medium">Abilities</p>
               <div className="flex flex-wrap gap-2">
                  {abilities.map((ability) => (
                     <div key={ability} className="flex gap-2 items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <p>{ability}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}
