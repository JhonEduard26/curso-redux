import {
  Col,
  Row,
} from 'antd'
import { Searcher } from './components/ui/Searcher'
import { PokemonList } from './components/pokemon/PokemonList'
import 'antd/dist/antd.css'
import './App.css'

const pokemons = [1, 2, 3, 4, 5]

export const App = () => {
  return (
    <div className="App">
      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>
      <div className='App__card-container'>
        <PokemonList />
      </div>
    </div>
  )
}
