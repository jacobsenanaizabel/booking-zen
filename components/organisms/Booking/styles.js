import styled from 'styled-components';
import { colors } from '@styles/index';

export const Heading = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 2.3rem;
    font-family: Fira Sans,sans-serif;
    color: ${colors.white}
`

export const ContainerCalendar = styled.div`
    background: #f7f7f7;
    margin: 1.5rem;
    width: 30%;

    .fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-button-primary{
        background: ${colors.text};
        width: 54px;
        height: 38px;
        border: none;
    }

    .fc-toolbar-chunk {
        margin: 5px;
    }

    .fc-scrollgrid-sync-inner {
        font-size: 14px;
        font-weight: 300;
    }

    a.fc-col-header-cell-cushion {
        color: ${colors.text};
        text-decoration: none;
    }

`