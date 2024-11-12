import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrandContainer from './components/pages/BrandContainer';
import NavBar from "./components/NavBar"
import './App.css'
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {

    return (
      <>
      <BrowserRouter basename="/Dimar-react">
        <header>
          <nav className='navbar'>
              <BrandContainer/>
              <NavBar clase= "boton">
              <CardWidget/>
            </NavBar>
            <div className='linea-navbar'>
              <ul></ul>
            </div>
          </nav>
        </header>
        <main>
            <Routes>
              <Route exact path='/' element={<ItemListContainer clase="titulo" greeting="NUESTROS CLÁSICOS" />} />
              <Route path="/category/:category" element={<ItemListContainer />} /> 
              <Route exact path= '/item/:id' element={<ItemDetailContainer/>}/>
            </Routes> 
        </main>

      </BrowserRouter>

    </>
  );
};

export default App
