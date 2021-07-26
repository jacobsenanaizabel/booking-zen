import React from 'react';
import ReactStars from "react-rating-stars-component";

import PropTypes from 'prop-types';
import { Text } from '../index';
import { Info, ContainerRating, Stars } from './styles';

const Rating = () => {   
const ratingChanged = (newRating) => {
  console.log(newRating);
};

  return (
    <>
    <ContainerRating>
    <Info>
      <Text text="Psicologa" size="1rem" color="black" weight="700"/>  -  <Text text="Lisboa" size="1rem" color="black" weight="700"/>
    </Info>

    <Stars>      
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <Text text="(2 avaliações)" size="0.8rem" color="text" />
    </Stars>
  </ContainerRating>
    </>
  );
};

Rating.propTypes = {
  errorHandler: PropTypes.func,
};

Rating.defaultProps = {
  errorHandler: null,
};
export default Rating;
