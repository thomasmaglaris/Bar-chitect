import axios from "axios";

//api to search for cocktail by its name
const URLAPI =
  "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=manhattan";

// Export an object with a "search" method that searches the CocktailDB API for the passed query
export default {
  search: function (query) {
    return axios.get(URLAPI + query);
  },
};

//Full ingredient list https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list
//481 ingredients total

//search by multiple ingredients https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

//Popular cocktails (maybe a good idea to use as the initial state!!)
//https://www.thecocktaildb.com/api/json/v2/9973533/popular.php
//20 cocktails selected, maybe grab 12 and start with 3 by 4 grid
