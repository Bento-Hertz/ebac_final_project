import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from 'store';
import { cleanStatusMessage } from 'store/reducers/statusMessage';
import closeIcon from 'assets/icons/close.svg';
import * as S from './styles';

function StatusMessage() {
    const dispatch = useDispatch();

    const errRef = useRef<HTMLParagraphElement | null>(null);
    const statusMessage = useSelector((state: RootReducer) => state.statusMessage);

    useEffect(() => {
        if(statusMessage.isActive) {
            if(statusMessage.type === 'error') {
                errRef.current?.focus();
            }
            setTimeout(() => {
                errRef.current?.blur();
                dispatch(cleanStatusMessage());
            }, 5000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [statusMessage]);

    return (
        <S.StatusMessage
            $type={statusMessage.type}
            $isActive={statusMessage.isActive}
            ref={errRef} 
            aria-live='assertive'
        >
            {statusMessage.message}
            <S.CloseBtn onClick={() => dispatch(cleanStatusMessage())}>
                <img src={closeIcon} alt="close" />
            </S.CloseBtn>
        </S.StatusMessage >
    );
}

export default StatusMessage;