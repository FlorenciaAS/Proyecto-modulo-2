import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/Login'
import Playlist from './Pages/Playlist'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Playlist">
            <Playlist />
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

