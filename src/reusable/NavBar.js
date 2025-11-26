import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  window.scrollTo(0, 0);
  return (
    <div className="floating-bar">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <button className="navbar-button">Michał Pikulski</button>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/about">
            <button className="navbar-button">About Me</button>
          </Link>
          <Link to="/projects">
            <button className="navbar-button">Projects</button>
          </Link>
        </div>
      </nav>
      <div className="separator"></div>
    </div>
  );
}

export default NavBar;
