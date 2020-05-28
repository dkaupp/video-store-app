import http from "./httpService";
import { apiUrl } from "../config.json";

export const getMovies = () => {
  return http.get(`${apiUrl}/movies`);
};

export const deleteMovie = (movieId) => {
  return http.delete(`${apiUrl}/movies/${movieId}`);
};

export const getMovie = (movieId) => {
  return http.get(`${apiUrl}/movies/${movieId}`);
};

export async function saveMovie(movie) {
  if (!movie._id) {
    let movieInDb = {};
    movieInDb.title = movie.title;
    movieInDb.genreId = movie.genreId;
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    try {
      return await http.post(`${apiUrl}/movies`, movieInDb);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    let movieInDb = {};
    movieInDb.title = movie.title;
    movieInDb.genreId = movie.genreId;
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    return await http.put(`${apiUrl}/movies/${movie._id}`, movieInDb);
  } catch (error) {
    console.log(error.message);
  }
}
