import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

//put link on image

function Navbar() {
  return (
    <div>
      <nav className="NavbarItems">
        <div class="container is-flex">
          <Link to="/">
            {/* <img
              className="bar-logo"
              src="/images/logo.png"
              alt="Bar-chitect logo"
            ></img> */}
          </Link>
          <div>
            <ul className="columns is-flex nav-items-wrapper">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/saved">Saved Cocktails</Link>
              </li>
            </ul>
          </div>
          <div className="login-container">
            <form>
              <input type="text" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="border-gradient"></div>
    </div>
  );
}

export default Navbar;
