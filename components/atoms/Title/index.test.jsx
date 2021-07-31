import React from 'react';
import { render } from "@testing-library/react";
import {Title} from '@components/atoms/index';

describe('Title tests', () => {

  const fakeText = "Testing text";

  it('should match snapshot with default Title', () => {

    const { asFragment } = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Title with text', () => {


    const { asFragment } = render(<Title text={fakeText} />);
    expect(asFragment()).toMatchSnapshot();
  });

});