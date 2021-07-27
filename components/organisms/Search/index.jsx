import React from 'react';
import { Button, Input } from '@components/atoms';

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


export default Search;
