import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Component/Header';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';
import Checkout from './Pages/Cart/Checkout'
import ShopContextProvider from './Context/ContextShop';
const App = () =>{
  return (
    <div className="App">
      <ShopContextProvider>
      <Header/>
     <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </ShopContextProvider>
    <Footer/>
    </div>

   )
}

export default App