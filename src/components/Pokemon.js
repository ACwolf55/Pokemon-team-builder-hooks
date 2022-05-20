import React, { useState } from "react";
import axios from "axios";
import "./Pokemon.css";
import { connect } from "react-redux";
import { setPokemon } from "../redux/pokemonReducer"

export default Pokemon=()=> {
 const [pkmName,setpkmName]= useState('')
 const [pkmSprite, setpkmSprite] = useState('')
//  const [pkmHp, setpkmHp] = useState(null)
//  const [pkmAtk, setpkmAtk] = useState(null)
//  const [pkmDef, setpkmDef] = useState(null)
//  const [pkmSpecAtk, setpkmSpecAtk] = useState(null)
//  const [pkmSpecDef, setpkmSpecDef] = useState(null)
//  const [pkmSpeed,setpkmSpeed] =useState(null)
//  const [mountedName, setmountedName] = useState('second')

   


  const getPokemon = (e) => {
    e.preventDefault();
     axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pkmName.toLowerCase()}`)
      .then((res) => {
        console.log(res.data)
        const pkmObj = {
          pkmName: pkmName,
          pkmHp: res.data.stats[0].base_stat,
          pkmAtk: res.data.stats[1].base_stat,
          pkmDef: res.data.stats[2].base_stat,
          pkmSpecAtk: res.data.stats[3].base_stat,
          pkmSpecDef: res.data.stats[4].base_stat,
          pkmSpeed: res.data.stats[5].base_stat,
          pkmSprite: res.data.sprites.front_default,

          pokeSpot: props.pokeSpot,

          mountedName:pkmName.toLowerCase(),
        };
             setpkmSprite(res.data.sprites.front_default)
            props.setPokemon(pkmObj);
      });


  const pkmNameInput = (e) => {
    
      setpkmName(e.target.value)
    }
 

    const {
      pkmHp,
      pkmAtk,
      pkmDef,
      pkmSpecAtk,
      pkmSpecDef,
      pkmSpeed,
      mountedName,
      pkmSprite,
    } = props.pokemon;
  
    return (
      <div className="pkm-card">
        <div id="pkm-search-form">
          <form onSubmit={getPokemon}>
            <p>
              <input
                type="text"
                placeholder="pokemon name"
                name="pkmName"
                onChange={pkmNameInput}
              />
            </p>
            <p>
              <button type="submit">Find</button>
            </p>
          </form>
          <div className="pkm-name-sprite">
            <h2 className='pkm_name'>
              <b>{mountedName}</b>
            </h2>
            <div className="pkm-sprite">
              {this.state.pkmSprite === '' ? null : <img id='pkm-sprite' src={pkmSprite} /> }
            </div>
          </div>
        </div>
        {this.state.pkmSprite === '' ? null:
        <div className="pkm-stats">
          <ul>
            <li>HP: {pkmHp}</li>
            <li>Attack: {pkmAtk}</li>
            <li>Defense: {pkmDef}</li>
            <li>Special Attack: {pkmSpecAtk}</li>
            <li>Special Defense: {pkmSpecDef}</li>
            <li>Speed: {pkmSpeed}</li>
          </ul>
        </div>
      }
      </div>
    );

    // function mapStateToProps(reduxState) {
    //   return reduxState;
    // }
  
    
}


// export default connect(mapStateToProps,{setPokemon})(Pokemon)
export default Pokemon