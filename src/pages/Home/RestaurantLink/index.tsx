import { IRestaurant } from '../../../interfaces/IRestaurant';
import * as S from './styles';
import starIcon from '../../../assets/icons/star.svg';
import { Link } from 'react-router-dom';

interface Props {
    restaurant: IRestaurant;
}

function RestaurantLink(props: Props) {
    const { tipo, capa, titulo, avaliacao, descricao, id } = props.restaurant;

    return (
        <S.Restaurant>
            <Link to={`/restaurantes/${id}`}>
                <S.Image>
                        <img src={capa} alt="" />
                        <span>{tipo}</span>
                </S.Image>
            </Link>
            <S.Container>
                <S.SubContainer>
                    <h2>{titulo}</h2>
                    <S.Rate>
                        <span>{avaliacao}</span>
                        <div>
                            <img src={starIcon} alt=""/>
                        </div>
                    </S.Rate>
                </S.SubContainer>
                <p>{descricao}</p>
                <Link to={`/restaurantes/${id}`}>Saiba mais</Link>
            </S.Container>
        </S.Restaurant>
    );
}

export default RestaurantLink;