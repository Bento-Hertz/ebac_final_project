import { BeatLoader } from 'react-spinners';
import * as S from './styles';
import { colors } from 'styles';

function PageLoader() {
    return (
        <S.Container>
            <BeatLoader color={colors.pink}/>
        </S.Container>
    );
}

export default PageLoader;