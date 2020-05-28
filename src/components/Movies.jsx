import React, { Fragment, useState, useEffect, useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import _ from "lodash";

import { paginate } from "./utils/paginate";
import { getMovies } from "../services/moviesServices";
import { getGenres } from "../services/genreServices";
import { filterMovies } from "./utils/filtermovies";

import Table from "./Table";
import Pagination from "./Pagination";
import ListGroup from "./ListGroup";
import SearchBar from "./reusable/SearchBar";
import UserContext from "../context/UserContext";

const Movies = ({ history }) => {
  const { user } = useContext(UserContext);

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState({
    path: "title",
    order: "asc",
  });

  useEffect(() => {
    async function fetchData() {
      const { data: movies } = await getMovies();
      const { data: genres } = await getGenres();
      setMovies(movies);
      setGenres(genres);
    }
    fetchData();
  }, []);

  const pageSize = 4;

  const filteredMovies = filterMovies(movies, selectedGenre, searchQuery);

  const count = filteredMovies.length;
  const sorted = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  const paginatedMovies = paginate(sorted, currentPage, pageSize);

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        setMovies,
        currentPage,
        setCurrentPage,
        selectedGenre,
        setSortColumn,
        sortColumn,
        genres,
        setSelectedGenre,
        searchQuery,
        setSearchQuery,
      }}
    >
      <Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroup />
          </div>
          <div className="col">
            {user && (
              <button
                style={{ marginBottom: "10px" }}
                className="btn btn-primary"
                onClick={() => history.push("/movies/new")}
              >
                New Movie
              </button>
            )}

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
    </MoviesContext.Provider>
  );
};

export default Movies;
