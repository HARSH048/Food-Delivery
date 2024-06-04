import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar({ setLogin }) {
  const [activeItem, setActive] = useState("Home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={activeItem === "Home" ? "active" : ""}
          onClick={() => setActive("Home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={activeItem === "Menu" ? "active" : ""}
          onClick={() => setActive("Menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={activeItem === "Mobile-app" ? "active" : ""}
          onClick={() => setActive("Mobile-app")}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          className={activeItem === "Contact Us" ? "active" : ""}
          onClick={() => setActive("Contact Us")}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="" />
        </div>
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={() => setLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar
