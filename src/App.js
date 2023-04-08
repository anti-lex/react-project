
import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
