import React from 'react';
import { Banner } from '../../molecules';
import { Card } from '../../organisms';
import { gql, useQuery } from '@apollo/client';

import { GroupCards } from './styles';
function Home(props) {

  const GET_PROFESSIONALS = gql`
  query {
    freelancers {
      id
      name
      location
      profession
      price
      rating
      ratingNumbers
      description
    }
  }`;

  const { loading, error, data } = useQuery(GET_PROFESSIONALS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error calling API</p>;

  return (
    <>
      <Banner/>
      <GroupCards>
        {data.freelancers.map(freelancer => 
          <Card name={freelancer.name} 
                location={freelancer.location}
                price={freelancer.price}
                rating={freelancer.rating}
                ratingNumbers={freelancer.ratingNumbers}
                description={freelancer.description}
                />
        )}
      </GroupCards>
    </>
  );
}


export default Home;
