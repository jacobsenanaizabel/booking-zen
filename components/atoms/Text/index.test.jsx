import React from 'react';
import { render } from "@testing-library/react";
import {Text} from '@components/atoms/index';

describe('Text tests', () => {

  const fakeText = "Testing text";

  it('should match snapshot with default Text', () => {

    const { asFragment } = render(<Text />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Text with size', () => {

    const { asFragment } = render(<Text size="3rem" text={fakeText} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Text with color', () => {
    const { container } = render(
        <>
          <Text color="text" text={fakeText}/>
          <Text color="violet" text={fakeText}/>
          <Text color="purple" text={fakeText}/>
          <Text color="black" text={fakeText}/>
          <Text color="border" text={fakeText}/>
        </>
      );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with default Text with font-weight', () => {
    const { asFragment } = render(
        <>
          <Text weight="600" text={fakeText}/>
        </>
      );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Text with margin', () => {
    const { asFragment } = render(
        <>
          <Text margin="0px" text={fakeText}/>
        </>
      );
    expect(asFragment()).toMatchSnapshot();
  });

});