import styled from 'styled-components';
 import { media, colors } from '@styles/index';

export const ContainerPrice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    ${media.xs`
        flex-direction: column;
        align-items: center;
    `}
    ${media.md`
        flex-direction: column;
        align-items: center;

    `}
`;
