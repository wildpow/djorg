import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));

