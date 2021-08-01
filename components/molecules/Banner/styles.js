import styled from 'styled-components';
import Image from 'next/image'
import {  media, colors } from '@styles/index';

export const Container = styled.section`
    display:grid;
    height: 100%;
    grid-template-columns: 2fr 1fr;
    background-color: ${colors.violet};

    ${media.xs`
        background-image: none;
        background-color: ${colors.violet};
        grid-template-columns: 1fr;
    `}

`

export const ImgBanner =  styled(Image)`
    display:grid;
    justify-content: center;
    align-content: center;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    background-color: ${colors.violet};

    ${media.xs`
        background-image: none;
        background-color: ${colors.violet};
    `}

`


export const ContainerContent =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

`

export const ContainerImage =  styled.div`
    display:grid;
    width: 100%;
    height: 90%;
    
    ${media.xs`
        display:none;
    `}
`