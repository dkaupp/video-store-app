import React, { useContext } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Liked from "./reusable/Liked";
import MoviesContext from "../context/MoviesContext";
import { Link } from "react-router-dom";
import { deleteMovie } from "../services/fakeMovieService";

const Table = ({ movies }) => {
  const { setMovies, movies: allMovies } = useContext(MoviesContext);

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    {
      path: "genre.name",
      label: "Genre",
    },
    {
      path: "numberInStock",
      label: "Stock",
    },
    {
      path: "dailyRentalRate",
      label: "Rate",
    },
    {
      key: "like",
      content: (movie) => (
        <Liked onClick={() => onLiked(movie)} liked={movie.liked} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button onClick={() => onDelete(movie)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  const onDelete = (movie) => {
    const deletedMovie = deleteMovie(movie._id);
    console.log(deletedMovie);
    setMovies(allMovies.filter((m) => m._id !== deleteMovie._id));
  };

  const onLiked = (movie) => {
    setMovies(
      allMovies.map((m) =>
        m._id === movie._id ? { ...movie, liked: !movie.liked } : m
      )
    );
  };

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody data={movies} columns={columns} />
    </table>
  );
};

export default Table;
