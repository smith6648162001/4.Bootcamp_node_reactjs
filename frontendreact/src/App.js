import logo from './logo.svg';
import './App.css';
import ComponenteCrearPelicula from './peliculas/CrearPelicula';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Tabla de Películas</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element ={<ComponenteMostrarPelicula />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
