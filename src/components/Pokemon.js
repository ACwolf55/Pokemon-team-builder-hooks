import React, { useState } from "react";
import axios from "axios";
import "../css/Pokemon.css"

const Pokemon = (props) => {
  const [pkmName, setpkmName] = useState("");
  const [pkmSprite, setpkmSprite] = useState("");
   const [mountedName, setmountedName] = useState('')
   const [pkmObj,setPkmObj] = useState({})

  const getPokemon = (e) => {
    e.preventDefault();
    console.log(props.pkm)
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pkmName.toLowerCase()}`)
      .then((res) => {
         props.pkmsetter({
          pkmName: pkmName,
          pkmHp: res.data.stats[0].base_stat,
          pkmAtk: res.data.stats[1].base_stat,
          pkmDef: res.data.stats[2].base_stat,
          pkmSpecAtk: res.data.stats[3].base_stat,
          pkmSpecDef: res.data.stats[4].base_stat,
          pkmSpeed: res.data.stats[5].base_stat,
          pkmSprite: res.data.sprites.front_default,

          mountedName: pkmName.toLowerCase(),
        });
        setpkmSprite(res.data.sprites.front_default);
        setTimeout(()=>console.log(props.pkm), 5000);
      });
  };

  const pkmNameInput = (e) => {
    setpkmName(e.target.value);
  };



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
          <h2 className="pkm_name">
            <b>{mountedName}</b>
          </h2>
          <div className="pkm-sprite">
            {!props.pkm.pkmSprite ? null : (
              <img id="pkm-sprite" src={pkmSprite} />
            )}
          </div>
        </div>
      </div>
      {!props.pkm.pkmName ? '' : 
        <div className="pkm-stats">
          <ul>
            <li>HP: {props.pkm.pkmHp}</li>
            <li>Attack: {props.pkm.pkmAtk}</li>
            <li>Defense: {props.pkm.pkmDef}</li>
            <li>Special Attack: {props.pkm.pkmSpecAtk}</li>
            <li>Special Defense: {props.pkm.pkmSpecDef}</li>
            <li>Speed: {props.pkm.pkmSpeed}</li>
          </ul>
        </div>
      }
    </div>
 
  );

};


export default Pokemon
