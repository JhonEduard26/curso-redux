import { pokemonApi } from "./pokemonApi"

export const getPokemons = async () => {
  try {
    const { data } = await pokemonApi.get('pokemon?limit=15')
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonsDetails = async (pokemon) => {
  try {
    const { data } = await pokemonApi.get(pokemon.url)
    return data
  } catch (error) {
    console.log(error)
  }
}