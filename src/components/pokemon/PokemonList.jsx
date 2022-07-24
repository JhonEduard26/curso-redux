import { PokemonCard } from "./PokemonCard"
import './Pokemon.css'

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {
        pokemons.map((idx) => (
          <PokemonCard key={idx} />
        ))
      }
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}
