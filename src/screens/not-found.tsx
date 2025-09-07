import { Link } from "react-router-dom"

export function NotFoundScreen() {
   return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
         <h1 className="text-4xl font-bold">404</h1>
         <p className="text-xl">Page Not Found</p>
         <Link to="/">Home</Link>
      </div>
   )
}
