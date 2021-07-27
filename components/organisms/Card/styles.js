import styled from 'styled-components';
import { Text } from '../../atoms';


export const Container = styled.div`
    display: flex;
    background: #f7f0ff;
    flex-direction: column;
    height: 100%;
    margin: 2rem 0px 2rem 0px;
    padding-bottom: 20px;
    width: 100%;
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
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