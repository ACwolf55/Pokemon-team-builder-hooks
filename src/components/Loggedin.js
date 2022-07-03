import React, { useState } from 'react';
import axios from 'axios'

import Nav from '../Nav/Nav'
import TeamSummary from '../TeamSummary/TeamSummary'
import PokemonTeam from '../PokemonTeam/PokemonTeam'


export default LoggedIn =()=>{


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