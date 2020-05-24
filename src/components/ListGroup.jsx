import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const ListGroup = () => {
  const {
    genres,
    setSelectedGenre,
    setCurrentPage,
    selectedGenre,
    setSearchQuery,
  } = useContext(MoviesContext);

  const onSelectedGenre = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    setSearchQuery("");
  };

  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      <li
        className={
          !selectedGenre ? "list-group-item active" : "list-group-item"
        }
        onClick={() => onSelectedGenre(null)}
      >
        All Genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            selectedGenre && selectedGenre._id === genre._id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onSelectedGenre(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
