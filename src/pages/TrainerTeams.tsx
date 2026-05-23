import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Shape of a team as the Spring backend returns it (camelCase JSON)
interface PokemonTeam {
  pokemonTeamId: number
  teamName: string
  pokemon1: string
  pokemon2: string
  pokemon3: string
  pokemon4: string
  pokemon5: string
  pokemon6: string
  trainerId: number
}

const TrainerTeams = () => {
  const [teams, setTeams] = useState<PokemonTeam[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const trainerId = sessionStorage.getItem('trainerId')
  const trainerName = sessionStorage.getItem('trainerName')
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    // Not logged in -> nothing to fetch
    if (!token || !trainerId) {
      setError('You must be logged in to view your teams.')
      setLoading(false)
      return
    }

    axios
      .get<PokemonTeam[]>(
        `http://localhost:8080/pokemon-teams/pokemon_team/${trainerId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setTeams(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(
          `Could not load teams: ${err.response?.status || 'unknown error'}`
        )
        setLoading(false)
      })
  }, [token, trainerId])

  if (loading) {
    return (
      <main className="min-h-screen p-8 text-center text-lg">
        Loading your teams...
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen p-8 text-center text-lg text-red-600">
        {error}
      </main>
    )
  }

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        {trainerName ? `${trainerName}'s Teams` : 'Your Teams'}
      </h1>

      {teams.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't saved any teams yet.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {teams.map((team) => (
            <Link
              key={team.pokemonTeamId}
              to={`/trainer-teams/${team.pokemonTeamId}`}
              className="border-4 border-blue-500 rounded-lg p-4 bg-white shadow block transition hover:shadow-lg hover:border-blue-700"
            >
              <h2 className="text-xl font-bold mb-2">{team.teamName}</h2>
              <ul className="list-disc list-inside capitalize text-sm text-gray-700">
                <li>{team.pokemon1}</li>
                <li>{team.pokemon2}</li>
                <li>{team.pokemon3}</li>
                <li>{team.pokemon4}</li>
                <li>{team.pokemon5}</li>
                <li>{team.pokemon6}</li>
              </ul>
              <p className="text-blue-600 text-sm font-semibold mt-3">
                View team summary →
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}

export default TrainerTeams
