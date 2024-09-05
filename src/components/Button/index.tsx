import * as S from './styles';

interface Props {
    children: string;
    type: 'button' | 'submit';
    onClickEvent?: () => void;
}

function Button({children, type, onClickEvent}: Props) {
    return (
        <S.Button type={type} onClick={onClickEvent}>{children}</S.Button>
    );
}

export default Button;