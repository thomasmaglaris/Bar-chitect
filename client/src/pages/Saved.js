import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import axios from "axios";
import "./Saved.css";

function Saved() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showSucessScreen, toggleScreen] = useState(false);

  const createUser = () => {
    axios
      .post(`http://localhost:3001/api/register`, {
        username: name,
        password: password,
      })
      .then((res) => {
        toggleScreen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Hero
        title="Bar-chitect."
        subtitle="Saved Cocktails"
        backgroundimg="/images/Hero1.jpg"
        textAlignment="has-text-left"
        textSize="is-size-1"
        textSizeSub="is-size-3"
      />
      {showSucessScreen ? (
        <div className="columns is-centered">
          <div className="column is-two-fifths has-background-white column-adjust">
            <h4 className="font title is-3 is-size-4-mobile welcome-msg">
              You have successfully registered!
            </h4>
          </div>
        </div>
      ) : (
        <div>
          <div className="columns is-centered">
            <div className="column is-two-fifths has-background-white column-adjust">
              <h4 className="font title is-3 is-size-4-mobile">
                Register with us!
              </h4>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input font"
                    type="text"
                    placeholder="Email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="far fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input font"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button
                    className="button is-danger font"
                    onClick={createUser}
                  >
                    Register
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Saved;
