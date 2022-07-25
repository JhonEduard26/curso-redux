import { SET_FAVORITE, SET_POKEMONS } from "../actions/types"

const initialState = {
  pokemons: []
}

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons]
      const currentPkmIdx = newPokemonList.findIndex(pokemon => pokemon.id === payload.pokemonId)

      if (currentPkmIdx < 0) {
        return state
      }

      newPokemonList[currentPkmIdx].favorite = !newPokemonList[currentPkmIdx].favorite

      return {
        ...state,
        pokemons: newPokemonList,
      }

    case SET_POKEMONS:
      return {
        ...state,
        pokemons: [...payload]
      }


    default:
      return state
  }
}
