import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@components/atoms';
import { Search } from '@components/organisms';

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


export default Banner;
