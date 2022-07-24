import { pokemonApi } from "./pokemonApi"

export const getPokemons = async () => {
  try {
    const { data } = await pokemonApi.get('pokemon?limit=10')
    return data.results
  } catch (error) {
    console.log(error)
  }
}