import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'

const { Meta } = Card

export const PokemonCard = ({ name, sprite, types }) => {
  return (
    <Card
      cover={
        <img
          alt={name}
          src={sprite}
        />}
      actions={[
        <StarOutlined />
      ]}
    >
      <Meta
        title={name}
        description={types.map(type => type.type.name).join(', ')}
      />
    </Card>
  )
}
