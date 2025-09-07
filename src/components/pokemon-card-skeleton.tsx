export function PokemonCardSkeleton() {
   return (
      <div className="bg-white flex flex-col items-center gap-2 p-4 rounded-lg shadow-md font-normal animate-pulse h-[196px]">
         <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
         <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
         <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
      </div>
   )
}
