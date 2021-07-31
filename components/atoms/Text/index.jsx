import React from 'react';
import PropTypes from 'prop-types';

import {
    Text as TextStyled
} from './styles';


const Title = ({text, size, color, weight, margin}) => {
  return (
    <>
        <TextStyled size={size} color={color} weight={weight} margin={margin} >{text}</TextStyled>
    </>
  );
};

Title.propTypes = {
  text: PropTypes.any
};


export default Title;