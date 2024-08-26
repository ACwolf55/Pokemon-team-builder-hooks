import React,{useState} from 'react'
import NewPokemon from './NewPokemon'
import axios, { AxiosResponse } from 'axios'

const NewPokemonTeam = () => {
  const [pokemon1, setPokemon1] = useState('');
  const [pokemon2, setPokemon2] = useState('');
  const [pokemon3, setPokemon3] = useState('');
  const [pokemon4, setPokemon4] = useState('');
  const [pokemon5, setPokemon5] = useState('');
  const [pokemon6, setPokemon6] = useState('');
  const [pokemonTeamName, setPokemonTeamName] = useState('');
  const [trainerId, setTrainerId] = useState('');


  
  const savePokemonTeam: () => void = () => {

      interface PokemonTeamResponse {
        message: string
      }
      
      axios.post<PokemonTeamResponse>("/pokemon_team")
        .then((res: AxiosResponse<PokemonTeamResponse>) => {
          console.log(res.data);
          alert("Team saved successfully!");
        })
        .catch((error: any) => {
          alert(`Error: ${error.response?.status || 'Unknown status'} - ${error.message}`);
        });
    };



  return (
    <div className="lg:w-[60vw] w-full lg:h-[75vh] h-auto border-4 border-blue-500 rounded-lg p-4">
    <h2>Make your Pokémon Team!~</h2>
    <div className="flex items-center space-x-2 mb-4">
        <input 
            type="text" 
            placeholder="Team Name" 
            value={pokemonTeamName}
            onChange={(e)=>setPokemonTeamName(e.target.value)}
            className="w-1/4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg">Save</button>
    </div>
    <div className="flex flex-wrap justify-between">
      <NewPokemon pokemon={pokemon1} setPokemon={setPokemon1} />
      <NewPokemon pokemon={pokemon2} setPokemon={setPokemon2} />
      <NewPokemon pokemon={pokemon3} setPokemon={setPokemon3} />
      <NewPokemon pokemon={pokemon4} setPokemon={setPokemon4} />
      <NewPokemon pokemon={pokemon5} setPokemon={setPokemon5} />
      <NewPokemon pokemon={pokemon6} setPokemon={setPokemon6} />
    </div>
</div>


  )
}

export default NewPokemonTeam