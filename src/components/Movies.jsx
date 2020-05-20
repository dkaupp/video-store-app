import React, { Fragment, useContext } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import ListGroup from "./ListGroup";
import { paginate } from "./utils/paginate";
import _ from "lodash";
import MoviesContext from "../context/MoviesContext";

const Movies = () => {
  const { movies, currentPage, selectedGenre, sortColumn } = useContext(
    MoviesContext
  );

  const pageSize = 4;

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
    <Fragment>
      <div className="row">
        <div className="col-2">
          <ListGroup />
        </div>
        <div className="col">
          <p>{`There are ${count} movies in the database`}</p>
          <Table movies={paginatedMovies} />
          <Pagination
            count={count}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
