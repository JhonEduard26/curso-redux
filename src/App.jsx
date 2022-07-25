import { useEffect } from 'react'
import {
  Col,
  Row,
  Spin
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Searcher } from './components/ui/Searcher'
import { PokemonList } from './components/pokemon/PokemonList'
import { getPokemons } from './api/getPokemons'
import logo from './static/logo.svg'

import 'antd/dist/antd.css'
import './App.css'
import { getPokemonsWithDetails, loadPokemons } from './actions'

export const App = () => {

  const dispatch = useDispatch()

  const { isLoading } = useSelector(state => state.ui)

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(loadPokemons())
      const pokemonRes = await getPokemons()
      dispatch(getPokemonsWithDetails(pokemonRes))
    }
    fetchPokemons()

  }, [])

  return (
    <div className="App">

      <Row>
        <Col span={4} offset={10}>
          <figure className='App__logo-container'>
            <img src={logo} alt="logo pokedux" />
          </figure>
        </Col>
      </Row>

      <Row>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
      </Row>

      {
        isLoading
          ?
          <Col offset={12} style={{ marginTop: 36 }}>
            <Spin size='large' />
          </Col>
          :
          <div className='App__card-container'>
            <PokemonList />
          </div>
      }

    </div>
  )
}