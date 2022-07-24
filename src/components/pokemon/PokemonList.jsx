import { useSelector } from 'react-redux'
import { PokemonCard } from "./PokemonCard"
import './Pokemon.css'

export const PokemonList = () => {

  const { pokemons = [] } = useSelector(state => state.pokemons)

  return (
    <div className="PokemonList">
      {
        pokemons.map(({ name, sprites, types }) => (
          <PokemonCard
            key={name}
            name={name}
            sprite={sprites.front_default}
            types={types} />
        ))
      }
    </div>
  )
}