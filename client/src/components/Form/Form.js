import React, { useState } from "react";
import "./Form.css";

const Form = ({ performSearch, ingSearch }) => {
  const [nameSearch, updateNameSearchQuery] = useState("");
  const [ingredientSearch, updateIngSearchQuery] = useState("");

  const handleNameSearch = (event) => {
    //Preventing the default behaviour of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!nameSearch) {
      //alert not working correctly. error message if unknown value
      alert("Sorry, no cocktails matched your search.");
    } else {
      performSearch(nameSearch);
    }
  };

  const handleIngredientSearch = (event) => {
    //Preventing the default behaviour of the form submit (which is to refresh the page)
    event.preventDefault();
    //if statement will create an alert if search button has been clicked when nothing has been entered
    if (!ingredientSearch) {
      //alert not working correctly. error message if unknown value
      alert("You must enter at least one ingredient of a cocktail.");
    } else {
      ingSearch(ingredientSearch);
    }
  };

  return (
    <div className="columns form-background">
      <div className="has-background-black-ter is-half column search-child">
        <p className="desc is-size-4">
          Already know the name of the cocktail you want the recipe for? <br />{" "}
          Enter the name of the cocktail and click the search button to see the
          reuslts.
        </p>
        <form className="search-form">
          <input
            value={nameSearch}
            name="nameSearch"
            onChange={(e) => updateNameSearchQuery(e.target.value)}
            type="text"
            placeholder="cocktail name"
            className="search-input"
          />
        </form>

        <button
          className="button is-medium form-button"
          type="button"
          onClick={handleNameSearch}
        >
          Search
        </button>
      </div>
      <div className="has-background-dark is-half column search-child">
        <p className="desc is-size-4">
          Want to search for cocktails based on the ingredients? <br /> Type
          each ingredient below and make sure to separate them with a comma{" "}
          <br /> e.g. "vodka, soda water, lime"
        </p>
        <form className="search-form">
          <input
            value={ingredientSearch}
            name="ingredientSearch"
            onChange={(e) => updateIngSearchQuery(e.target.value)}
            type="text"
            placeholder="cocktail ingredients"
            className="search-input"
          />
        </form>
        <button
          className="button is-medium form-button"
          onClick={handleIngredientSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Form;
