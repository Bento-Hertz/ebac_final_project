import { IRestaurant } from '../../../interfaces/IRestaurant';
import * as S from './styles';
import starIcon from '../../../assets/icons/star.svg';
import { Link } from 'react-router-dom';
import ItemLoader from 'components/Loaders/ItemLoader';
import { colors } from 'styles';

interface Props {
    restaurant: IRestaurant;
}

function RestaurantLink(props: Props) {
    const { tipo, capa, titulo, avaliacao, descricao, id } = props.restaurant;

    return (
        <S.Restaurant>
            <Link to={`/restaurantes/${id}`}>
                <S.ImageContainer>
                    <ItemLoader color={colors.pink}/>
                    <S.Image src={capa} alt="" />
                    <S.Category>{tipo}</S.Category>
                </S.ImageContainer>
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