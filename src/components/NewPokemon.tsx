import React, { useState, useEffect } from "react";
import axios from "axios";

const NewPokemon = () => {
  const [inputPokemon, setInputPokemon] = useState("");
  const [pokemon, setPokemon] = useState({});

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className="border-2 border-gray-300 rounded-lg p-4 h-20 lg:h-[9.5rem]">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex items-center space-x-2">
          <input 
        type="text" 
        placeholder="Type Pokémon name!" 
        value={inputPokemon}
        onChange={(e) => setInputPokemon(e.target.value)}
        className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[200px] h-[25px] text-sm"
    />
    <button 
        onClick={getPokemon}
        className="bg-blue-500 text-white p-1 rounded-lg
        w-[50px] h-[30px] text-xs"
    >
      Get!
    </button>
</div>
            {pokemon && (
              <div className="mt-2 w-[200px] h-[133px] overflow-auto">
              <ul className="text-xs">
                  <li>HP: {}</li>
                  <li>Attack: {}</li>
                  <li>Defense: {}</li>
                  <li>Special Attack: {}</li>
                  <li>Special Defense: {}</li>
                  <li>Speed: {}</li>
              </ul>
          </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default NewPokemon;
