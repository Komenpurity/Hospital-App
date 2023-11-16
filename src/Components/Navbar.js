import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="navbar-nav">
            <li className="nav-item nav-link"> <Link to="/" className="navbar-link">Home</Link> </li>
      </div>
    </nav>
  )
}
