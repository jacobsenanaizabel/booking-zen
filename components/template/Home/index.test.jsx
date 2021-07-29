import React from 'react';
import TestRenderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import { MockedProvider } from '@apollo/client/testing';
import {Home, GET_PROFESSIONALS} from './index';


describe('Home tests', () => {

  const mocks = [
    {
      request: {
        query: GET_PROFESSIONALS
      },
      result: {
        data: {
          freelancers: 
            {
              "id": 21908,
              "name": "Liz Fere",
              "img": "https://zenklub.com.br/static/professionals/5ec432ab26f9535a51a26507/445fdbfce83fd6de0d7f057bc52af9da23959f86-180x180.png",
              "location": "Brazil, SP",
              "profession": "Psychologist",
              "price": "100 USD",
              "rating": 4,
              "ratingNumbers": "10 assessments",
              "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
          },
        },
      },
    },
  ];

  const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: jest.fn().mockReturnValue([])
}));

  it('should run Home without error', () => {
    
    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    );
  
    const tree = component.toJSON();
    expect(tree.children).toContain('Loading...');

  });

  // it('should run Home and get sucess', async() => {
  
  //   // const component = TestRenderer.create(
  //   //   <MockedProvider mocks={mocks} addTypename={false}>
  //   //     <Home />
  //   //   </MockedProvider>,
  //   // );
  
       
  //   await act(async () => {
  //     TestRenderer.create(
  //       <MockedProvider mocks={mocks} addTypename={false}>
  //         <Home />
  //       </MockedProvider>,
  //     );
  //   });

  //   await new Promise(resolve => setTimeout(resolve, 0));

  //   const tree = component.toJSON();
  //   expect(tree.children).toContain('Liz');
  //   const div = component.root.findByType('div');
  //   expect(div.children.join('')).toContain('Liz');

 
  // });


});