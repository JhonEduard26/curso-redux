import { LOAD_POKEMONS, SET_FAVORITE, SET_POKEMONS } from "../actions/types"

const initialState = {
  isLoading: false,
  pokemons: []
}

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_POKEMONS:
      return {
        ...state,
        isLoading: true,
      }

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
        isLoading: false,
        pokemons: [...payload]
      }


    default:
      return state
  }
}
