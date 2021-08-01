import React from 'react';
import { InputStyled } from './styles';

const Input = ({...other}) => {
  return (
    <>
      <InputStyled {...other} data-testid="input"/>
    </>
  );
}

Input.propTypes = {
};

Input.defaultProps = {
};

export default Input;


