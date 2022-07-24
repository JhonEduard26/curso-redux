import { configureStore } from "@reduxjs/toolkit"
import { pokemonReducer } from "../reducers/pokemons"

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  }
})