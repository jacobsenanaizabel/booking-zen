import React, { useState } from 'react';
import { Banner } from '../../molecules';
import { Card } from '../../organisms';
import { gql, useQuery } from '@apollo/client';

import { GroupCards } from './styles';

export const GET_PROFESSIONALS = gql`
query {
  freelancers {
    id
    name
    img
    location
    profession
    price
    rating
    ratingNumbers
    description
  }
}`;


export const Home = () => {

  const [professionals, setProfessionals] = useState([]);
  const [values, setValue] = useState();

  const { loading, error, data } = useQuery(GET_PROFESSIONALS, {onCompleted: setProfessionals});
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error calling API</p>;


  function searchFreelancer(value) {
    setValue(value)
  }

  return (
    <>
      {data && professionals?.freelancers && (
        <>
        <Banner searchFreelancer={searchFreelancer}/>
        <GroupCards>
          {professionals?.freelancers.filter((freelancer) => 
            values === undefined || values.length < 1 ? freelancer : freelancer.name.toUpperCase().includes(values?.toUpperCase()) || freelancer.profession.toUpperCase().includes(values?.toUpperCase())
          ).map(freelancer => 
            <Card key={freelancer.key}
                  img={freelancer.img}
                  name={freelancer.name} 
                  location={freelancer.location}
                  price={freelancer.price}
                  profession={freelancer.profession}
                  rating={freelancer.rating}
                  ratingNumbers={freelancer.ratingNumbers}
                  description={freelancer.description}
                  />
          )}
        </GroupCards>
        </>
      )}

    </>
  );
}



