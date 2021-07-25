import React from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonStyled } from './styles';

const Button = ({text}) => {

  return (
    <Container>
      <ButtonStyled
        tabindex="0"
        role="button"
        onClick={()=>{}}
      >
       {text}
      </ButtonStyled>
    </Container>
  );
};

Button.propTypes = {
  errorHandler: PropTypes.func,
};

Button.defaultProps = {
  errorHandler: null,
};
export default Button;
