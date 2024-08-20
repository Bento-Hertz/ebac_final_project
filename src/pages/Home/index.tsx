import * as S from './styles';
import restaurants from '../../data.json';
import RestaurantLink from './RestaurantLink';

function Home() {

    return (
        <S.Home>
            {restaurants.map((restaurant, index) => (
                <RestaurantLink 
                    key={index}
                    restaurant={restaurant}
                />
            ))}
        </S.Home>
    );
}

export default Home;