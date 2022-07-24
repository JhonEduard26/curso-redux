import { PokemonCard } from "./PokemonCard"
import './Pokemon.css'

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {
        pokemons.map(({ name }) => (
          <PokemonCard key={name} name={name} />
        ))
      }
    </div>
  )
}