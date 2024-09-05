import styled from 'styled-components';
import { breakpoints, colors } from 'styles';

interface LineWrapProp {
    $gridColumnConfig?: string;
}

interface IsErrMsgActive {
    $isActive: boolean;
}

const offset = `
    position: absolute;
    right: -9999px;
    top: 0;
`;

export const ErrMsg = styled.p<IsErrMsgActive>`
    ${(props) => !props.$isActive ? offset : ''}
    background-color: ${colors.red};
    color: ${colors.white};
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Form = styled.form`
`;

export const InputGroup = styled.div`
    margin-bottom: 16px;
`;

export const LineWrap = styled.div<LineWrapProp>`
    @media(min-width: ${breakpoints.mobile}) {
        display: grid;
        grid-template-columns: ${(props) => props.$gridColumnConfig ? props.$gridColumnConfig : '1fr 1fr'};
        gap: 32px;
    }
`;

export const Delivery = styled.div`
`;

export const Payment = styled.div`
`;

export const SubmitSuccessMsg = styled.div`
    p {
        margin-bottom: 24px;
    }
`;