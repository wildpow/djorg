import React, { Component } from 'react';
import Graph2 from './Graph2';
import Rest from './Rest';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'; 

const GRAPH_API = 'http://127.0.0.1:8000/graphql/';
const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPH_API }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});
class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
        <Graph2/>
        </ApolloProvider>
        {/* <Rest/> */}
      </div>
    );
  }
}

export default App;
