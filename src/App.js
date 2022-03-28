
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";


//pages 
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";


function App() {
  return (
  
    <div className="App">
      <Router>
        <Navbar />
        <div class="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
      </Router>
    </div>
    

  );
}

export default App;
