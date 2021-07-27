import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Banner } from '../../molecules';
import { Card } from '../../organisms';
import { gql, useQuery } from '@apollo/client';

import { GroupCards } from './styles';
function Home(props) {

  const GET_BEASTS = gql`
  query {
    beasts {
      id
      commonName
      legs
      binomial
    }
  }`;

  const { loading, error, data } = useQuery(GET_BEASTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <>
      <Banner/>
      <GroupCards>
        <Card/>
      </GroupCards>
      <tbody>
            {data.beasts.map(beast => 
            <tr key={beast.id}>
              <td>{beast.commonName}</td>
              <td>{beast.legs}</td>
              <td>{beast.binomial}</td>
            </tr>
            )}
      </tbody>
    </>
  );
}

Home.propTypes = {
};

export default Home;
