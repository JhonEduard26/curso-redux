import { pokemonApi } from "./pokemonApi"

export const getPokemons = async () => {
  try {
    const { data } = await pokemonApi.get('pokemon?limit=151')
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonsDetails = async (pokemon) => {
  try {
    const { data } = await pokemonApi.get(pokemon.url)
    const { name, types, sprites, id } = data
    return {
      name,
      types,
      sprites,
      id
    }
  } catch (error) {
    console.log(error)
  }
}