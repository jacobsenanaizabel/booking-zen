import styled from 'styled-components';
import {  media, colors } from '../../../styles';


export const Container = styled.section`
    display:grid;
    justify-content: center;
    align-content: center;
    background-image: url('https://media.istockphoto.com/vectors/video-call-and-talking-between-sad-girl-and-female-psychologist-by-vector-id1257147475?k=6&m=1257147475&s=612x612&w=0&h=CjumGNdywvNSksOkyr15i_YWWYKGNQBENx4H77U5tsI=');
    
    height: 50vh;
    
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    background-color: ${colors.violet};

    ${media.xs`
        background-image: none;
        background-color: ${colors.violet};
    `}

`