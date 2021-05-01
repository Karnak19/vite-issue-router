import React from 'react';

import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Users from './views/Users';
import UsersId from './views/Users.Id';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-steel-900 min-h-screen grid grid-rows-4 place-items-center text-steel-50">
        <header>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users/:id">
            <UsersId />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
