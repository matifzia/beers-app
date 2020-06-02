import axios from "axios";

export const getBeersList = async () => {
  let beers = await axios.get("https://api.punkapi.com/v2/beers");
  return beers.data;
};

export const getBeerById = async beerId => {
  let beer = await axios.get("https://api.punkapi.com/v2/beers/" + beerId);
  return beer.data[0];
};
