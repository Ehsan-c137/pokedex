import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./layouts/main-layout.tsx"
import { HomeScreen } from "./screens/home.tsx"
import { PokemonDetailScreen } from "./screens/pokemon-detail.tsx"
import { NotFoundScreen } from "./screens/not-found.tsx"

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <HomeScreen />,
         },
         {
            path: "pokemon/:id",
            element: <PokemonDetailScreen />,
         },
         {
            path: "*",
            element: <NotFoundScreen />,
         },
      ],
   },
])

export function RouteProvider() {
   return <RouterProvider router={router} />
}
