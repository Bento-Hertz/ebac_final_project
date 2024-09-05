import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { RootReducer } from 'store';
import { toggleSidebar } from 'store/reducers/sidebarToggle';
import Cart from './Cart';
import Checkout from './Checkout';

function Sidebar() {
    const isSidebarOpen = useSelector((state: RootReducer) => state.sidebarToggle);
    const currentSidebarSection = useSelector((state: RootReducer) => state.currentSidebarSection);

    const dispatch = useDispatch();

    return (
        <>
            <S.Overlay open={isSidebarOpen} onClick={() => dispatch(toggleSidebar(false))}/>
            <S.Sidebar open={isSidebarOpen}>
                {currentSidebarSection === 'cart' ? 
                    <Cart />
                : 
                    <Checkout />
                }
            </S.Sidebar>
        </>
    );
}

export default Sidebar;