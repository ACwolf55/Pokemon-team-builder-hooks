import Header from './Components/Header';
import {Route, Routes,Link} from 'react-router-dom'
import Home from './Components/Home'
import SavedPokemonTeam from './Components/SavedPokemonTeam';
import './App.css'


function App() {
  return (
    <div className="App">

      <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/SavedPokemonTeam' element={<SavedPokemonTeam/>}/>
    </Routes>

    </div>
  );
}

export default App;