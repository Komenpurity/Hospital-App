import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignupForm";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path = "/" element = {<Home/>}/> 
          <Route path = "/login" element = {<LoginForm/>}/> 
          <Route path = "/signup" element = {<SignUpForm/>}/> 
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
