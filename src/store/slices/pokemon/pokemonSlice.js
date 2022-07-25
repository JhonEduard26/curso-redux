import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload)

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite
        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    }
  }
})

export const { setPokemons, setFavorite } = pokemonSlice.actions