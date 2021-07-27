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
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'OK'
};
export default Button;
