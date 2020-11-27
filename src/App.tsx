import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./assets/logo.svg";
import "./App.scss";

import ServerStatus from "./component/ServerStatus";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/status">
            <ServerStatus />
          </Route>
          {
            // No patch to match everything other than status
          }
          <Route>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
