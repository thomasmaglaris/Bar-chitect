import React from "react";
import Hero from "../components/Hero/Hero";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="whole">
      <Hero
        title="Bar-chitect."
        subtitle="We do the cocktail making,"
        subtitle2="So you can do the cocktail shaking."
        backgroundimg="/images/Hero1.jpg"
        textAlignment="has-text-left"
        textSize="is-size-1"
        textSizeSub="is-size-3"
      />

      <div className="container about-body">
        <div className="about-info block">
          <section>
            <h1 className="about-header title is-1 is-size-3-mobile">
              Welcome to Bar-chitect
            </h1>
            <p className="font content is-large is-size-5-mobile">
              A cocktail generating platform that provides you with the finest
              of cocktails based on your needs. Our simple search options
              provide you with all the recipe information you need to make the
              perfect cocktails.
            </p>
          </section>
          <section className="block section-1">
            <h2 className="font title is-3 about-sub is-size-4-mobile">
              Search for cocktails by name
            </h2>
            <b className="font content is-large is-size-5-mobile">
              Do you know the name of a cocktail but not sure how to make it?
            </b>
            <br></br>
            <p className="font content is-medium is-size-6-mobile">
              Our search by name option will help you find the cocktail you're
              looking for.{" "}
            </p>
          </section>
          <section className="block section-2">
            <h2 className="font title is-3 about-sub is-size-4-mobile">
              Search for cocktails by ingredient
            </h2>
            <b className="font content is-large is-size-5-mobile">
              Do you have excess alcohol and other ingredients lying around the
              house and not sure what to do with them?
            </b>
            <br></br>
            <p className="font content is-medium is-size-6-mobile">
              Our search by ingredient option will generate the cocktails you
              can make with the ingredients you already have.
            </p>
          </section>
          <section className="block section-3">
            <h2 className="font title is-3 about-sub is-size-4-mobile">
              Save your favourite cocktails
            </h2>
            <b className="font content is-large is-size-5-mobile">
              Want to keep a list of your favourite cocktails?
            </b>
            <br></br>
            <p className="font content is-medium is-size-6-mobile">
              Register with us to save your favourite cocktails so you never
              have to search for them again.
            </p>
          </section>

          <Link to="/search" className="font start-button button is-medium">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
