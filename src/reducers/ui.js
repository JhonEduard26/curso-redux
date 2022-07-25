import { FINISH_LOAD_POKEMONS, START_LOAD_POKEMONS } from "../actions/types"

const initialState = {
  isLoading: false,
}

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case START_LOAD_POKEMONS:
      return {
        ...state,
        isLoading: true,
      }

    case FINISH_LOAD_POKEMONS:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
