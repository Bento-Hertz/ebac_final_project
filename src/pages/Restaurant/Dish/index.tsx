import { IDish } from 'interfaces/IDish';
import * as S from './styles';

interface Props {
    dish: IDish; 
    openModal: (value: number) => void;
}

function Dish(props: Props) {
    const { foto, nome, descricao, id } = props.dish;
    const { openModal } = props;

    return (
        <S.Dish>
            <S.Preview>
                <img src={foto} alt="" />
            </S.Preview>
            <S.Title>{nome}</S.Title>
            <S.Introduction>{descricao}</S.Introduction>
            <S.MoreDetails type='button' onClick={() => openModal(id)}>Mais detalhes</S.MoreDetails>
        </S.Dish>
    );
}

export default Dish;