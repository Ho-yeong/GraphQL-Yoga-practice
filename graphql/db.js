export let movies = [
  { id: 0, name: "Simon", score: 19 },
  { id: 1, name: "Dann", score: 25 },
  { id: 2, name: "Sherlok", score: 21 },
  { id: 3, name: "Lynn", score: 19 },
  { id: 4, name: "Tina", score: 20 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = movies.filter((movie) => movie.id === id);
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
