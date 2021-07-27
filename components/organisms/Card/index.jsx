import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Rating, Text, Price, Description } from '../../atoms';

import {
  Container,
  About,
  Profile,
  TextStyled
} from './styles';

const Card = ({name, location, profession, price, rating, ratingNumbers, description}) => (
  <>
  <Container>
  <Profile>
    <Avatar/>
    <About>
        <TextStyled text={name} size="1.5rem" color="black"/>
        <Rating></Rating>
        <Price mount={price}/>
    </About>
  </Profile>
    <Description text={description}/>
  </Container>
  </>
);

Card.propTypes = {
};

Card.defaultProps = {
};

export default Card;
