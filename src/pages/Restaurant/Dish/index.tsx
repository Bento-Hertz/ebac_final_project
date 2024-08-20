import { IDish } from 'interfaces/IDish';
import * as S from './styles';

interface Props {
    dish: IDish; 
}

function Dish(props: Props) {
    const { name, introduction, image } = props.dish;

    return (
        <S.Dish>
            <S.Image src={image} />
            <S.Title>{name}</S.Title>
            <S.Introduction>{introduction}</S.Introduction>
            <S.MoreDetails type='button'>Mais detalhes</S.MoreDetails>
        </S.Dish>
    );
}

export default Dish;