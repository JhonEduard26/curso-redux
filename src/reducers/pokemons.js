import { SET_POKEMONS } from "../actions/types"

const initialState = {
  isLoading: false,
  pokemons: []
}

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_POKEMONS:
      return { ...state, pokemons: [...payload] }

    default:
      return state
  }
}
