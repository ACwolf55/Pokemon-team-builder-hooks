import {applyMiddleware, combineReducers, createStore} from 'redux'
import userReducer from './userReducer'
import pokemonReducer from './pokemonReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'


const rootReducer= combineReducers({
    userReducer:userReducer,
    pokemonReducer:pokemonReducer
})

export default createStore(rootReducer,devToolsEnhancer())