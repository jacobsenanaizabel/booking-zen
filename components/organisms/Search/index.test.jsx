import React from 'react';
import { render, fireEvent, screen  } from "@testing-library/react";
import {Search} from '@components/organisms/index';

describe('Search tests', () => {
  it('should match snapshot with default Search', () => {
    
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with default Search with searchFreelance', () => {

    const props = {
        img: 'http:img.com',
        name: 'test',
        location: 'now',
        rating: 5,
        ratingNumbers: '2 comments',
        price: 100,
        profession: 'coach'
    }
    const { asFragment } = render(<Search {...props}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should change value in input', () => {

    const setSearch = jest.fn(() => {})

    const { queryByPlaceholderText } = render(<Search onChange={setSearch}/>)

    const searchInput = queryByPlaceholderText('Find an expert by specialty or name')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
    
  });

  it('should call search freelancers', () => {

    const setSearch = jest.fn(() => {})
    const mockSearch = jest.fn(()=>{})

    render(<Search onChange={setSearch} searchFreelancer={mockSearch} />)

    fireEvent.change(screen.getByTestId('input'), { target: { value: 'Liz' } })
    fireEvent.click(screen.getByText('Search'))

    expect(mockSearch).toBeCalled()
    expect(mockSearch).toBeCalledTimes(1)
    
  });

  

});