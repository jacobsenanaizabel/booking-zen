import React from 'react';
import { Home } from '../components/template/Home/index';
import Script from 'next/script'

import { createHttpLink, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SnackbarProvider from 'react-simple-snackbar'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: "/api/graphql" }),
  });

const HomePage = (props) => <ApolloProvider client={client}><SnackbarProvider> <Script src="https://apis.google.com/js/api.js"/> <Home {...props} /> </SnackbarProvider></ApolloProvider>;

export default HomePage;
