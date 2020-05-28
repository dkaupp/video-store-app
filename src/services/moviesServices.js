import http from "./httpService";

export const getMovies = () => {
  return http.get("/movies");
};

export const deleteMovie = (movieId) => {
  return http.delete(`/movies/${movieId}`);
};

export const getMovie = (movieId) => {
  return http.get(`/movies/${movieId}`);
};

export async function saveMovie(movie) {
  if (!movie._id) {
    let movieInDb = {};
    movieInDb.title = movie.title;
    movieInDb.genreId = movie.genreId;
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    try {
      return await http.post("/movies", movieInDb);
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

    return await http.put(`/movies/${movie._id}`, movieInDb);
  } catch (error) {
    console.log(error.message);
  }
}
