import Logo from '../Logo';
import * as S from './styles';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

function Footer() {
    return (
        <div className='container bg-beige'>
            <S.Footer>
                <Logo />
                <S.SocialMedia>
                    <li>
                        <img src={facebookIcon} alt="facebook" />
                    </li>
                    <li>
                        <img src={instagramIcon} alt="instagram" />
                    </li>
                    <li>
                        <img src={twitterIcon} alt="twitter" />
                    </li>
                </S.SocialMedia>
                <S.AboutUs>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </S.AboutUs>
            </S.Footer>
        </div>
    );
}

export default Footer;