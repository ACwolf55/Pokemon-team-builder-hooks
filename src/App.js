import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import { Register } from './pages/Register';
import TrainerTeams from './pages/TrainerTeams';
import SavedPokemonTeam from './pages/SavedPokemonTeam';
import NotFound from './pages/NotFound';

import './App.css'


function App() {
  return (
    <div className="App">

      <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/trainer-teams' element={<TrainerTeams/>} />
        <Route path='/trainer-teams/:teamId' element={<SavedPokemonTeam/>} />
        <Route path='*' element={<NotFound/>} />
    </Routes>

    </div>
  );
}

export default App;