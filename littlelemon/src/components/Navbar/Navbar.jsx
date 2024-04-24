import React from 'react';
import "./Navbar.css";
import image from '../../Assets/littlelemon2.png';
import { Link } from 'react-router-dom';

// import App from "../../App";


const Navbar = () => {
  return (
    <nav>
      <img src={image} alt="Logo of little lemon" />
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/menu" className="nav-item">Menu</Link>
      <Link to="/reservations" className="nav-item">Reservations</Link>
      <Link to="/orderOnline" className="nav-item">Order Online</Link>
      <Link to="/log-in" className="nav-item">Log In</Link> 
    </nav>
  )
}

export default Navbar;
