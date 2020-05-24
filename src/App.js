import React, { useState, useEffect, Fragment } from "react";
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
import NavBar from "./components/NavBar";
import MovieForm from "./components/MovieForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortColumn, setSortColumn] = useState({
    path: "title",
    order: "asc",
  });
  const [searchQuery, setSearchQuery] = useState("");

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
        searchQuery,
        setSearchQuery,
      }}
    >
      <Fragment>
        <NavBar />

        <div className="container" style={{ marginTop: 10 }}>
          <Switch>
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/login-form" component={LoginForm} />
            <Route exact path="/rentals" component={Rentals} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/movies" component={Movies} />\
            <Route exact path="/movies/:id" component={MovieForm} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Fragment>
    </MoviesContext.Provider>
  );
}

export default App;
