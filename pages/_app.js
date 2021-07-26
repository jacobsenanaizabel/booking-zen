import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { global as GlobalStyle } from '../styles';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

class MyApp extends App {

  render(){
    const {
      Component,
      pageProps,
      ...other
    } = this.props;

    return (<>
    <ApolloProvider client={client}>
    <GlobalStyle />
      <Head>
        <meta
          name="viewport"
          content="width=device-width,
          initial-scale=1,
          maximum-scale=1,
          user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
    </>
    )
  }

}

export default MyApp
