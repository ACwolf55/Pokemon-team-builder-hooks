//INTIAL STATE
const intialState = {
    pokemon:{
        pokemon_1:null,
        pokemon_2:null,
        pokemon_3:null,
        pokemon_4:null,
        pokemon_5:null,
        pokemon_6:null
    }
}

//ACTION CONSTANT
const SET_POKEMON = 'SET_POKEMON'


//ACTION CREATORS

export const setPokemon = (pkmObj) => {
    return {
        type: SET_POKEMON,
        payload: pkmObj
    }

}

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case SET_POKEMON:
            const stateCopy = {...state}
            stateCopy.pokemon[`pokemon_${action.payload.pokeSpot}`] = action.payload
            delete stateCopy.pokemon[`pokemon_${action.payload.pokeSpot}`].pokeSpot
            return stateCopy

        default:
            return state
    }



}