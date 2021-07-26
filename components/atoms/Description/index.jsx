import React from 'react';
import PropTypes from 'prop-types';
import { ContainerDescription } from './styles';
import {Text} from '../index'

const Description = ({text}) => {

  return (
    <>
    <ContainerDescription>
      <Text text={text} color="text" size="1rem"/>
    </ContainerDescription>
    </>
  );
};

Description.propTypes = {
  errorHandler: PropTypes.func,
};

Description.defaultProps = {
  errorHandler: null,
};
export default Description;
