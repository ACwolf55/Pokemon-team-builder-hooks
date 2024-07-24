import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-500 to-blue-500 w-full h-[15vh] flex items-center justify-center text-white px-4">
    <img src="./pokeball.png" className="h-8 w-8 mr-2" alt="Pokeball" />
    <h1 className="text-3xl font-bold">Pokemon Team Builder</h1>
</header>



  )
}

export default Header