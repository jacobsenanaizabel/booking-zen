import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { global as GlobalStyle } from '../styles';

class MyApp extends App {

  render(){
    const {
      Component,
      pageProps,
      ...other
    } = this.props;

    return (<>
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
    </>
    )
  }

}

export default MyApp
