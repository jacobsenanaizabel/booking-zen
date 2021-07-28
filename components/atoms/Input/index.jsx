import React from 'react';
import { InputStyled } from './styles';

const Input = ({...other}) => {
  return (
    <>
      <InputStyled {...other}/>
    </>
  );
}

Input.propTypes = {
};

Input.defaultProps = {
};

export default Input;


