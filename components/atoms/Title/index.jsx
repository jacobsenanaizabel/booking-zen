import React from 'react';
import PropTypes from 'prop-types';

import {
  Heading, 
  ContainerTitle
} from './styles';

const Title = ({text}) => {
  return (
    <>
    <ContainerTitle>
        <Heading>{text}</Heading>
    </ContainerTitle>
    </>
  );
};

Title.propTypes = {
  text: PropTypes.string
};


export default Title;
