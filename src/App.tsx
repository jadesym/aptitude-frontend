import React, { Component } from "react";
import { gql } from "@apollo/client";
import logo from "./logo.svg";
import "./App.scss";
import { query } from "./api/graphQLClient";

// Move query into a separate file
const serverStatusQuery = gql`
  query getServerStatus {
    serverStatus {
      isServerAvailable
    }
  }
`;

interface ServerStatus {
  isServerAvailable: boolean;
}

interface QueryResponse {
  serverStatus: ServerStatus;
}

class App extends Component<{}, { isServerAvailable?: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let queryResult;
    try {
      queryResult = await query<QueryResponse>(serverStatusQuery);
    } catch (err) {
      this.setState({
        isServerAvailable: false,
      });
      return;
    }

    const { loading, data } = queryResult;

    if (!loading) {
      this.setState({
        isServerAvailable: data!.serverStatus.isServerAvailable,
      });
    }
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
