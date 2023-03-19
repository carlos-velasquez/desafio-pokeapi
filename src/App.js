import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Home from "./Components/Home";
import InformacionPokemon from "./Components/InformacionPokemon";
import Pokemon from "./Components/Pokemon";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<InformacionPokemon />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
