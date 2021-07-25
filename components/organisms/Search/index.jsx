import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../atoms';

import {
  Container
} from './styles';

const Search = () => (
  <>
      <Container>
        <Input placeholder="Encontre um especialista por motivo, especialidade ou nome"/>
        <Button text="Procurar"/>
      </Container>
  </>
);

Search.propTypes = {
};

Search.defaultProps = {
};

export default Search;
