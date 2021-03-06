import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (rating > 0) {
    REQUEST_URL += `minimum_rating=${rating}&`;
  }
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
  // return fetch(`${API_URL}`)
  //   .then((res) => res.json())
  //   .then((json) => json.data.movies);
};
