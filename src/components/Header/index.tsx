import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import * as S from './styles';

function Header() {
    const path = useLocation().pathname;

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
                        <S.CartButton>0 produto(s) no carrinho</S.CartButton>
                    </S.Header>
                }
            </div>
            
            {path !== '/' ?
                <S.MenuMobile>
                    <Link to='/'>Restaurantes</Link>
                    <S.CartButton>0 produto(s) no carrinho</S.CartButton>
                </S.MenuMobile>
            :
                <></>
            }
        </>
    );
}

export default Header;