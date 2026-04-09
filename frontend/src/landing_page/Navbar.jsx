import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <img src="/Assets/logo.svg" alt="logo" className="nav-logo" />
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#">Signup</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>

            {/* MENU ICON */}
            <li className="nav-item">
              <a className="nav-link">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;