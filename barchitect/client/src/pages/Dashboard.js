import React, { Component } from "react";
import axios from "axios";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import { Loader } from "../components/Loader/Loader";
import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      popularResults: [],
      //   ingredientArray: [],
      //   measurementArray: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php`)
      .then((res) => {
        this.setState({ popularResults: res.data.drinks, loading: false });
      });
  }

  //perform api call for name search
  ///****need help getting ingredients to work!!! */
  performSearch = (query) => {
    this.setState({ loading: true });
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => {
        let list = res.data.drinks;
        for (let i = 0; i < list.length; i++) {
          list[i]["ing"] = [];
          for (let j = 1; j <= 15; j++) {
            if (list[i][`strIngredient${j}`]) {
              let measure = list[i][`strMeasure${j}`] || "";
              list[i]["ing"].push(measure + list[i][`strIngredient${j}`]);
            } else {
              break;
            }
          }
        }
        this.setState({ results: res.data.drinks, loading: false });

        // for (let i = 1; i <= 15; i++) {
        //   const ingredientList = res.data.drinks.map(function (value) {
        //     return value[`strIngredient${i}`];
        //   });
        //   console.log(ingredientList);
        //   //   const ingredientList = res.data.drinks[0][`strIngredient${i}`];
        //   //   console.log(ingredientList);
        // }
        console.log(this.state.results);
      });
  };

  //perform api call for ingredient search v1/1/
  //***error when a space after the ingredient (.strip?) */
  ingredientSearch = (query) => {
    let listToFilterOn = this.state.popularResults;
    let filteredList = [];
    let queryList = query.split(",");
    for (let i = 0; i < listToFilterOn.length; i++) {
      for (let j = 1; j <= 15; j++) {
        if (listToFilterOn[i][`strIngredient${j}`]) {
          if (
            queryList.indexOf(listToFilterOn[i][`strIngredient${j}`]) !== -1
          ) {
            filteredList.push(listToFilterOn[i]);
            break;
          }
        } else {
          break;
        }
      }
    }

    let list = filteredList;
    for (let i = 0; i < list.length; i++) {
      list[i]["ing"] = [];
      for (let j = 1; j <= 15; j++) {
        if (list[i][`strIngredient${j}`]) {
          let measure = list[i][`strMeasure${j}`] || "";
          list[i]["ing"].push(measure + list[i][`strIngredient${j}`]);
        } else {
          break;
        }
      }
    }
    this.setState({
      results: filteredList,
    });
  };

  render() {
    return (
      <div>
        <Hero
          title="Bar-chitect."
          subtitle="Sip back, relax"
          subtitle2="and enjoy the show."
          backgroundimg="/images/Hero1.jpg"
          textAlignment="has-text-left"
          textSize="is-size-1"
          textSizeSub="is-size-3"
        ></Hero>

        <Form
          performSearch={this.performSearch}
          ingSearch={this.ingredientSearch}
        />

        {this.state.loading ? (
          <Loader name="loader" />
        ) : (
          <div className="block container">
            <ul className="results-card columns is-multiline">
              {this.state.results.map((drink) => (
                <li key={drink.idDrink} className="column">
                  <div className="cocktail-desc">
                    <h4 className="result-header title">{drink.strDrink}</h4>
                    <img
                      className="result-img"
                      alt={drink.idDrink}
                      src={drink.strDrinkThumb}
                      style={{
                        height: 198,
                        width: 198,
                      }}
                    ></img>
                    {drink.ing.map((itm, idx) => {
                      return (
                        <p className="font" key={idx}>
                          {itm}
                        </p>
                      );
                    })}
                    <p className="font">
                      Directions for use: {drink.strInstructions}
                    </p>
                    <p className="font">Best served in a {drink.strGlass}</p>
                  </div>

                  <button class="form-button button is-medium" type="button">
                    Save
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
