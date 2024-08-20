import styled from 'styled-components';
import { colors } from '../../../styles';

interface imageProps {
    src: string;
}

export const Restaurant = styled.article`
    color: ${colors.pink};
    background-color: ${colors.white};
`;

export const Image = styled.div<imageProps>`
    padding-top: 50%;
    background-image: url(${((props) => props.src)});
    background-size: cover;
    background-position: center;
    position: relative;

    ul {
        position: absolute;
        display: flex;
        gap: 8px;
        top: 16px;
        right: 16px;
        color: ${colors.lightBeige};

        li {
            background-color: ${colors.pink};
            padding: 6px 4px;
        }
    }
`;

export const Container = styled.div`
    padding: 8px;
    display: grid;
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

export const P = styled.p``;