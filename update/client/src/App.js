import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import UserList from './components/UserList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

        <div id="main">
          <h1>Taixing Reading List</h1>
          <UserList />

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
