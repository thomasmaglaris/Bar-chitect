import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="is-family-code">BAR-CHITECT 2020 &copy;</p>
        <p className="is-family-code">Thomas Maglaris</p>
        <p className="is-family-code">
          Powered by React{" "}
          <span>
            <i className="fab fa-react"></i>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
