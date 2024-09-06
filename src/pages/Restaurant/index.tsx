import { useEffect, useState } from 'react';
import { IRestaurant } from '../../interfaces/IRestaurant';
import Dish from './Dish';
import * as S from './styles';
import DishModal from './DishModal';
import { useParams } from 'react-router-dom';
import { IDish } from 'interfaces/IDish';
import PageLoader from 'components/Loaders/PageLoader';
import { useDispatch } from 'react-redux';
import { updateStatusMessage } from 'store/reducers/statusMessage';

function Restaurant() {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const [restaurant, setRestaurant] = useState<IRestaurant>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {

        const getRestaurant = async () => {
            try {
                setIsLoading(true);
                const restaurant: IRestaurant = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then((res) => res.json())
                setRestaurant(restaurant);
            }
            catch(err) {
                dispatch(updateStatusMessage({
                    type:'error', 
                    message:'Não foi possível carregar os produtos. Tente novamente mais tarde', 
                    isActive:true
                }));
            }
            finally {
                setIsLoading(false)
            }
        }
        getRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const [currentModal, setCurrentModal] = useState<IDish>();
    const [isModalActive, setIsModalActive] = useState<boolean>(false);

    function invokeModal(dishId: number) {
        const dishModal = restaurant?.cardapio.find((item) => item.id === dishId);
        setCurrentModal(dishModal);
        setIsModalActive(true);
    }

    if(isLoading) {
        return <PageLoader />
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
                {restaurant ?
                    <S.Hero className='container' src={restaurant.capa}>
                        <S.Overlay />
                        <span>{restaurant?.tipo}</span>
                        <h1>{restaurant?.titulo}</h1>
                    </S.Hero>
                :
                    <></>}
                <S.Dishes>
                    {restaurant?.cardapio.map((dish) => (
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