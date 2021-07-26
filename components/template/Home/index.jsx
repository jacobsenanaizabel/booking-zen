import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Banner } from '../../molecules';
import { Card } from '../../organisms';

import { GroupCards } from './styles';
function Home(props) {

  return (
    <>
      <Banner/>
      <GroupCards>
        <Card/>
      </GroupCards>
    </>
  );
}

Home.propTypes = {
};

export default Home;
