import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

interface ImageProps {
    src: string;
}

const heroStyle = `
    position: absolute;
    width: 100vw;
    height: 280px;
    top: 185.5px;
    left: 50%;
    transform: translate(-50%);

    @media(max-width: ${breakpoints.tablet}) {
        top: 290.3px;
    }
`

export const Restaurant = styled.div`
    padding-top: 280px;
    color: ${colors.white};
`;

export const Hero = styled.section<ImageProps>`
    background-image: url('${((props) => props.src)}');
    background-size: cover;
    background-position: center;
    display: grid;
    align-content: space-between;
    padding: 32px 40px;
    z-index: 1;
    ${heroStyle}

    span, h1 {
        z-index: 3;
        font-size: 32px;
    }
    span {
        font-weight: 100;
        text-transform: capitalize;
    }
    h1 {
        font-weight: 900;
    }
`;

export const Overlay = styled.div`
    ${heroStyle}
    max-width: none !important;
    background-color: ${colors.black};
    opacity: 0.4;
    top: 0;
    z-index: 2;

    @media(max-width: ${breakpoints.tablet}) {
        top: 0;
    }
`;

export const Dishes = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin: 56px 0 112px;
    
    @media(max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;