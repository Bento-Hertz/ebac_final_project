import styled from 'styled-components';
import { colors } from '../../styles';

export const Footer = styled.footer`
    padding: 64px 0;

    > * {
        margin: 0 auto;
    }
`;

export const SocialMedia = styled.ul`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 32px 0 80px;

    li {
        width: 24px;
    }
`;

export const AboutUs = styled.p`
    font-size: 10px;
    color: ${colors.pink};
    text-align: center;
    max-width: 480px;
`