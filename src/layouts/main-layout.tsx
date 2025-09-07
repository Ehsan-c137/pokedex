import { Link, Outlet } from "react-router-dom"

export function MainLayout() {
   return (
      <div className="container mx-auto min-h-screen">
         <header className="flex gap-4 items-center px-2 py-1 justify-center  h-20 bg-red-400">
            <Link to="/">
               <p className="font-bold text-white text-2xl hover:text-red-600 transition">
                  Pokédex
               </p>
            </Link>
            <Link to={"/"}>
               <p className="font-bold text-white text-2xl hover:text-blue-400 transition">
                  Home
               </p>
            </Link>
         </header>
         <main
            className="py-4"
            style={{
               minHeight: "calc(100vh - 160px)",
            }}
         >
            <Outlet />
         </main>
         <header className="px-2 py-1 flex justify-center items-center h-20 bg-red-400">
            <Link to="/">
               <p className="font-bold text-white text-2xl">Pokédex Footer</p>
            </Link>
         </header>
      </div>
   )
}
