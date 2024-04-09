import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Components/Pages/Shop.jsx';
import ShopCategorey from './Components/Pages/ShopCategorey.jsx'
import Cart from './Components/Pages/Cart.jsx';
import LoginSignup from './Components/Pages/LoginSignup.jsx';
import Product from './Components/Pages/Product.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <div >
       <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategorey categorey="men"/>}></Route>
          <Route path='/womens' element={<ShopCategorey categorey="women"/>}></Route>
          <Route path='/kids' element={<ShopCategorey categorey="kid"/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
