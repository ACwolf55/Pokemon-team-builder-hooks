import React, { Component } from 'react';
import axios from 'axios'

import Nav from '../Nav/Nav'
import TeamSummary from '../TeamSummary/TeamSummary'
import PokemonTeam from '../PokemonTeam/PokemonTeam'


export default class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='home'>
                <Nav />
                <div>
                    {/* <TeamSummary /> */}
                    <PokemonTeam />
                </div>
            </div>
        )
    }
}