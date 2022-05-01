import Header from './Components/Header/Header';
import routes from './routes'
import Pokemon from './Components/Pokemon/Pokemon'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
      {routes}
    </div>
  );
}

export default App;