import React from 'react';
import { InputStyled } from './styles';

const Input = ({placeholder}) => {
  return (
    <>
      <InputStyled placeholder={placeholder} />
    </>
  );
}

Input.propTypes = {
};

Input.defaultProps = {
};

export default Input;


