import Header from './components/Header';
import {Route, Routes,Link} from 'react-router-dom'
import Home from './pages/Home'

import './App.css'


function App() {
  return (
    <div className="App">

      <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>

    </div>
  );
}

export default App;