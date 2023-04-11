
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
