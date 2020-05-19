import React from "react";

const ListGroup = ({ genres, onSelectedGenre }) => {
  return (
    <ul className="list-group">
      <li
        className="list-group-item active"
        onClick={() => onSelectedGenre(null)}
      >
        All Genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre._id}
          className="list-group-item"
          onClick={() => onSelectedGenre(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
