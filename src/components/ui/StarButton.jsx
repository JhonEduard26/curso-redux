import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export const StarButton = ({ isFavorite, onclick }) => {

  const Icon = isFavorite ? StarFilled : StarOutlined

  return (
    <Button icon={<Icon />} onClick={onclick} />
  )
}
