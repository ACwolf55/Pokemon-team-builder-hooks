import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import NewPokemonTeam from '../components/NewPokemonTeam'

const Home = () => {
  return (
    <div className='Home'>
        <main>
            <Nav/>
            <NewPokemonTeam/>

        </main>


    </div>
  )
}

export default Home