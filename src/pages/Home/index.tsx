import * as S from './styles';
import RestaurantLink from './RestaurantLink';
import { useEffect, useState } from 'react';
import { IRestaurant } from 'interfaces/IRestaurant';
import PageLoader from 'components/Loaders/PageLoader';
import { useDispatch } from 'react-redux';
import { updateStatusMessage } from 'store/reducers/statusMessage';

function Home() {
    const dispatch = useDispatch();

    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                setIsLoading(true);
                const restaurants = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then((res) => res.json());
                setRestaurants(restaurants);
            }
            catch(err) {
                dispatch(updateStatusMessage({
                    type:'error', 
                    message:'Não foi possível carregar os restaurantes. Tente novamente mais tarde', 
                    isActive:true
                }));
            }
            finally {
                setIsLoading(false);
            }
        }
        getRestaurants();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(isLoading) {
        return <PageLoader />
    }
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