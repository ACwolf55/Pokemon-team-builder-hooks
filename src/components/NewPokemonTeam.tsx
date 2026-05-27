import React, { useState, useEffect } from "react";
import NewPokemon from "./NewPokemon";
import axios, { AxiosResponse } from "axios";

const NewPokemonTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [pokemon1, setPokemon1] = useState("");
  const [pokemon2, setPokemon2] = useState("");
  const [pokemon3, setPokemon3] = useState("");
  const [pokemon4, setPokemon4] = useState("");
  const [pokemon5, setPokemon5] = useState("");
  const [pokemon6, setPokemon6] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [sessionTrainerId, setSessionTrainerId] = useState<number | null>(null);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {}, []);

  const savePokemonTeam: () => void = () => {
    interface PokemonTeamResponse {
      message: string;
    }

    let trainerId = Number(sessionStorage.getItem("trainerId"));
    const token = sessionStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to save a team!");
      return;
    }

    const newTeam = {
      trainerId,
      teamName,
      pokemon1,
      pokemon2,
      pokemon3,
      pokemon4,
      pokemon5,
      pokemon6,
    };

    console.log(newTeam);

    axios
      .post<PokemonTeamResponse>(
        "http://localhost:8080/pokemon-teams/pokemon_team",
        newTeam,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res: AxiosResponse<PokemonTeamResponse>) => {
        console.log(res.data);
        alert("Team saved successfully!");
        clearAll();
      })
      .catch((error: any) => {
        alert(
          `Error: ${error.response?.status || "Unknown status"} - ${error.message}`,
        );
      });
  };

  const clearAll = () => {
    setTeamName("");
    setPokemon1("");
    setPokemon2("");
    setPokemon3("");
    setPokemon4("");
    setPokemon5("");
    setPokemon6("");
    setResetKey((k) => k + 1); // bumps child keys → React remounts each NewPokemon fresh
  };

  return (
    <div className="w-full lg:max-w-4xl border-4 border-blue-500 rounded-lg p-4">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
        Make your Pokémon Team!~
      </h2>
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-1/4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={savePokemonTeam}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={clearAll}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
      <NewPokemon key={`pkm-1-${resetKey}`} pokemon={pokemon1} setPokemon={setPokemon1} />
      <NewPokemon key={`pkm-2-${resetKey}`} pokemon={pokemon2} setPokemon={setPokemon2} />
      <NewPokemon key={`pkm-3-${resetKey}`} pokemon={pokemon3} setPokemon={setPokemon3} />
      <NewPokemon key={`pkm-4-${resetKey}`} pokemon={pokemon4} setPokemon={setPokemon4} />
      <NewPokemon key={`pkm-5-${resetKey}`} pokemon={pokemon5} setPokemon={setPokemon5} />
      <NewPokemon key={`pkm-6-${resetKey}`} pokemon={pokemon6} setPokemon={setPokemon6} />
      </div>
    </div>
  );
};

export default NewPokemonTeam;
