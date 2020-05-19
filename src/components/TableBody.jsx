import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Liked from "./reusable/Liked";
import { paginate } from "./utils/paginate";

const TableBody = () => {
  const { movies, onDelete, onLiked, currentPage, pageSize } = useContext(
    MoviesContext
  );
  const paginatedMovies = paginate(movies, currentPage, pageSize);

  return (
    <tbody>
      {paginatedMovies.map((movie) => (
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
