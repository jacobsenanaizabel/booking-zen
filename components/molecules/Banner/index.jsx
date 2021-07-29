import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@components/atoms';
import { Search } from '@components/organisms';
import banner from '@public/images/banner.png'

import {
  Container,
  ImgBanner,
  ContainerImage,
  ContainerContent
} from './styles';

const Banner = ({searchFreelancer}) => (
  <>
    <Container>
      <ContainerContent>
        <Title text="Find your expert &#127881;" />
        <Search searchFreelancer={searchFreelancer}/>
      </ContainerContent>
      <ContainerImage>
        <ImgBanner 
          alt="Banner"
          quality={100}
          layout='responsive'
          src={banner}/>
      </ContainerImage>
    </Container>
  </>
);

Banner.propTypes = {
  searchFreelancer: PropTypes.func
};


export default Banner;
