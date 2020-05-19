import React from "react";

import _ from "lodash";

const TableBody = ({ movies, columns }) => {
  return (
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          {columns.map((column) =>
            column.content ? (
              <td key={column.key}>{column.content(movie)}</td>
            ) : (
              <td key={column.path}>{_.get(movie, column.path)}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

{
  /* <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
        
          </td> */
}
