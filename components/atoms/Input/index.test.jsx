import React from 'react';
import { render,  fireEvent, screen  } from "@testing-library/react";
import {Input} from '@components/atoms/index';

describe('Input tests', () => {

  const fakePlaceholder = "Find an expert by specialty or name";

  it('should match snapshot with default Input', () => {
    
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Input with placeholder', () => {
    
    const { asFragment } = render(<Input placeholder={fakePlaceholder} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const onChangeMock = jest.fn();
    render(
        <Input placeholder={fakePlaceholder} onChange={onChangeMock} data-testid="input" />
    );

    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 'foo' },
    });

    expect(onChangeMock).toHaveBeenCalled();
  });


});