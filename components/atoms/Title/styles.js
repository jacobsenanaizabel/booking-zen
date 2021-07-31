import styled from 'styled-components';
import { colors, media } from '@styles/index';

export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 2.3rem;
    font-family: Fira Sans,sans-serif;
    color: ${colors.white}
`

export const ContainerTitle = styled.div`
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 89vh;

       
    ${media.xs`
        margin-bottom: 30px;
    `}

`