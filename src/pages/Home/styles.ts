import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const Home = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    padding: 80px 0;

    @media(max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`