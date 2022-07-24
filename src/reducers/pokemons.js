import { LOAD_POKEMONS, SET_POKEMONS } from "../actions/types"

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
