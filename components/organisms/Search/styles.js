import styled from 'styled-components';
import { media } from '@styles/index';

export const Container = styled.div`
    display: flex;
    width: 89vh;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    align-items: center;

           
    ${media.xs`
        width: 100%;
    `}
`