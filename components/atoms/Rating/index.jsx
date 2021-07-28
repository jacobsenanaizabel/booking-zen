import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useSnackbar } from 'react-simple-snackbar';


import PropTypes from 'prop-types';

import { ContainerRating, Stars } from './styles';
import  Text from '@components/atoms/Text';

const Rating = ({rating , ratingNumbers}) => {   

  const options = {
    position: 'top-center',
    style: {
      backgroundColor: '#4a31a1',
      color: '#ffffff',
      fontSize: '20px',
      textAlign: 'center',
    },
    closeStyle: {
      color: '#ffffff',
      fontSize: '16px',
    },
  }

  const [openSnackbar] = useSnackbar(options)

  const ratingChanged = (newRating) => {
    openSnackbar('Thanks for rating!')
  };


  return (
    <>
    <ContainerRating>
      <Stars>      
        <ReactStars
          count={rating}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          styles={{marginTop:'20px'}}
        />
        <Text text={`(${ratingNumbers})`} size="0.8rem" color="text" margin="0px 0px 0px 5px"/>
      </Stars>
    </ContainerRating>
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  ratingNumbers: PropTypes.string
};

export default Rating;
