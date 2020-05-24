import React, { Fragment, useContext, useEffect } from "react";
import { paginate } from "./utils/paginate";
import _ from "lodash";
import MoviesContext from "../context/MoviesContext";
import { getMovies } from "../services/fakeMovieService.js";

import Table from "./Table";
import Pagination from "./Pagination";
import ListGroup from "./ListGroup";
import SearchBar from "./reusable/SearchBar";

const Movies = ({ history }) => {
  const {
    movies,
    setMovies,
    selectedGenre,
    setSelectedGenre,
    searchQuery,
    setSearchQuery,
    sortColumn,
    setCurrentPage,
    currentPage,
  } = useContext(MoviesContext);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const pageSize = 4;

  const filterMovies = (movies, selectedGenre, searchQuery) => {
    if (selectedGenre) {
      return movies.filter((movie) => movie.genre._id === selectedGenre._id);
    }
    if (searchQuery) {
      return movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return movies;
  };

  const filteredMovies = filterMovies(movies, selectedGenre, searchQuery);

  const count = filteredMovies.length;
  const sorted = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  const paginatedMovies = paginate(sorted, currentPage, pageSize);

  return (
    <Fragment>
      <div className="row">
        <div className="col-2">
          <ListGroup />
        </div>
        <div className="col">
          <button
            style={{ marginBottom: "10px" }}
            className="btn btn-primary"
            onClick={() => history.push("/movies/new")}
          >
            New Movie
          </button>

          <p>{`There are ${count} movies in the database`}</p>
          <SearchBar />
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
