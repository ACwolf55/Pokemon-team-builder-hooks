import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-2 text-gray-700">
        This page wandered off into the tall grass...
      </p>

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png"
        alt="A confused Furret"
        className="w-48 h-48"
        style={{ imageRendering: 'pixelated' }}
      />

      <p className="text-gray-500 mb-4">
        Even Furret looked everywhere — nothing here.
      </p>

      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Back to Home
      </Link>
    </main>
  )
}

export default NotFound
