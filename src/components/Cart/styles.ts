import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width:  100vw;
    height:  100vh;
    background-color: ${colors.black};
    opacity: 0.5;
`;

export const Cart = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 4;
    width: 360px;
    height: 100vh;
    background-color: ${colors.pink};
    color: ${colors.beige};
    padding: 32px 8px;
    overflow-y: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    & {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    h1 {
        margin-bottom: 16px;
    }

    @media(max-width: ${breakpoints.mobile}) {
        width: 200px;
    }
`;

export const CartContent = styled.section``;

export const CartItems = styled.ul`
    display: grid;
    gap: 16px;
    margin-bottom: 40px;
`;

export const CartItem = styled.li`
    background-color: ${colors.beige};
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 8px;
    padding: 8px;
    position: relative;

    @media(max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }

`;

export const ItemPreview = styled.div`
    min-height: 80px;

    img {
        object-fit: cover;
        height: 100%;
    }
`;

export const ItemInfo = styled.div`
    color: ${colors.pink};
    display: grid;
    align-content: space-between;
    gap: 8px;

    h3 {
        font-size: 18px;
    }
`;

export const DeleteItemBtn = styled.button`
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
`;

export const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    span {
        font-weight: 700;
    }
`;

export const CheckoutLink = styled.div`
    padding: 4px 0;
    background-color: ${colors.beige};
    color: ${colors.pink};
    text-align: center;
`;