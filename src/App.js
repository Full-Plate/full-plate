
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
//pages 
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
