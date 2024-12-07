import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import BrandContainer from './components/pages/BrandContainer';
import NavBar from "./components/NavBar"
import './App.css'
import CardWidget from './components/CardWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart";
import FormCart from "./components/FormCart";
import OrderDetail from './components/OrderDetail';

/* import { ProductsProvider } from './context/ProductsContext'; */

function App() {

    return (
      <>
      <CartProvider>
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
                <Route exact path="/category/:categoryId" element={<ItemListContainer />} /> 
                <Route exact path= '/item/:id' element={<ItemDetailContainer/>}/>
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path='/checkout' element={<FormCart/>}/>
                <Route path="/order/:orderId" element={<OrderDetail />} />
              </Routes> 
          </main>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
