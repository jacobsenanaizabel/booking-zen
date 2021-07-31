import React from 'react';
import { render } from "@testing-library/react";
import {Description} from '@components/atoms/index';

describe('Description tests', () => {

  const fakeText = "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  it('should match snapshot with default Description', () => {

    const { asFragment } = render(<Description />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Description with text', () => {


    const { asFragment } = render(<Description text={fakeText} />);
    expect(asFragment()).toMatchSnapshot();
  });

});