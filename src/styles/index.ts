import { createGlobalStyle } from 'styled-components';

export const colors = {
    white: '#FFFFFF',
    lightBeige: '#FFF8F2',
    beige: '#FFEBD9',
    pink: '#E66767',
    gray: '#4B4B4B',
    black: '#000000',
    transparentBlack: '#00000099',
    green: '#13ae13',
    red: '#b41515'
}

export const breakpoints = {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-weight: 700;
    }

    body {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        background-color: ${colors.lightBeige};
        color: ${colors.black};
        overflow-x: hidden;
    }

    a {
        color: inherit;
    }

    p, span {
        font-weight: 400;
    }

    img {
        width: 100%;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: inherit;
    }

    button:disabled {
        cursor: default;
    }

    .container {
        padding-left: 40px;
        padding-right: 40px;

        @media(max-width: ${breakpoints.mobile}) {
            padding-left: 16px;
            padding-right: 16px;
        }
    }

    .container>* {
        max-width: ${breakpoints.desktop};
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .bg-header {
        background-image: url(${require('../assets/background.jpg')});
        background-position: center;
        background-repeat: norepeat;
        background-size: cover;
    }

    .bg-beige {
        background-color: ${colors.beige};
    }
`;