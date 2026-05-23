import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

// A saved team as the Spring backend returns it
interface PokemonTeam {
  pokemonTeamId: number;
  teamName: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  pokemon4: string;
  pokemon5: string;
  pokemon6: string;
  trainerId: number;
}

// One Pokémon enriched with PokéAPI sprite + stats
interface PokemonStats {
  name: string;
  sprite: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

type StatKey =
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed";

// Fetch one Pokémon's sprite + stats from PokéAPI. Returns null if the name is invalid.
const fetchPokemon = async (name: string): Promise<PokemonStats | null> => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
    );
    const s = res.data.stats;
    return {
      name,
      sprite: res.data.sprites.front_default,
      hp: s[0].base_stat,
      attack: s[1].base_stat,
      defense: s[2].base_stat,
      specialAttack: s[3].base_stat,
      specialDefense: s[4].base_stat,
      speed: s[5].base_stat,
    };
  } catch {
    return null;
  }
};

// Find the Pokémon with the highest value for a given stat
const topPokemon = (
  list: PokemonStats[],
  key: StatKey,
): PokemonStats | null => {
  if (list.length === 0) return null;
  return list.reduce((best, p) => (p[key] > best[key] ? p : best));
};

const SavedPokemonTeam = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState<PokemonTeam | null>(null);
  const [roster, setRoster] = useState<PokemonStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setError("You must be logged in to view this team.");
      setLoading(false);
      return;
    }

    const loadTeam = async () => {
      try {
        // 1. Get the saved team from the backend
        const res = await axios.get<PokemonTeam>(
          `http://localhost:8080/pokemon-teams/pokemon_team/team_id/${teamId}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        if (!res.data || !res.data.pokemonTeamId) {
          setError("Team not found.");
          setLoading(false);
          return;
        }
        setTeam(res.data);

        // 2. Fetch all 6 Pokémon from PokéAPI in parallel
        const names = [
          res.data.pokemon1,
          res.data.pokemon2,
          res.data.pokemon3,
          res.data.pokemon4,
          res.data.pokemon5,
          res.data.pokemon6,
        ];
        const results = await Promise.all(names.map(fetchPokemon));
        setRoster(results.filter((p): p is PokemonStats => p !== null));
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError(
          `Could not load this team: ${
            err.response?.status || "unknown error"
          }`,
        );
        setLoading(false);
      }
    };

    loadTeam();
  }, [teamId, token]);

  // Delete this team, then return to the teams list
  const handleDelete = () => {
    if (!window.confirm("Delete this team?")) return;

    axios
      .delete(`http://localhost:8080/pokemon-teams/pokemon_team/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => navigate("/trainer-teams"))
      .catch((err) => {
        console.error(err);
        alert(`Could not delete team: ${err.response?.status || "error"}`);
      });
  };

  if (loading) {
    return (
      <main className="min-h-screen p-8 text-center text-lg">
        Loading team...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen p-8 text-center">
        <p className="text-lg text-red-600 mb-4">{error}</p>
        <Link to="/trainer-teams" className="text-blue-500 underline">
          ← Back to your teams
        </Link>
      </main>
    );
  }

  // Team-wide stat highlights
  const summary: { label: string; key: StatKey }[] = [
    { label: "Highest HP", key: "hp" },
    { label: "Highest Attack", key: "attack" },
    { label: "Highest Defense", key: "defense" },
    { label: "Highest Sp. Attack", key: "specialAttack" },
    { label: "Highest Sp. Defense", key: "specialDefense" },
    { label: "Highest Speed", key: "speed" },
  ];

  return (
    <main className="min-h-screen p-6 max-w-5xl mx-auto">
      <Link to="/trainer-teams" className="text-blue-500 underline">
        ← Back to your teams
      </Link>

      <h1 className="text-3xl font-bold text-center my-4">{team?.teamName}</h1>
      <div className="text-center mb-6">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Delete Team
        </button>
      </div>
      {/* Team stats summary */}
      <div className="border-4 border-blue-500 rounded-lg p-4 mb-6 bg-white shadow">
        <h2 className="text-xl font-bold mb-3 text-center">Team Summary</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {summary.map(({ label, key }) => {
            const top = topPokemon(roster, key);
            return (
              <div key={key} className="text-center">
                <p className="font-semibold">{label}</p>
                <p className="capitalize">
                  {top ? `${top.name} (${top[key]})` : "—"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* The 6 Pokémon */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roster.map((pkm, i) => (
          <div
            key={`${pkm.name}-${i}`}
            className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow text-center"
          >
            <h3 className="text-lg font-bold capitalize">{pkm.name}</h3>
            {pkm.sprite ? (
              <img src={pkm.sprite} alt={pkm.name} className="mx-auto" />
            ) : null}
            <ul className="text-sm text-left inline-block">
              <li>HP: {pkm.hp}</li>
              <li>Attack: {pkm.attack}</li>
              <li>Defense: {pkm.defense}</li>
              <li>Sp. Attack: {pkm.specialAttack}</li>
              <li>Sp. Defense: {pkm.specialDefense}</li>
              <li>Speed: {pkm.speed}</li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SavedPokemonTeam;
