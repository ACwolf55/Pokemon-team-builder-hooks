
import Auth from '../Auth/Auth'
import TeamSummary from '../TeamSummary/TeamSummary'
import PokemonTeam from './PokemonTeam'
import './Home.css'

export default Home =()=> {
 

        return (
            <div className='home'>
                {/* <Auth /> */}
                <div>
                   
                    <PokemonTeam />
                </div>
            </div>
        )

}
