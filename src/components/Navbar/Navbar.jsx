import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [changeMode, setChangeMode] = useState(false);

  const handleOpenNavbar = () => {
    setIsResponsive(!isResponsive);
  };
  const handleCloseNavbar = () => {
    setIsResponsive(!isResponsive);
  };

  const handleChangeMode = () => {
    setChangeMode(!changeMode);
  }
 
  return (
    <nav style={changeMode ? {backgroundColor: "white"} : {backgroundColor: "#1e1e1e"}} className="navbar">
      <div style={changeMode ? {color: "black"} : {color: "white"}} className="nav-logo">
        LOGO <Link to="/">🛒</Link>
      </div>
      <ul className={isResponsive ? "nav-links responsive" : "nav-links"}>
        <Link to="/" onClick={handleCloseNavbar}>
          <li className="nav-item active">Home</li>
        </Link>
        <Link to="/list-products" onClick={handleCloseNavbar}>
          <li className={changeMode ? "nav-item change-mode" : "nav-item"}>All Products</li>
        </Link>
        <Link to="/list-categories" onClick={handleCloseNavbar}>
          <li className={changeMode ? "nav-item change-mode" : "nav-item"}>All Categories</li>
        </Link>
        <li className={changeMode ? "nav-item mode change-mode" : "nav-item mode"} onClick={handleChangeMode}>
          <div className="dark-mode" >{changeMode ? "🌑" : "🌝"}</div>
        </li>
      </ul>
      <div style={changeMode ? {color: "black"} : {color: "white"}} className="nav-responsive" onClick={handleOpenNavbar}>
        Ξ
      </div>
    </nav>
  );
};

export default Navbar;
