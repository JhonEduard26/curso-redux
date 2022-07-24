import { getPokemonsDetails } from "../api/getPokemons"
import { SET_POKEMONS } from "./types"

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const getPokemonsWithDetails = (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map(pokemon => getPokemonsDetails(pokemon))
    )
    dispatch(setPokemons(pokemonDetailed))
  }
