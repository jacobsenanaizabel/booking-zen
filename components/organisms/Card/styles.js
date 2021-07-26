import styled from 'styled-components';
import { Text } from '../../atoms';


export const Container = styled.div`
    display: flex;
    height: 60vh;
    width: 100%;
    margin: 2rem 0px 2rem 0px;
    background: #f7f0ff;
    flex-direction: column;
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
}
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
}
`

export const TextStyled = styled(Text)`
    margin-top: 2rem !important;
`