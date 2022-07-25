import { getPokemonsDetails } from "../api/getPokemons"
import { FINISH_LOAD_POKEMONS, SET_FAVORITE, SET_POKEMONS, START_LOAD_POKEMONS } from "./types"

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const loadPokemons = () => ({
  type: START_LOAD_POKEMONS
})

const finishLoadPokemons = () => ({
  type: FINISH_LOAD_POKEMONS
})

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

export const getPokemonsWithDetails = (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map(pokemon => getPokemonsDetails(pokemon))
    )
    dispatch(setPokemons(pokemonDetailed))
    dispatch(finishLoadPokemons())

  }