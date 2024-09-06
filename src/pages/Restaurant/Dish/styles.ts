import styled from 'styled-components';
import { colors } from 'styles';

export const Dish = styled.article`
    display: grid;
    gap: 8px;
    padding: 8px;
    background-color: ${colors.pink};
    color: ${colors.lightBeige};
`;

export const Preview = styled.div`
    position: relative;
    height: 167px;

    img {
        position: relative;
        object-fit: cover;
        height: 100%;
        z-index: 1;
    }
`;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    text-align: start;
`;

export const Introduction = styled.p``;

export const MoreDetails = styled.button`
    padding: 4px 0;
    background-color: ${colors.lightBeige};
    color: ${colors.pink};
`;