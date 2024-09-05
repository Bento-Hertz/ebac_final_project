import styled from 'styled-components';
import { colors } from 'styles';

interface Props {
    $isInputInvalid: boolean;
}

export const Container = styled.div<Props>`
    * {
        margin-bottom: 8px;
    }

    input {
        border: ${(props) => props.$isInputInvalid ? `2px solid ${colors.red}` : `none`};
        height: 32px;
        width: 100%;
        color: ${colors.gray};
        background-color: ${colors.beige};
        padding: 0 8px;
    }

    input:disabled {
        background-color: ${colors.darkerBeige};
        color: ${colors.black};
    }

    p {
        color: ${colors.white};
        background-color: ${colors.red};
        padding: 8px;
        border-radius: 8px;
    }
`;

export const Label = styled.label`
    display: block;
`;