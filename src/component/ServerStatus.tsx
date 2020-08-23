import React, { Component } from "react";
import { gql } from "@apollo/client";
import { query } from "../api/graphQLClient";
import { getEnv } from "../env/main";

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

class ServerStatus extends Component<{}, { isServerAvailable?: boolean }> {
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

  public render() {
    const isServerAvailable = this.state.isServerAvailable;

    let serverStatusString;

    if (isServerAvailable === undefined || isServerAvailable === null) {
      serverStatusString = "Connecting...";
    } else if (!isServerAvailable) {
      serverStatusString = "UNAVAILABLE";
    } else {
      // The case where server is available
      serverStatusString = "AVAILABLE";
    }

    return (
      <div>
        Environment: {getEnv()}
        <br />
        API Server Status: {serverStatusString}
      </div>
    );
  }
}

export default ServerStatus;
