import React from "react";
import Table from "./Table";
import Pagination from "./Pagination";

const Movies = ({ movies, currentPage, pageSize }) => {
  const count = movies.length;

  if (count === 0) return <p>There are no movies in the database </p>;
  return (
    <div className="container">
      <p>{`There are ${count} movies in the database`}</p>
      <Table />
      <Pagination count={count} currentPage={currentPage} pageSize={pageSize} />
    </div>
  );
};

export default Movies;
