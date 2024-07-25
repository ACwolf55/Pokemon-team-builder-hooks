import React from 'react'
import NewPokemon from './NewPokemon'

const NewPokemonTeam = () => {
  return (
    <div className="lg:w-[60vw] w-full lg:h-[75vh] h-auto border-4 border-blue-500 rounded-lg p-4">
    <h2>Make your Pokémon Team!~</h2>
    <div className="flex items-center space-x-2 mb-4">
        <input 
            type="text" 
            placeholder="Team Name" 
            className="w-1/4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg">Save</button>
    </div>
    <div className="flex flex-wrap justify-between">
       <NewPokemon/>
       <NewPokemon/>
       <NewPokemon/>
       <NewPokemon/>
       <NewPokemon/>
       <NewPokemon/>
    </div>
</div>


  )
}

export default NewPokemonTeam