import React from "react";
import { Link } from "react-router-dom";
import "./Styles/navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/" className="navbar-logo">El Clima App</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/clima" className="nav-link">
            Clima
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/nosotras" className="nav-link">
            Nosotras
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

