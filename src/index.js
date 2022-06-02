import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  gql,
  InMemoryCache
} from "@apollo/client";
// import { cache } from "./cache";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if(graphQLErrors){
    graphQLErrors.map(({ message, location, path }) => {
      return alert(`GraphQL error ${message}`);
    });
  }
});

// TODO: where does errorLink go?
const httpLink = createHttpLink({
  errorLink,
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
