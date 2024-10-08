import styled from 'styled-components';
import { colors } from '../../../styles';

export const Restaurant = styled.article`
    color: ${colors.pink};
    background-color: ${colors.white};
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const ImageContainer = styled.div`
    height: 218px;
    position: relative;
`;

export const Image = styled.img`
    position: relative;
    object-fit: cover;
    height: 100%;
    z-index: 1;
`;

export const Category = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;
    color: ${colors.lightBeige};
    background-color: ${colors.pink};
    padding: 6px 4px;
    z-index: 1;
`;

export const Container = styled.div`
    padding: 8px;
    display: grid;
    align-content: space-between;
    gap: 16px;
    border: 1px solid ${colors.pink};
    border-top: none;

    a {
        justify-self: start;
        background-color: ${colors.pink};
        color: ${colors.lightBeige};
        padding: 4px 6px;
        
    }
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    * {
        font-size: 18px;
        
    }
`;

export const Rate = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    div {
        width: 21px;
    }
`;