import styled from 'styled-components';
import { colors } from '../../../styles';

export const Text = styled.p`
    display:grid;
    font-size:  ${(props) => (props.size ? props.size : '2rem')};
    font-family: Fira Sans,sans-serif;
    color:  ${(props) => (props.color ? props.color : colors.white)};
    font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
    margin: 20px 0px 0px 0px;
`