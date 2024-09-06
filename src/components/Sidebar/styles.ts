import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

interface Props {
    open: boolean;
};

export const Overlay = styled.div<Props>`
    ${(props) => props.open === false ? 
        'display: none;'
    : '' }
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width:  100vw;
    height:  100vh;
    background-color: ${colors.black};
    opacity: 0.5;
`;

export const Sidebar = styled.aside<Props>`
    position: fixed;
    top: 0;
    right: ${(props) => props.open ? '0' : '-360px'};
    z-index: 4;
    width: 360px;
    height: 100vh;
    background-color: ${colors.pink};
    color: ${colors.beige};
    padding: 32px 8px;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: 0.5s;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    & {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    h2 {
        margin-bottom: 16px;
        font-size: 16px;
    }

    @media(max-width: ${breakpoints.mobile}) {
        width: 80vw;
        max-width: 300px;
    }
`;