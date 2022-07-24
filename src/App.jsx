import { useEffect } from 'react'
import {
  Col,
  Row,
} from 'antd'
import { Searcher } from './components/ui/Searcher'
import { PokemonList } from './components/pokemon/PokemonList'
import { getPokemons } from './api/getPokemons'
import logo from './static/logo.svg'

import 'antd/dist/antd.css'
import './App.css'
import { setPokemons as SetPokemonsAction } from './actions'
import { connect } from 'react-redux'

const App = ({ pokemons, setPokemons }) => {

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons()
      setPokemons(pokemonRes)
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
      <div className='App__card-container'>
        <PokemonList pokemons={pokemons} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
}
)
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(SetPokemonsAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)