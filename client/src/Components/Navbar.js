import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
            <li className="nav-item nav-link"> <Link to="/" className="navbar-link">Home</Link> </li>
        </div>

        <div className="navbar-nav">
            <li className="nav-item nav-link"> <Link to="/login" className="navbar-link">Login</Link> </li>
        </div>

        <div className="navbar-nav">
            <li className="nav-item nav-link"> <Link to="/signup" className="navbar-link">Signup</Link> </li>
        </div>

        <div className="navbar-nav">
            <li className="nav-item nav-link"> <Link to="/consultation" className="navbar-link"> Consultation Form</Link> </li>
        </div>
    </nav>
  )
}
