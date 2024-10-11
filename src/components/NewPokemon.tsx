import React, { useState, useEffect, FC } from "react";
import axios from "axios";

interface NewPokemonProps {
  pokemon: string;
  setPokemon: React.Dispatch<React.SetStateAction<string>>;
}

const NewPokemon: FC<NewPokemonProps> = ({ pokemon, setPokemon }) => {
  const [inputPokemon, setInputPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({});
  const [sprite, setSprite] = useState("");
  const [hp, setHp] = useState(null);
  const [attack, setAttack] = useState(null);
  const [defense, setDefense] = useState(null);
  const [specialAttack, setSpecialAttack] = useState(null);
  const [specialDefense, setSpecialDefense] = useState(null);
  const [speed, setSpeed] = useState(null);

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`)
      .then((res) => {
        console.log(res.data);
        setSprite(res.data.sprites.front_default);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefense(res.data.stats[2].base_stat);
        setSpecialAttack(res.data.stats[3].base_stat);
        setSpecialDefense(res.data.stats[4].base_stat);
        setSpeed(res.data.stats[5].base_stat);
      })
      .catch(() => alert("pokemon not found or server error"));
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
          {!speed && !sprite ? null : (
            <div className="mt-2 w-[255px] h-[133px] overflow-auto flex flex-row justify-around font-['Press_Start_2P'] text-[#d0d7de]">
              <div>
              <h4 className=" font-bold">{inputPokemon.charAt(0).toUpperCase() + inputPokemon.slice(1).toLowerCase()}</h4>
              <img src={sprite} />
              </div>
              <ul className="text-[10px]">
                <li>HP: {hp}</li>
                <li>Attack: {attack}</li>
                <li>Defense: {defense}</li>
                <li>Special Attack: {specialAttack}</li>
                <li>Special Defense: {specialDefense}</li>
                <li>Speed: {speed}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPokemon;
