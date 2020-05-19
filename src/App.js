import React, { useState, useEffect } from "react";
import MoviesContext from "./context/MoviesContext";
import "./App.css";

import { getMovies } from "./services/fakeMovieService";

import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const onDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const onLiked = (movie) => {
    console.log(movie);
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
      <div className="container">
        <Movies movies={movies} currentPage={currentPage} pageSize={pageSize} />
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
