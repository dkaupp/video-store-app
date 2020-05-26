import http from "./httpService";

const apiEndPoint = "http://localhost:8000/api/movies";

export const getMovies = () => {
  return http.get(apiEndPoint);
};

export const deleteMovie = (movieId) => {
  return http.delete(`${apiEndPoint}/${movieId}`);
};
