import * as S from './styles';
import InputMask from 'react-input-mask';


interface Props {
    label: string;
    id: string;
    value: string;
    onChangingValue: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
    autoComplete?: 'on' | 'off';
    isInputInvalid?: boolean;
    inputErrMsg?: string;
    placeholder?:string;
    mask?: string;
    onInputFocus?: () => void;
    onInputBlur?: () => void;
}

function Input(props: Props) {
    const { label, id, value, onChangingValue, required=false, disabled=false, autoComplete='on', isInputInvalid=false, inputErrMsg='', placeholder='', mask='', onInputFocus, onInputBlur} = props;

    return (
        <S.Container $isInputInvalid={isInputInvalid}>
            <S.Label htmlFor={id}>{label}</S.Label>
            <InputMask
                type='text'
                id={id}
                value={value}
                onChange={(e) => onChangingValue(e.target.value)}
                required={required}
                disabled={disabled}
                aria-disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                mask={mask}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
            />
            {isInputInvalid ? 
                <p aria-live='assertive'>{inputErrMsg}</p>
            :
                <></>
            }
        </S.Container>
    );
}

export default Input;