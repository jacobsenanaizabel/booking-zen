import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Rating, Text, Price, Description } from '../../atoms';

import {
  Container,
  About,
  Profile,
  TextStyled
} from './styles';

const Card = () => (
  <>
  <Container>
  <Profile>
    <Avatar/>
    <About>
        <TextStyled text="Liz Feré" size="1.5rem" color="black"/>
        <Rating></Rating>
        <Price mount="R$ 160"/>
    </About>
  </Profile>
    <Description text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
  </Container>
  </>
);

Card.propTypes = {
};

Card.defaultProps = {
};

export default Card;