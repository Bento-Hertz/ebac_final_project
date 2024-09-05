import { GridLoader } from 'react-spinners';
import * as S from './styles';

interface Props {
    color: string;
}

function ItemLoader({ color }: Props) {

    return (
        <S.Container>
            <GridLoader color={color} />
        </S.Container>
    );
}

export default ItemLoader;