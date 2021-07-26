import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Banner } from '../../molecules';
import { Card } from '../../organisms';
// import {
//   useQuery,
//   gql
// } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { GroupCards } from './styles';
function Home(props) {

  // const { loading, error, data } = useQuery(gql`
  //   {
  //     rates(currency: "USD") {
  //       currency
  //       rate
  //     }
  //   }
  // `);


  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <Banner/>
      <GroupCards>
        <Card/>
      </GroupCards>

      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))} 
    </>
  );
}

Home.propTypes = {
};

export default Home;
