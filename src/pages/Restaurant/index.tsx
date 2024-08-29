import { useEffect, useState } from 'react';
import { IRestaurant } from '../../interfaces/IRestaurant';
import Dish from './Dish';
import * as S from './styles';
import DishModal from './DishModal';
import { useParams } from 'react-router-dom';
import { IDish } from 'interfaces/IDish';

function Restaurant() {
    const { id } = useParams();
    
    const [restaurant, setRestaurant] = useState<IRestaurant>();

    useEffect(() => {

        const getRestaurant = async () => {
            try {
                const restaurant: IRestaurant = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json())
                setRestaurant(restaurant);
            }
            catch(err) {
                alert(err);
            }
        }
        getRestaurant();
    }, [id]);

    const [currentModal, setCurrentModal] = useState<IDish>();
    const [isModalActive, setIsModalActive] = useState<boolean>(false);

    function invokeModal(dishId: number) {
        const dishModal = restaurant?.cardapio.find((item) => item.id === dishId);
        setCurrentModal(dishModal);
        setIsModalActive(true);
    }

    if(!restaurant) {
        return <></>
    }
    return (
        <>
            {currentModal && isModalActive ? 
                <DishModal 
                    dish={currentModal} 
                    closeModal={() => setIsModalActive(false)}
                />
            :
                <></>
            }
            <S.Restaurant>
                <S.Hero className='container overlay' src={restaurant.capa}>
                    <span>{restaurant.tipo}</span>
                    <h1>{restaurant.titulo}</h1>
                </S.Hero>
                <S.Dishes>
                    {restaurant.cardapio.map((dish) => (
                        <Dish 
                            key={dish.id}
                            dish={dish}
                            openModal={(dishId) => invokeModal(dishId)}
                        />
                    ))}
                </S.Dishes>
            </S.Restaurant>
        </>
    );
}

export default Restaurant;