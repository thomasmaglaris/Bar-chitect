import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

//put link on image

function Navbar() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, toggleLoginForm] = useState(true);

  const performLogin = () => {
    axios
      .post(`http://localhost:3001/api/login`, {
        username: name,
        password: password,
      })
      .then((res) => {
        toggleLoginForm(false);
        alert("welcome : " + res.data.name);
      });
  };

  return (
    <div>
      <nav className="NavbarItems navbar">
        <div class="container is-flex">
          <div className="navbar-brand">
            <Link to="/">
              <img
                className="bar-logo"
                src="/images/logo4.png"
                alt="Bar-chitect logo"
              ></img>
            </Link>
          </div>
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
            {showLoginForm ? (
              <form>
                <input
                  type="text"
                  placeholder="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button
                  className="login-button"
                  type="button"
                  onClick={performLogin}
                >
                  Login
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </nav>
      <div className="border-gradient"></div>
    </div>
  );
}

export default Navbar;
