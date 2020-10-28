import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";

function Navbar2() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/images/logo4.png" alt="Logo" className="logo-img" />
          </Link>

          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <ul className="navbar-item">
              <li className="navbar-item">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="navbar-item" to="/Search">
                  Search
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="navbar-item" to="/saved">
                  Saved Cocktails
                </Link>
              </li>
            </ul>
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  className="button is-warning is-outlined is-rounded nav-button"
                  to="/saved"
                >
                  <strong className="nav-button">Sign up</strong>
                </Link>
                <a className="button is-danger is-rounded is-outlined nav-button">
                  <strong className="nav-button">Login</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="border-gradient"></div>
    </div>
  );
}

export default Navbar2;
