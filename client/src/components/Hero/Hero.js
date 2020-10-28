import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div>
      <section
        className="hero-container"
        style={{ backgroundImage: `url(${props.backgroundimg})` }}
      >
        <div className="container">
          <h1
            className={`${props.textAlignment} hero-heading has-text-weight-bold is-size-4-mobile ${props.textSize}`}
          >
            {props.title}
          </h1>
          <h2
            className={`${props.textAlignment} sub-heading has-text-weight-bold is-size-4-mobile ${props.textSizeSub}`}
          >
            {props.subtitle}
          </h2>
          <h2
            className={`${props.textAlignment} sub-heading has-text-weight-bold is-size-4-mobile ${props.textSizeSub}`}
          >
            {props.subtitle2}
          </h2>
        </div>
      </section>
      <div className="border-gradient"></div>
    </div>
  );
};

export default Hero;
