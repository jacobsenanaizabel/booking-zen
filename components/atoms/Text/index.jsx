import React from 'react';
import PropTypes from 'prop-types';

import {
    Text as TextStyled
} from './styles';


const Title = ({text, size, color, weight}) => {
  return (
    <>
        <TextStyled size={size} color={color} weight={weight} >{text}</TextStyled>
    </>
  );
};

Title.propTypes = {
  text: PropTypes.string
};


export default Title;