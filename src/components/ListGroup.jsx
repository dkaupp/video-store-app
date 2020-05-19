import React from "react";

const ListGroup = ({ genres }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item active">All Genres</li>
      {genres.map((genre) => (
        <li key={genre._id} className="list-group-item">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
