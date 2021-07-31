import React from 'react';
import { render } from "@testing-library/react";
import {Banner} from '@components/molecules/index';

jest.mock('@public/images/banner.png', () => {
  return {
    default:  "/",
  }
});

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />
  },
}))

describe('Banner tests', () => {

  it('should match snapshot with default Banner', () => {
    
    const { asFragment } = render(<Banner />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Banner with searchFreelance', () => {
    
    const functionSearch = jest.fn();

    const { asFragment } = render(<Banner searchFreelancer={functionSearch}/>);
    expect(asFragment()).toMatchSnapshot();
  });

});