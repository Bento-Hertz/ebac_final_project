import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

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

    @media(max-width: ${breakpoints.tablet}) {
        justify-content: center;
        grid-template-columns: auto;

        a, button {
            display:none;
        }
    }
`

export const CartButton = styled.button`
    justify-self: end;
`

export const MenuMobile = styled.nav`
    display: none;

    @media(max-width: ${breakpoints.tablet}) {
        background-color: ${colors.lightBeige};
        color: ${colors.pink};
        width: 100%;
        padding: 24px 40px;
        display: grid;
        justify-content: start;
        gap: 24px;
    }
`