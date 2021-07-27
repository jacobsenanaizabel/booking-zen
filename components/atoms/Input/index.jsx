import React from 'react';
import { InputStyled } from './styles';

const Input = ({placeholder, onChange}) => {
  return (
    <>
      <InputStyled placeholder={placeholder} onChange={onChange}/>
    </>
  );
}

Input.propTypes = {
};

Input.defaultProps = {
};

export default Input;


