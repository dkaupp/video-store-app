import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const TableHeader = () => {
  const { handleSort } = useContext(MoviesContext);
  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("title")} scope="col">
          Title
        </th>
        <th onClick={() => handleSort("genre.name")} scope="col">
          Genre
        </th>
        <th onClick={() => handleSort("numberInStock")} scope="col">
          Stock
        </th>
        <th onClick={() => handleSort("dailyRentalRate")} scope="col">
          Rate
        </th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
