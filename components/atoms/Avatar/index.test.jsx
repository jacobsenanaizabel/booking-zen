import React from 'react';
import { render } from "@testing-library/react";
import {Avatar} from '@components/atoms/index';

describe('Avatar tests', () => {

  const fakeUrl = "https://imgfake.com";

  it('should match snapshot with default Avatar', () => {
    
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Avatar with url', () => {
    
    const { asFragment } = render(<Avatar img={fakeUrl} />);
    expect(asFragment()).toMatchSnapshot();
  });

});