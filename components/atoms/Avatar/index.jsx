import React from 'react';
import PropTypes from 'prop-types';
import { ContainerAvatar, User } from './styles';

const Avatar = () => {

  return (
    <>
      <ContainerAvatar>
        <figure>
          <User src="https://zenklub.com.br/static/professionals/5ec432ab26f9535a51a26507/445fdbfce83fd6de0d7f057bc52af9da23959f86-180x180.png"/>
        </figure>
      </ContainerAvatar>
    </>
  );
};

Avatar.propTypes = {
  errorHandler: PropTypes.func,
};

Avatar.defaultProps = {
  errorHandler: null,
};
export default Avatar;
