import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Pokemon from './Pokemon';
import '../css/PokemonTeam.css'


 function PokemonTeam(props) {
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
    const [pkm1, setpkm1] = useState({})
    const [pkm2, setpkm2] = useState({})
    const [pkm3, setpkm3] = useState({})
    const [pkm4, setpkm4] = useState({})
    const [pkm5, setpkm5] = useState({})
    const [pkm6, setpkm6] = useState({})
  
    

    useEffect(() => {
    setTimeout(()=>console.log(pkm1),100)
    }, [])
    

    const saveTeam = () => {
      


        axios.post('/user/team/', {
         pkm1,pkm2,pkm3,pkm4,pkm5,pkm6
        })
            .then(res => {
                console.log(res.data)
                setTeamName('') 
                setSavedTeam(res.data.team_name)
            })
            .catch(err =>  alert(err.response.request.response))
        }


    const handleTeamName = (value) => {
    
        setTeamName(value)
    }

    return (

        <div className='pokemon-team-box'>
            <div className='pokemon-team'>
            <Pokemon pkm={pkm1} pkmsetter={setpkm1}/>
            <Pokemon pkm={pkm2} pkmsetter={setpkm2}/>
            <Pokemon pkm={pkm3} pkmsetter={setpkm3}/>
            <Pokemon pkm={pkm4} pkmsetter={setpkm4}/>
            <Pokemon pkm={pkm5} pkmsetter={setpkm5}/>
            <Pokemon pkm={pkm6} pkmsetter={setpkm6}/>
            </div>

            <div className='save-team-box'>
                <input type='text' placeholder='ex.team #1' name='teamName' onChange={e => handleTeamName(e.target.value)} />
                <button onClick={saveTeam}>Save Team</button>
                <h3>{savedTeam}</h3>
            </div>

        </div>
    )


    }

export default PokemonTeam
