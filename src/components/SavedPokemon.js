import React, { Component } from "react";
import axios from "axios";

class SavedPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pkmName: "",
      pkmHp: null,
      pkmAtk: null,
      pkmDef: null,
      pkmSpecAtk: null,
      pkmSpecDef: null,
      pkmSpeed: null,
      pkmSprite: "",

      pkmObj:null
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.pokemon && prevProps.pokemon !== this.props.pokemon) {
      console.log(prevProps);
      console.log(this.props);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.toLowerCase()}`)
        .then((res) => {
          console.log(res.data);
          this.setState({
            pkmName: this.props.pokemon,
            pkmHp: res.data.stats[0].base_stat,
            pkmAtk: res.data.stats[1].base_stat,
            pkmDef: res.data.stats[2].base_stat,
            pkmSpecAtk: res.data.stats[3].base_stat,
            pkmSpecDef: res.data.stats[4].base_stat,
            pkmSpeed: res.data.stats[5].base_stat,
            pkmSprite: res.data.sprites.front_default,
          },()=>{
            this.props.objectStats(this.state)
          });
        });
    }
  }
  

  render(){
    const {
      pkmHp,
      pkmAtk,
      pkmDef,
      pkmSpecAtk,
      pkmSpecDef,
      pkmSpeed,
      pkmName,
      pkmSprite,
    } = this.state

    // this.props.objectStats(pkmObj);
    return (
      <div className="saved-pkm-card">
        <div className="pkm-name-sprite">
          <h2>
            <b>{pkmName}</b>
          </h2>
          <div className="pkm-sprite">
            {this.state.pkmSprite === "" ? null : <img src={pkmSprite} alt={pkmName}/>}
          </div>
        </div>
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
      </div>
    )
  }
}


export default SavedPokemon;