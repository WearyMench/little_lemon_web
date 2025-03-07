import React from "react";
import Logo from "../assets/Logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
