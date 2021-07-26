import React from 'react';
import PropTypes from 'prop-types';

import {
  Heading
} from './styles';

const Title = ({text}) => {
  return (
    <>
        <Heading>{text}</Heading>
    </>
  );
};

Title.propTypes = {
  text: PropTypes.string
};


export default Title;
