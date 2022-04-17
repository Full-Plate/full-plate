
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/Nav/Navbar";

import { RecipeContext } from './Context/RecipeContext';

//pages 
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from './pages/NotFound'
import Favourites from "./pages/Favourites";


function App() {
  const [query, setQuery] = useState("");
  const [time, setTime] = useState(60)

  return (
   
    <div className="App">
        <RecipeContext.Provider
        value={{ 
          query, setQuery,
          time, setTime, 
           }}>
          
      <Router>
        <Navbar />
        <div class="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/contact" element={<Contact/>} />
           <Route path="/favourites" element={<Favourites/>} />
           <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      </Router>
    
      </RecipeContext.Provider>
      
    </div>
    

  );
}

export default App;
