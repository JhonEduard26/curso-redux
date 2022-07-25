import { configureStore } from "@reduxjs/toolkit"
import { pokemonSlice } from "./slices/pokemon/pokemonSlice"
import { uiSlice } from "./slices/ui/uiSlice"

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    ui: uiSlice.reducer,
  }
})