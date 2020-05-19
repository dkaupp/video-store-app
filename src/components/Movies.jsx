import React from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import { paginate } from "./utils/paginate";
import _ from "lodash";

const Movies = ({
  movies,
  currentPage,
  pageSize,
  selectedGenre,
  sortColumn,
}) => {
  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre._id === selectedGenre._id)
    : movies;
  const count = filteredMovies.length;
  const sorted = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  const paginatedMovies = paginate(sorted, currentPage, pageSize);

  if (count === 0) return <p>There are no movies in the database </p>;
  return (
    <div className="container">
      <p>{`There are ${count} movies in the database`}</p>
      <Table movies={paginatedMovies} />
      <Pagination count={count} currentPage={currentPage} pageSize={pageSize} />
    </div>
  );
};

export default Movies;
