import React from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonStyled } from './styles';

const Button = ({text, ...other}) => {

  return (
    <Container>
      <ButtonStyled
        tabindex="0"
        role="button"
        {...other}
      >
       {text}
      </ButtonStyled>
    </Container>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'OK'
};
export default Button;
