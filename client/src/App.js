import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignupForm";
import ConsultationForm from "./Components/ConsultationForm";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
          <Route path = "/" element = {<Home/>}/> 
          <Route path = "/login" element = {<LoginForm/>}/> 
          <Route path = "/signup" element = {<SignUpForm/>}/> 
          <Route path = "/consultation" element = {<ConsultationForm/>}/> 
         </Routes> 
      </BrowserRouter>
  );
}

export default App;
