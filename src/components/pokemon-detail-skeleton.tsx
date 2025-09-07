import { Divider } from "./divider"

export function PokemonDetailSkeleton() {
   return (
      <div className="w-full h-full flex justify-center items-center">
         <div className="flex flex-col gap-2 items-center animate-pulse w-64">
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div className="w-full flex gap-4 items-center justify-between">
               <div className="h-8 w-3/5 bg-gray-200 rounded"></div>
               <div className="h-6 w-1/5 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2 w-full">
               <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
               <div className="flex gap-2 flex-wrap">
                  <div className="h-7 w-20 bg-gray-200 rounded-full"></div>
                  <div className="h-7 w-20 bg-gray-200 rounded-full"></div>
               </div>
            </div>
            <Divider />
            <div className="flex flex-col w-full gap-2">
               <div className="flex justify-between">
                  <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
               </div>
               <div className="flex justify-between">
                  <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
               </div>
            </div>
            <Divider />
            <div className="flex flex-col w-full gap-2">
               <div className="h-5 w-1/3 bg-gray-200 rounded"></div>
               <div className="flex flex-wrap gap-2">
                  <div className="h-5 w-24 bg-gray-200 rounded"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded"></div>
               </div>
            </div>
         </div>
      </div>
   )
}
