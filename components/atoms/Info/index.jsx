import React from 'react';

import PropTypes from 'prop-types';
import { Text } from '../index';
import { Info as About, ContainerInfo } from './styles';

const Info = ({location, profession}) => {   
  return (
    <>
    <ContainerInfo>
    <About>
      <Text text={profession} size="1rem" color="black" weight="700"/> 
      <Text text={'- '+location} size="1rem" color="purple" weight="700"/>
    </About>
  </ContainerInfo>
    </>
  );
};


Info.propTypes = {
  location: PropTypes.string,
  profession: PropTypes.string
};

export default Info;
