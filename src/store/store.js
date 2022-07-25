import { configureStore } from "@reduxjs/toolkit"
import { pokemonReducer } from "../reducers/pokemons"
import { uiReducer } from "../reducers/ui"

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    ui: uiReducer,
  }
})