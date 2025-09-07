import { Link, Outlet } from "react-router-dom"

export function MainLayout() {
   return (
      <div className="container mx-auto min-h-screen">
         <header className="px-2 py-1 flex justify-center items-center h-20 bg-red-400">
            <Link to="/">
               <p className="font-bold text-white text-2xl">Pokédex</p>
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
