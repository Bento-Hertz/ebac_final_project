import { IDish } from 'interfaces/IDish';
import * as S from './styles';
import closeIcon from 'assets/icons/close.svg';

interface Props {
    dish: IDish;
    closeModal: () => void;
}

function DishModal(props: Props) {
    const { foto, nome, descricao, porcao, preco } = props.dish;
    const { closeModal } = props;

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
                    <S.AddToCart>Adicionar ao carrinho - R${preco}</S.AddToCart>
                </S.Container>
                <S.CloseButton onClick={closeModal}>
                    <img src={closeIcon} alt="close" />
                </S.CloseButton>
            </S.Modal>
        </>
    );
}

export default DishModal;