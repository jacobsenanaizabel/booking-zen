import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Price, Description, Info } from '@components/atoms';
import { Booking } from '@components/organisms';
import  Rating  from '@components/atoms/Rating';

import {
  Container,
  About,
  Profile,
  TextStyled
} from './styles';

const Card = ({name, img, location, profession, price, rating, ratingNumbers, description}) => (
  <>
  <Container>
    <Avatar img={img}/>
    <Profile>
      <About>
          <TextStyled text={name} size="1.5rem" color="black"/>
          <Info location={location} profession={profession} />
          <Rating rating={rating} ratingNumbers={ratingNumbers}></Rating>
          <Price mount={price}/>
          <Description text={description}/>
      </About>
      
    </Profile>
    <Booking />
  </Container>
  </>
);

Card.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  profession: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  ratingNumbers: PropTypes.string,
  img: PropTypes.string
};

Card.defaultProps = {
  name: '',
  location: '',
  profession: '',
  price: '0',
  rating: 1,
  ratingNumbers: '0',
  img: '/'
};

export default Card;
