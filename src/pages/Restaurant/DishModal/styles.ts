import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.transparentBlack};
    max-width: 100vw !important;
`;

export const Modal = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.pink};
    color: ${colors.white};
    padding: 32px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 24px;
    position: fixed;
    max-width: ${breakpoints.desktop};
    max-height: 100vh;
    z-index: 3;

    @media(max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 280px 1fr;
        overflow-y: scroll;

        img {
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const Preview = styled.div`

    @media(max-width: ${breakpoints.tablet}) {
        margin-top: 24px;
    }
`;

export const Container = styled.div`
    display: grid;
    gap: 16px;
    align-items: start;
    align-self: start;

    h3 {
        font-size: 18px;
        font-weight: 900;
    }

    p {
        margin-bottom: 8px;
    }
`;

export const AddToCart = styled.button`
    background-color: ${colors.lightBeige};
    color: ${colors.pink};
    padding: 4px 6px;
    justify-self: start;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 16px;
    height: 16px;
`