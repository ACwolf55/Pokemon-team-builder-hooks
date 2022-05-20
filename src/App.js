import Header from './Components/Header';
import {Route, Routes,Link} from 'react-router-dom'
import Home from './Components/Home'
import './App.css'


function App() {
  return (
    <div className="App">

      <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/Loggedin' element={Loggedin} />
        <Route path='/AllUserTeams' element={AllUserTeams} />
        <Route path='/SavedPokemonTeam/:teamid' element={SavedPokemonTeam}/> */}
    </Routes>

    </div>
  );
}

export default App;