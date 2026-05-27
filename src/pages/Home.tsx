
// import Header from '../components/Header'
import Nav from '../components/Nav'
import NewPokemonTeam from '../components/NewPokemonTeam'

const Home = () => {
  return (
<main className="min-h-screen p-4 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8">
    <Nav />
    <NewPokemonTeam />
</main>

  )
}

export default Home