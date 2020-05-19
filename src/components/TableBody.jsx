import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Liked from "./reusable/Liked";

const TableBody = ({ movies }) => {
  const { setMovies, movies: allMovies } = useContext(MoviesContext);

  const onDelete = (movie) => {
    setMovies(allMovies.filter((m) => m._id !== movie._id));
  };

  const onLiked = (movie) => {
    setMovies(
      allMovies.map((m) =>
        m._id === movie._id ? { ...movie, liked: !movie.liked } : m
      )
    );
  };

  return (
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Liked onClick={() => onLiked(movie)} liked={movie.liked} />
          </td>
          <td>
            <button onClick={() => onDelete(movie)} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
