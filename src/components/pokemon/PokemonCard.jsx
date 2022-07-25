import { Card } from 'antd'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../../store/slices/pokemon/pokemonSlice'
import { StarButton } from '../ui/StarButton'

const { Meta } = Card

export const PokemonCard = ({ name, types, sprites, id, favorite }) => {

  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite(id))
  }

  return (
    <Card
      title={name}
      extra={<StarButton isFavorite={favorite} onclick={handleOnFavorite} />}
      cover={
        < img
          alt={name}
          src={sprites.front_default}
        />} >
      <Meta
        description={types.map(type => type.type.name).join(', ')}
      />
    </Card >
  )
}
