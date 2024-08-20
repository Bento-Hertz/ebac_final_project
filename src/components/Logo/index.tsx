import * as S from './styles';
import logoImage from '../../assets/logo.png';

function Logo() {
    return (
        <S.Logo>
            <img src={logoImage} alt="logo" />
        </S.Logo>
    );
}

export default Logo;