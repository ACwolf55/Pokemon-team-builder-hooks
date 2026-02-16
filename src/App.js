import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import { Register } from './pages/Register';
import TrainerTeams from './pages/TrainerTeams';

import './App.css'


function App() {
  return (
    <div className="App">

      <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/trainer-teams' element={<TrainerTeams/>} />
        {/* <Route path='/team-list' element={<TeamList/>} />
        <Route path='/saved-pokemon-team:trainerId' element={<SavedPokemonTeam/>} /> */}
    </Routes>

    </div>
  );
}

export default App;