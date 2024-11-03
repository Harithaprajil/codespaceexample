
import './App.css';
import Header from './components/header/Header';
import {Routes,Route} from 'react-router-dom';
import  Home from './components/Home/Home';
import ContactUs from './components/ContactUs/Contact';
import AboutUs from './components/Aboutus/About';
import Products from './components/Products/Productlist';
import Productdetail from './components/Products/Productdetail';
import CartList from './components/Cart/Cartdetail';


function App() {
  return (
<>
<Header/>
<Routes>
<Route path ="/" element= {<Home/>}/>
<Route path ="/Contact" element= {<ContactUs/>}/>
<Route path ="/About" element= {<AboutUs/>}/>
<Route path ="/ProductList" element= {<Products/>}/>
<Route path ="/Productdetail/:id" element= {<Productdetail/>}/>
<Route path ="/Cart" element= {<CartList/>}/>




</Routes>
</>
  );
}

export default App;
