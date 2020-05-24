import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import MovieForm from "./components/MovieForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
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
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
