import React, { Component } from "react";
import axios from "axios";
import SavedPokemon from "./SavedPokemon";
import TeamSummary from "./TeamSummary";

class SavedPokemonTeam extends Component {
  constructor() {
    super();
    this.state = {
      pokemon_1: "",
      pokemon_2: "",
      pokemon_3: "",
      pokemon_4: "",
      pokemon_5: "",
      pokemon_6: "",

      teamName: "",

      pkmTeam: [],
    }
  }

  objectStats = (pkmObj) => {
    const { pkmTeam } = this.state;
    // pkmTeam.push(pkmObj);
    this.setState({
      pkmTeam: [...pkmTeam, pkmObj],
    });
  };

  componentDidMount() {
    axios
      .get(`/user/team/SavedTeam/${this.props.match.params.teamid}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          pokemon_1: res.data[0].pokemon_1,
          pokemon_2: res.data[0].pokemon_2,
          pokemon_3: res.data[0].pokemon_3,
          pokemon_4: res.data[0].pokemon_4,
          pokemon_5: res.data[0].pokemon_5,
          pokemon_6: res.data[0].pokemon_6,
        });
      });
  }

  render() {
    
    const {
      pokemon_1,
      pokemon_2,
      pokemon_3,
      pokemon_4,
      pokemon_5,
      pokemon_6,
      pkmTeam,
    } = this.state;

    
   
    let filterHp = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmHp - pkmA.pkmHp)[0]
    let filterAtk = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmAtk - pkmA.pkmAtk)[0]
    let filterDef = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmDef - pkmA.pkmDef)[0]
    let filterSpecAtk = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmSpecAtk - pkmA.pkmSpecAtk)[0]
    let filterSpecDef = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmSpecDef - pkmA.pkmSpecdef)[0]
    let filterSpd = [...pkmTeam].sort((pkmA, pkmB) => pkmB.pkmSpeed - pkmA.pkmSpeed)[0]
  
    let pkm1 = pkmTeam[0]



   
   

    console.log(filterAtk)
    console.log(filterSpd);

    const mappedTeams = pkmTeam.map((el, index) => {
      return (
        <SavedPokemon pokemon={el} objectStats={this.objectStats} key={index} />
      );
    });
    console.log(mappedTeams);
    return (
      <section>

       { filterSpd ? <TeamSummary pkmTeam={pkmTeam} pkmHighAtk={filterAtk} pkmHighSpd={filterSpd} pkmHighDef={filterDef} pkmHighSpecDef={filterSpecDef} pkmHighSpecAtk={filterSpecAtk} pkmHighHp={filterHp}/> : 'Loading'} 

        <div className="saved-pkm-team-box">
          <h1>{this.state.teamName}</h1>
          <div className="saved-pkm-team">
            <SavedPokemon pokemon={pokemon_1} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_2} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_3} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_4} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_5} objectStats={this.objectStats} />
            <SavedPokemon pokemon={pokemon_6} objectStats={this.objectStats} />
          </div>
        </div>
      </section>
    );
  }
}

export default SavedPokemonTeam;
