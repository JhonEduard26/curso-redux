import { useSelector } from 'react-redux'
import { PokemonCard } from "./PokemonCard"
import './Pokemon.css'

export const PokemonList = () => {

  const { pokemons = [] } = useSelector(state => state.pokemons)

  return (
    <div className="PokemonList">
      {
        pokemons.map(({ name, types, sprites, id, favorite }) => (
          <PokemonCard
            key={name}
            name={name}
            types={types}
            sprites={sprites}
            favorite={favorite}
            id={id}
          />
        ))
      }
    </div>
  )
}