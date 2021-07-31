import styled from 'styled-components';
import { media } from '@styles/index';

export const ContainerRating = styled.div``;


export const Stars = styled.div`
    display: flex;
    align-items: center;

    ${media.xs`
        flex-direction: column;
    `}
    ${media.md`
        flex-direction: column;
    `}
`
