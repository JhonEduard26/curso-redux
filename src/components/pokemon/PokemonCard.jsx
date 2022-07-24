import { Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../../actions'
import { StarButton } from '../ui/StarButton'

const { Meta } = Card

export const PokemonCard = ({ name, types, sprites, id, favorite }) => {

  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
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
