import React, { useState } from 'react';
import axios from 'axios'
import Pokemon from './Pokemon';
import './PokemonTeam.css'


 export default function PokemonTeam(props) {
  const [teamName, setTeamName] = useState('')
  const [savedTeam, setSavedTeam] = useState('')
  const [emptyPkm, setemptyPkm] = useState({
    pkmName: '',
    pkmHp: null,
    pkmAtk: null,
    pkmDef: null,
    pkmSpecAtk: null,
    pkmSpecDef: null,
    pkmSpeed: null,
    mountedName: ''
})

    

    const saveTeam = () => {
        const { pokemon } = props.pokemonReducer
        console.log(pokemon.pokemon_1.pkmName)


        axios.post('/user/team/', {
            pokemon_1: pokemon.pokemon_1.pkmName, 
            pokemon_2: pokemon.pokemon_2.pkmName, 
            pokemon_3: pokemon.pokemon_3.pkmName, 
            pokemon_4: pokemon.pokemon_4.pkmName, 
            pokemon_5: pokemon.pokemon_5.pkmName, 
            pokemon_6: pokemon.pokemon_6.pkmName, 
            team_name: teamName
        })
            .then(res => {
                console.log(res.data)
                setTeamName('') 
                setSavedTeam(res.data.team_name)
            })
            .catch(err =>  alert(err.response.request.response))



    const handleTeamName = (value) => {
    
        setTeamName(value)
    }

    return (
        <div className='pokemon-team-box'>
            <div className='pokemon-team'>
                <Pokemon pokemon={pokemon.pokemon_1 || emptyPkm} pokeSpot={'1'} />
                <Pokemon pokemon={pokemon.pokemon_2 || emptyPkm}
                    pokeSpot={'2'} />
                <Pokemon pokemon={pokemon.pokemon_3 || emptyPkm}
                    pokeSpot={'3'} />
                <Pokemon pokemon={pokemon.pokemon_4 || emptyPkm}
                    pokeSpot={'4'} />
                <Pokemon pokemon={pokemon.pokemon_5 || emptyPkm}
                    pokeSpot={'5'} />
                <Pokemon pokemon={pokemon.pokemon_6 || emptyPkm}
                    pokeSpot={'6'} />
            </div>

            <div className='save-team-box'>
                <input type='text' placeholder='ex.team #1' name='teamName' onChange={e => handleTeamName(e.target.value)} />
                <button onClick={saveTeam}>Save Team</button>
                <h3>{savedTeam}</h3>
            </div>

        </div>
    )


}
// function mapStateToProps(reduxState) {
//     return reduxState

}

// export default connect(mapStateToProps, {})(PokemonTeam)
