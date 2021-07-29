import React from 'react';
import { render } from "@testing-library/react";
import {Info} from '@components/atoms/index';

describe('Info tests', () => {

  it('should match snapshot with default Info', () => {
    
    const { asFragment } = render(<Info />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Input with location', () => {
    
    const { asFragment } = render(<Info location="Brazil" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Input with profession', () => {
    
    const { asFragment } = render(<Info profession="coach" />);
    expect(asFragment()).toMatchSnapshot();
  });


  it('should match snapshot with default Input with location and profession', () => {
    
    const { asFragment } = render(<Info  location="Brazil" profession="coach" />);
    expect(asFragment()).toMatchSnapshot();
  });

});