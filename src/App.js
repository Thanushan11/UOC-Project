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
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
 


function App() {
  return (
    <div >
       <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/mens' element={<ShopCategorey banner={men_banner} category="men"/>}></Route>
          <Route path='/womens' element={<ShopCategorey banner={women_banner}  category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategorey banner={kid_banner}  category="kid"/>}></Route>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
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





