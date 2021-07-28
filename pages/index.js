import React from 'react';
import { Home } from '../components/template/index';
import { createHttpLink, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SnackbarProvider from 'react-simple-snackbar'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: "/api/graphql" }),
  });

const HomePage = (props) => <ApolloProvider client={client}><SnackbarProvider> <Home {...props} /> </SnackbarProvider></ApolloProvider>;

export default HomePage;
