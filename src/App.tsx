import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

import { getServerStatus } from "./api/fetch";

class App extends Component<{}, { isServerAvailable?: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const isServerAvailable = await getServerStatus();
    this.setState({ isServerAvailable });
  }

  render() {
    let serverStatusString;

    if (this.state.isServerAvailable === undefined) {
      serverStatusString = "...";
    } else {
      serverStatusString = `Backend API is ${
        this.state.isServerAvailable ? "" : "NOT "
      }available`;
    }

    return (
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
          <p>{serverStatusString}</p>
        </header>
      </div>
    );
  }
}

export default App;
