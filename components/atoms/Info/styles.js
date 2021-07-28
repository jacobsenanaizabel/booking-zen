import styled from 'styled-components';
import { media } from '@styles/index';

export const ContainerInfo = styled.div``;

export const Info = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    grid-gap: 12px;

    
    ${media.xs`
        flex-direction: column;
        grid-gap: 0px;
    `}
    ${media.md`
        flex-direction: column;
        grid-gap: 0px;
    `}
`