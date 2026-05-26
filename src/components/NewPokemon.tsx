import React, { useState, FC } from "react";
import axios from "axios";

interface NewPokemonProps {
  pokemon: string;
  setPokemon: React.Dispatch<React.SetStateAction<string>>;
}

const NewPokemon: FC<NewPokemonProps> = ({ pokemon, setPokemon }) => {
  const [inputPokemon, setInputPokemon] = useState("");
  const [sprite, setSprite] = useState("");
  const [hp, setHp] = useState<number | null>(null);
  const [attack, setAttack] = useState<number | null>(null);
  const [defense, setDefense] = useState<number | null>(null);
  const [specialAttack, setSpecialAttack] = useState<number | null>(null);
  const [specialDefense, setSpecialDefense] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number | null>(null);

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`)
      .then((res) => {
        setSprite(res.data.sprites.front_default);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefense(res.data.stats[2].base_stat);
        setSpecialAttack(res.data.stats[3].base_stat);
        setSpecialDefense(res.data.stats[4].base_stat);
        setSpeed(res.data.stats[5].base_stat);
      })
      .catch(() => alert("Pokémon not found or server error"));
  };

  const clearPokemon = () => {
    setInputPokemon("");
    setPokemon("");
    setSprite("");
    setHp(null);
    setAttack(null);
    setDefense(null);
    setSpecialAttack(null);
    setSpecialDefense(null);
    setSpeed(null);
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className="border-2 border-gray-300 rounded-lg p-3 bg-slate-50">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Pokémon name"
            value={inputPokemon}
            onChange={(e) => {
              setInputPokemon(e.target.value);
              setPokemon(e.target.value);
            }}
            className="flex-1 min-w-0 p-1 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={getPokemon}
            className="shrink-0 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-md transition"
          >
            Get!
          </button>
        </div>

        {sprite && (
          <div className="mt-2 flex items-start gap-3">
            <div className="text-center">
              <h4 className="text-xs font-bold capitalize text-gray-800">
                {inputPokemon}
              </h4>
              <img
                src={sprite}
                alt={inputPokemon}
                className="w-16 h-16 mx-auto"
              />
              <button
                onClick={clearPokemon}
                className="mt-1 text-[10px] shrink-0 text-white text-xs hover:underline bg-red-500 hover:bg-red-600 font-semibold px-2 py-1 rounded-md transition"
              >
                Clear
              </button>
            </div>
            <ul className="text-[10px] text-gray-700 leading-tight">
              <li>HP: {hp}</li>
              <li>Attack: {attack}</li>
              <li>Defense: {defense}</li>
              <li>Sp. Attack: {specialAttack}</li>
              <li>Sp. Defense: {specialDefense}</li>
              <li>Speed: {speed}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPokemon;
