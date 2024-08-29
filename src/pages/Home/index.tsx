import * as S from './styles';
import RestaurantLink from './RestaurantLink';
import { useEffect, useState } from 'react';
import { IRestaurant } from 'interfaces/IRestaurant';

function Home() {

    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const restaurants = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then((res) => res.json())
                setRestaurants(restaurants);
            }
            catch(err) {
                alert(err);
            }
        }
        getRestaurants();
    }, []);

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