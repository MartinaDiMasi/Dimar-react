
import './App.css'
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar"


function App() {

    return (
      <>
      <header>
        <nav className='navbar'>
          <h1>DIMAR</h1> 
          <NavBar clase= "boton">
            <CardWidget/>
          </NavBar>
        </nav>
      </header>
      <main>
        <ItemListContainer clase="titulo" greeting="Bienvenidos a mi tienda online!"/>
      </main>
    </>
  );
};

export default App
