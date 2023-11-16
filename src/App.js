import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path = "/" element = {<Home/>}/> 
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
