
import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Shop from './components/shop';
import Recipes from './components/recipes';
import Contact from './components/contact';
import About from './components/about';
import Footer from './components/footer'
import Taco from './components/taco';
import Beef from './components/beef';
import Muffin from './components/muffin';
import Pasta from './components/pasta';
import Ramen from './components/ramen';
import Slaw from './components/coleslaw';
import Checkout from './components/checkout';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="recipes" element={<Recipes/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="tacos" element={<Taco/>}/>
        <Route path="beef" element={<Beef/>}/>
        <Route path="muffin" element={<Muffin/>}/>
        <Route path="pasta" element={<Pasta/>}/>
        <Route path="ramen" element={<Ramen/>}/>
        <Route path="coleslaw" element={<Slaw/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
