import styled from 'styled-components';
import { media } from '@styles/index';

import { Text } from '@components/atoms';

export const Container = styled.div`
    display: flex;
    background: #f7f0ff;
    flex-direction: row;
  
    margin: 2rem 0px 2rem 0px;
    padding-bottom: 20px;
    width: 100%;

    
    ${media.xs`
        flex-direction: column;
    `}
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
 
    width: 90%;
    margin-right: 0.7rem;

    ${media.xs`
        width: 100%;
        flex-direction: column;
        
        margin: 0px !important;
        text-align:center;
    `}
}
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    width: 55%;

    
    ${media.xs`
        width: 100%;
    `}
}
`

export const TextStyled = styled(Text)`
    margin-top: 2rem !important;
`