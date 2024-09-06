import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'store/reducers/sidebarToggle';
import { RootReducer } from 'store';
import { changeCurrentSidebarSection } from 'store/reducers/currentSidebarSection';

function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();

    const numberOfCartItems = useSelector((state: RootReducer) => state.cart.quantity);

    const onClickingCartButton = () => {
        dispatch(changeCurrentSidebarSection('cart'));
        dispatch(toggleSidebar(true));
    }

    return (
        <>
            <div className='container bg-header'>
                {path === '/' ?
                    <S.HomeHeader>
                        <Logo />
                        <S.Title>Viva experiências gastronônimas no conforto da sua casa</S.Title>
                    </S.HomeHeader>
                :
                    <S.Header>
                        <Link to='/'>Restaurantes</Link>
                        <Logo />
                        <S.CartButton onClick={onClickingCartButton}>{numberOfCartItems} produto(s) no carrinho</S.CartButton>
                    </S.Header>
                }
            </div>
            
            {path !== '/' ?
                <div className='container'>
                    <S.MenuMobile>
                        <Link to='/'>Restaurantes</Link>
                        <S.CartButton onClick={onClickingCartButton}>{numberOfCartItems} produto(s) no carrinho</S.CartButton>
                    </S.MenuMobile>
                </div>
            :
                <></>
            }
        </>
    );
}

export default Header;