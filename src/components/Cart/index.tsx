import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from 'store';
import { toggleCart } from 'store/reducers/cartToggle';
import binIcon from 'assets/icons/bin.svg';
import { removeFromCart } from 'store/reducers/cart';
import { Link } from 'react-router-dom';

export function Cart() {
    
    const { items: cartItems, totalPrice } = useSelector((state: RootReducer) => state.cart);
    const isCartOpened = useSelector((state: RootReducer) => state.cartToggle);

    const dispatch = useDispatch();

    if(!isCartOpened) {
        return <></>
    }
    return (
        <>
            <S.Overlay onClick={() => dispatch(toggleCart(false))}/>
            <S.Cart>
                <h1>Carrinho</h1>
                {cartItems.length > 0 ?
                    <S.CartContent>
                        <S.CartItems>
                            {cartItems.map((item) => (
                                <S.CartItem key={item.id}>
                                    <S.ItemPreview>
                                        <img src={item.foto} alt="" />
                                    </S.ItemPreview>
                                    <S.ItemInfo>
                                        <h3>{item.nome}</h3>
                                        <span>Quantidade: {item.quantity}</span>
                                        <span>Total: R$ {(item.preco * item.quantity).toFixed(2)}</span>
                                    </S.ItemInfo>
                                    <S.DeleteItemBtn type='button' onClick={() => dispatch(removeFromCart(item.id))}>
                                        <img src={binIcon} alt="delete" />
                                    </S.DeleteItemBtn>
                                </S.CartItem>
                            ))}
                        </S.CartItems>
                        <S.TotalPrice>
                            <span>Valor total:</span>
                            <span>R$ {(totalPrice).toFixed(2)}</span>
                        </S.TotalPrice>
                        <Link to='/'>
                            <S.CheckoutLink>Continuar com a entrega</S.CheckoutLink>
                        </Link>
                    </S.CartContent>
                :
                    <h2>Não há nenhum item no carrinho.</h2>
                }
            </S.Cart>
        </>
    );
}

export default Cart;