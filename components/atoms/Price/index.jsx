import React from 'react';
import PropTypes from 'prop-types';
import { ContainerPrice } from './styles';
import { Text } from '../index';


const Price = ({mount}) => {
  return (
    <>
    <ContainerPrice>
      <Text color="text" text={mount} size="1.2rem"></Text><Text color="text" text=" / 50 minutos" size="1rem"/>
    </ContainerPrice> 
    </>
  );
};

Price.propTypes = {
  errorHandler: PropTypes.func,
};

Price.defaultProps = {
  errorHandler: null,
};
export default Price;
