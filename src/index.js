import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors }) => {
  if(graphQLErrors){
    graphQLErrors.map(({ message }) => {
      return alert(`GraphQL error ${message}`);
    });
  }
});

const httpLink = createHttpLink({
  errorLink,
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = "API_KEY";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
