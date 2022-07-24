import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as CreateStore } from 'redux'
import App from './App'
import './index.css'
import { pokemonReducer } from './reducers/pokemons'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = CreateStore(pokemonReducer)


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
