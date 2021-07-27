import React from 'react';
import { Home } from '../components/template/index';
import { createHttpLink, ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ uri: "/api/graphql" }),
  });

const HomePage = (props) => <ApolloProvider client={client}> <Home {...props} /> </ApolloProvider>;

export default HomePage;
