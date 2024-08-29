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
    height: 167px;

    img {
        object-fit: cover;
        height: 100%;
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