import { endpoint } from "@/utils/endpoint";

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`)

  if(!data.ok) {
    throw new Error('Falló el Fetch de datos')
  }

  return data.json()
}