/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MoviesList from '../pages/movies-list-page/movieLists.page';
import NewMoviePage from '../pages/new-movie-page/newMovie.page';
import history from '../utils/history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/new">
        <NewMoviePage />
      </Route>
      <Route path="/genre=:genre" render={(props) => <MoviesList {...props} />} />
      <Route path="/">
        <MoviesList />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
