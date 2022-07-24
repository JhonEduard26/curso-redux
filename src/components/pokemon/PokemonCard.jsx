import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Meta } = Card

export const PokemonCard = () => {

  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        />}
      actions={[
        <StarOutlined />
      ]}
    >
      <Meta
        title="Ditto"
        description="Normal"
      />
    </Card>
  )
}
