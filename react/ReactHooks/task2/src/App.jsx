import React from 'react';
import User from './User';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <a href="/users/github">Github</a>
            </li>
            <li className="navigation__item">
              <a href="/users/facebook">Facebook</a>
            </li>
          </ul>

          <Switch>
            <Route path="/users/:userId">
              <User />
            </Route>
            <Route path="/">
              <span>Select a user please</span>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
