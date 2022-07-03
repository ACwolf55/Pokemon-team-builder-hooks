import Auth from './Auth'
import PokemonTeam from './PokemonTeam'


export default function Home (){
 

        return (
            <div className='Home'>
                <Auth />
                <div>
                    <PokemonTeam />
                </div>
            </div>
        )

}
