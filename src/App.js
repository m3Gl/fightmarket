import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Contact from './Components/Contact/Contact';


function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/contact' element={<Contact />}/>


      </Routes>
   
      </>
    
  );
}

export default App;
