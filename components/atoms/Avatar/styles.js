import styled from 'styled-components';
import { media } from '@styles/index';


export const ContainerAvatar = styled.div`
  width: 15%;
  margin-right: 5%;
  ${media.xs`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  `}
`;

export const User = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
  margin: 1.7rem;

`
