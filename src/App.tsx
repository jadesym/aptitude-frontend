import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ServerStatus from "./components/ServerStatus";
import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/status" component={ServerStatus} />
          {
            // No patch to match everything other than status
          }
          <Route component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
