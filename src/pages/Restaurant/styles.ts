import styled from 'styled-components';
import { colors } from 'styles';

interface ImageProps {
    imageSrc: string;
}

const heroStyle = `
    position: absolute;
    width: 100vw;
    height: 280px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
`

export const Restaurant = styled.div`
    position: relative;
    padding-top: 280px;

    .overlay:after {
        background-color: ${colors.black};
        opacity: 0.4;
        max-width: 100vw !important;
        margin: 0;
        ${heroStyle}
        display: block;
        content: '';
    
    }
`;

export const Hero = styled.section<ImageProps>`
    background-image: url('${((props) => props.imageSrc)}');
    background-size: cover;
    background-position: center;
    display: grid;
    align-content: space-between;
    padding: 32px 40px;
    ${heroStyle}

    ul, h1 {
        z-index: 1;
        font-size: 32px;
    }
    h1 {
        font-weight: 900;
    }
    ul li {
        font-weight: 100;        
    }
    ul {
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
    }
`;

export const Dishes = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin: 56px 0 112px;
`;