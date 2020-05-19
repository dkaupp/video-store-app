import React, { useState, useEffect } from "react";
import MoviesContext from "./context/MoviesContext";
import "./App.css";

import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";

import Movies from "./components/Movies";
import ListGroup from "./components/ListGroup";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

  const onDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const onLiked = (movie) => {
    setMovies(
      movies.map((m) =>
        m._id === movie._id ? { ...movie, liked: !movie.liked } : m
      )
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        onDelete,
        onLiked,
        handlePageChange,
        currentPage,
        pageSize,
      }}
    >
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-2">
            <ListGroup genres={genres} />
          </div>
          <div className="col">
            <Movies
              movies={movies}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </div>
        </div>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
