import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ movies }) => {
  const columns = [
    {
      path: "title",
      label: "Title",
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
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody movies={movies} />
    </table>
  );
};

export default Table;
