import { IDish } from 'interfaces/IDish';
import * as S from './styles';
import closeIcon from 'assets/icons/close.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/reducers/cart';
import { updateStatusMessage } from 'store/reducers/statusMessage';
import { useState } from 'react';

interface Props {
    dish: IDish;
    closeModal: () => void;
}

function DishModal(props: Props) {
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const { foto, nome, descricao, porcao, preco } = props.dish;
    const { closeModal } = props;

    const dispatch = useDispatch();

    function onClickingAddToCartBtn() {
        setIsBtnDisabled(true);
        dispatch(addToCart(props.dish));
        dispatch(updateStatusMessage({type: 'success', message: 'Item adicionado ao carrinho', isActive: true}));

        //simulating time response
        setTimeout(() => {
            setIsBtnDisabled(false);
        }, 2000);
    }

    return (
        <>
            <S.ModalBackground onClick={closeModal} />  
            <S.Modal>
                <S.Preview>
                    <img src={foto} alt="" />
                </S.Preview>
                <S.Container>
                    <h3>{nome}</h3>
                    <p>{descricao}</p>
                    <span>Serve: {porcao}</span>
                    <S.AddToCart onClick={onClickingAddToCartBtn}  disabled={isBtnDisabled}>Adicionar ao carrinho - R${preco}</S.AddToCart>
                </S.Container>
                <S.CloseButton onClick={closeModal}>
                    <img src={closeIcon} alt="close" />
                </S.CloseButton>
            </S.Modal>
        </>
    );
}

export default DishModal;