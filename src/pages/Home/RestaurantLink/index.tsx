import { IRestaurant } from '../../../interfaces/IRestaurant';
import * as S from './styles';
import starIcon from '../../../assets/icons/star.svg';
import { Link } from 'react-router-dom';

interface Props {
    restaurant: IRestaurant;
}

function RestaurantLink(props: Props) {
    const { name, rate, description, bgImage, about } = props.restaurant;

    return (
        <S.Restaurant>
            <Link to='/restaurant'>
                <S.Image src={bgImage}>
                    <ul>
                        {about.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </S.Image>
            </Link>
            <S.Container>
                <S.SubContainer>
                    <h2>{name}</h2>
                    <S.Rate>
                        <span>{rate}</span>
                        <div>
                            <img src={starIcon} />
                        </div>
                    </S.Rate>
                </S.SubContainer>
                <S.P>{description}</S.P>
                <Link to='/restaurant'>Saiba mais</Link>
            </S.Container>
        </S.Restaurant>
    );
}

export default RestaurantLink;