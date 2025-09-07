export const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function fetchWrapper<T>(
   url: string,
   options?: RequestInit
): Promise<T> {
   if (!BASE_URL) {
      throw new Error(
         "VITE_API_BASE_URL is not defined in the environment variables."
      )
   }

   const response = await fetch(url, {
      ...options,
   })

   if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
         `API request failed with status ${response.status}: ${response.statusText}. Body: ${errorText}`
      )
   }

   return (await response.json()) as T
}
