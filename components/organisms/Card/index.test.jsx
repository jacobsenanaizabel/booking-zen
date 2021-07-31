import React from 'react';
import { render } from "@testing-library/react";
import {Card} from '@components/organisms/index';

describe('Card tests', () => {

  it('should match snapshot with default Card', () => {
    
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Card with searchFreelance', () => {
  
    const props = {
        img: 'http:img.com',
        name: 'test',
        location: 'now',
        rating: 5,
        ratingNumbers: '2 comments',
        price: 100,
        profession: 'coach'
    }
    const { asFragment } = render(<Card {...props}/>);
    expect(asFragment()).toMatchSnapshot();
  });

});