import React, { Component } from "react";
import axios from "axios";

export default class TeamSummary extends Component {
  constructor() {
    super();
    this.state = {
  
    };
  }

  render() {
    console.log(this.props.pkmTeam[0]);

    return (
      <div className="team-summary">
        {/* <h1><b><u>Team Summary</u></b></h1>
        <p></p> */}

        <table className="summary-table">
          <tr>
            <th>Highest HP</th>
            <th>Highest Attack</th>
            <th>Highest Defense</th>
            <th>Highest Special Attack</th>
            <th>Highest Special Defense</th>
            <th>Highest Speed</th>
          </tr>
          <tr>
            <td>{this.props.pkmHighHp ? `${this.props.pkmHighHp.pkmName}: ${this.props.pkmHighHp.pkmHp}`: 'Loading'}</td>
            <td>{this.props.pkmHighAtk ? `${this.props.pkmHighAtk.pkmName}: ${this.props.pkmHighAtk.pkmAtk}`: 'Loading'}</td>
            <td>{this.props.pkmHighDef ? `${this.props.pkmHighDef.pkmName}: ${this.props.pkmHighDef.pkmDef}`: 'Loading'}</td>
            <td>{this.props.pkmHighSpecAtk ? `${this.props.pkmHighSpecAtk.pkmName}: ${this.props.pkmHighSpecAtk.pkmSpecAtk}`: 'Loading'}</td>
            <td>{this.props.pkmHighSpecDef ? `${this.props.pkmHighSpecDef.pkmName}: ${this.props.pkmHighSpecDef.pkmSpecDef}`: 'Loading'}</td>
            <td>{this.props.pkmHighSpd ? `${this.props.pkmHighSpd.pkmName}: ${this.props.pkmHighSpd.pkmSpeed}`: 'Loading'}</td>
          </tr>
        </table>
      </div>
    );
  }
}
