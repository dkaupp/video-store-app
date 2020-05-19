import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ movies }) => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody movies={movies} />
    </table>
  );
};

export default Table;
