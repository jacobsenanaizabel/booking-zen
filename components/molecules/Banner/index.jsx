import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../atoms';
import { Search } from '../../organisms';

import {
  Container
} from './styles';

const Banner = () => (
  <>
    <Container>
      <Title text="Encontre seu especialista"/>
      <div>
        <Search/>
      </div>
    </Container>
  </>
);

Banner.propTypes = {
};

Banner.defaultProps = {
};

export default Banner;
