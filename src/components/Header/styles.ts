import styled from 'styled-components';
import { colors } from '../../styles';

export const HomeHeader = styled.header`
    padding: 64px 0;

    * {
        margin: 0 auto;
    }
`

export const Title = styled.h1`
    text-align: center;
    color: ${colors.pink};
    margin-top: 128px;
    max-width: 540px;
`

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 64px 0;

    * {
        color: ${colors.pink};
        font-size: 18px;
        
    }
`

export const CartButton = styled.button`
    justify-self: end;
`