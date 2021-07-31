import React from 'react';
import { render, fireEvent  } from "@testing-library/react";
import {Button} from '@components/atoms/index';

describe('Button tests', () => {

  const fakeText = "OK";
  
  it('should match snapshot with default Button', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Avatar with url', () => {
    

    const { asFragment } = render(<Button text={fakeText} />);
    expect(asFragment()).toMatchSnapshot();
  });


    it('should call onClick function when click on Button', () => {
      const onClickMock = jest.fn();

      const { getByText } = render(
          <Button onClick={onClickMock} text={fakeText} />
      );

      fireEvent.click(getByText('OK'));

      expect(onClickMock).toHaveBeenCalled();
    });

    it('should not call onClick function when click on Button disabled', () => {
        const onClickMock = jest.fn();

        const { getByText } = render(
            <Button disabled onClick={onClickMock} text={fakeText} />
        );
  
        fireEvent.click(getByText('OK'));
  
        expect(onClickMock).not.toHaveBeenCalled();
      });

});