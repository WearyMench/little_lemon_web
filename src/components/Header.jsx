import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import Burger from "../assets/🦆 icon _hamburger menu.svg";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) return;
    setActive(!active);
  };

  const handleOutsideClick = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !burgerRef.current.contains(event.target)
    ) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    console.log("click outside");
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <button className="burger-menu" onClick={handleMenuClick} ref={burgerRef}>
        <img src={Burger} alt="Burger" />
      </button>
      <img src={Logo} alt="Logo" />
      <nav ref={navRef} className={active ? "active" : ""}>
        <ul>
          <li>
            <Link to="/" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={handleMenuClick}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" onClick={handleMenuClick}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={handleMenuClick}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleMenuClick}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
