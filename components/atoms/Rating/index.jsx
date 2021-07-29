import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useSnackbar } from 'react-simple-snackbar';


import PropTypes from 'prop-types';

import { ContainerRating, Stars } from './styles';
import  Text from '@components/atoms/Text';

export const options = {
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
};


const Rating = ({rating , ratingNumbers}) => {   


  const [openSnackbar] = useSnackbar(options)
  const [values, setValue] = useState(rating);

  const ratingChanged = (newRating) => {
    setValue(newRating);
    openSnackbar('Thanks for rating!')
  };


  return (
    <>
    <ContainerRating>
      <Stars>      
        <ReactStars
          count={5}
          value={values}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          styles={{marginTop:'20px'}}
          a11y={true}
        />
        <Text text={`(${ratingNumbers})`} size="0.8rem" color="text" margin="0px 0px 0px 5px" />
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
