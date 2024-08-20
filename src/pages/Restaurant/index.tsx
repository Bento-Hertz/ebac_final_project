import { IRestaurant } from '../../interfaces/IRestaurant';
import Dish from './Dish';
import * as S from './styles';
import restaurants from 'data.json';

function Restaurant() {
    const { name, about, bgImage, dishes }: IRestaurant = restaurants[1];

    return (
        <S.Restaurant>
            <S.Hero className='container overlay' imageSrc={bgImage}>
                <ul>
                    {about.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h1>{name}</h1>
            </S.Hero>
            <S.Dishes>
                {dishes.map((dish, index) => (
                    <Dish 
                        key={index}
                        dish={dish}
                    />
                ))}
            </S.Dishes>
        </S.Restaurant>
    );
}

export default Restaurant;