import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from 'store';
import { removeFromCart, updateQuantityOfProducts } from 'store/reducers/cart';
import binIcon from 'assets/icons/bin.svg';
import Button from 'components/Button';
import { changeCurrentSidebarSection } from 'store/reducers/currentSidebarSection';
import { useEffect, useState } from 'react';
import { IDish } from 'interfaces/IDish';

interface ICartDish {
    dish: IDish;
    quantity: number;
}

//identifica e elimina produtos repetidos no array de produtos do 
//carrinho para serem melhor visualizados na interface do usuário 
const convertIDishListToICartDishList = (products: IDish[]): ICartDish[] => {
    let listOfUniqueDishIds: number[] = [];
    let tempCartItems: ICartDish[] = [];

    products.forEach((product) => {
        const IdAlreadyIncluded = listOfUniqueDishIds.includes(product.id);
        if(IdAlreadyIncluded) {
            tempCartItems.map((item) => {
                if(item.dish.id === product.id)
                    return {...item, quantity: item.quantity++};
                return item;
            })
        } 
        else {
            listOfUniqueDishIds.push(product.id);
            tempCartItems.push({ dish: product, quantity: 1 })
        }
    });

    return tempCartItems;
}

function Cart() {
    const dispatch = useDispatch();

    const { items: products, totalPrice } = useSelector((state: RootReducer) => state.cart);

    const [cartItems, setCartItems] = useState<ICartDish[]>([]);

    useEffect(() => {
        const tempCartItems: ICartDish[] = convertIDishListToICartDishList(products);

        setCartItems(tempCartItems);
        dispatch(updateQuantityOfProducts(tempCartItems.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <>
            <h2>Carrinho</h2>
            {cartItems.length > 0 ?
                <S.CartContent>
                    <S.CartItems>
                        {cartItems.map((item) => (
                            <S.CartItem key={item.dish.id}>
                                <S.ItemPreview>
                                    <img src={item.dish.foto} alt="" />
                                </S.ItemPreview>
                                <S.ItemInfo>
                                    <h3>{item.dish.nome}</h3>
                                    <span>Quantidade: {item.quantity}</span>
                                    <span>Total: R$ {(item.dish.preco * item.quantity).toFixed(2)}</span>
                                </S.ItemInfo>
                                <S.DeleteItemBtn type='button' onClick={() => dispatch(removeFromCart(item.dish.id))}>
                                    <img src={binIcon} alt="delete" />
                                </S.DeleteItemBtn>
                            </S.CartItem>
                        ))}
                    </S.CartItems>
                    <S.TotalPrice>
                        <span>Valor total:</span>
                        <span>R$ {(totalPrice).toFixed(2)}</span>
                    </S.TotalPrice>
                    <Button type='button' onClickEvent={() => dispatch(changeCurrentSidebarSection('checkout'))}>Continuar com a entrega</Button>
                </S.CartContent>
            :
                <h2>Não há nenhum item no carrinho.</h2>
            }
        </>
    );
}

export default Cart;