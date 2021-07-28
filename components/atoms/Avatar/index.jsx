import React from 'react';
import PropTypes from 'prop-types';
import { ContainerAvatar, User } from './styles';

const Avatar = ({img}) => {

  return (
    <>
      <ContainerAvatar>
        <figure>
          <User src={img}/>
        </figure>
      </ContainerAvatar>
    </>
  );
};

Avatar.propTypes = {
  img: PropTypes.string,
};

export default Avatar;
