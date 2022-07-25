import { pokemonApi } from '../../../api/pokemonApi'
import { finishLoading, startLoading } from '../ui/uiSlice'
import { setPokemons } from './pokemonSlice'

export const getPokemons = () => {
  return async (dispatch) => {
    dispatch(startLoading())
    const { data: { results } } = await pokemonApi.get('pokemon?limit=151')
    const pokemonDetailed = await Promise.all(
      results.map((pokemon) => getPokemonsDetails(pokemon))
    )
    dispatch(setPokemons(pokemonDetailed))
    dispatch(finishLoading())
  }
}

const getPokemonsDetails = async (pokemon) => {
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