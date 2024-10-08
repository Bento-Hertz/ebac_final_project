import styled from 'styled-components';
import { colors } from 'styles';

interface Props {
    $type: string;
    $isActive: boolean;
}

export const StatusMessage = styled.p<Props>`
    background-color: ${(props) => props.$type === 'error' ? colors.red : colors.green};
    color: ${colors.white};
    position: fixed;
    left: ${(props) => props.$isActive ? '0' : '-9999px'};
    top: 0;
    width: 100%;
    padding: 16px;
    text-align: center;
    z-index: 999;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
`;