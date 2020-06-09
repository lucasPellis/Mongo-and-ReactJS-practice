import React from 'react';
import { Router, Route, Switch } from 'react-router';
import MoviesList from '../pages/movies-list-page/movieLists.page';
import NewMoviePage from '../pages/new-movie-page/newMovie.page';
import history from '../utils/history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/new">
        <NewMoviePage />
      </Route>
      <Route path="/">
        <MoviesList />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
