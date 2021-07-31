import React from 'react';
import { render } from "@testing-library/react";
import {Price} from '@components/atoms/index';

describe('Info tests', () => {

  it('should match snapshot with default Price', () => {
    
    const { asFragment } = render(<Price />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Price with mount', () => {
    
    const { asFragment } = render(<Price mount="BRL 200" />);
    expect(asFragment()).toMatchSnapshot();
  });



});