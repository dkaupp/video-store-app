import React, { useState, useEffect } from "react";
import MoviesContext from "./context/MoviesContext";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";

import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import LoginForm from "./components/LoginForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortColumn, setSortColumn] = useState({
    path: "title",
    order: "asc",
  });

  useEffect(() => {
    setMovies(getMovies());
    setGenres(getGenres());
  }, []);

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
        setCurrentPage,
      }}
    >
      <div className="container" style={{ marginTop: 20 }}>
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/login-form" component={LoginForm} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
