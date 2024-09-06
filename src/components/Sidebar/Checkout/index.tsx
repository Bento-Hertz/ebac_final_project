import { useEffect, useState } from 'react';
import Input from '../../Input';
import * as S from './styles';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentSidebarSection } from 'store/reducers/currentSidebarSection';
import { RootReducer } from 'store';
import { IDish } from 'interfaces/IDish';
import { updateStatusMessage } from 'store/reducers/statusMessage';
import { toggleSidebar } from 'store/reducers/sidebarToggle';
import { cleanCart } from 'store/reducers/cart';

//Pra adicionar uma verificação mais rigorosa e realista aos campos de nome e número de cartão é só trocar os REGEX abaixo pelos que estão comentados (:
const NAMEINCARD_REGEX = /^[A-Za-z\s]{3,}$/;
// const NAMEINCARD_REGEX = /^[A-Z]{1}[a-z]{1,}[\s]{1}[A-Z]{1}[a-z]{1,}([\s]{1}[A-Z]{1}[a-z]{1,})*$/
const CARDNUMBER_REGEX = /^[0-9]{16}$/;
// const CARDNUMBER_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const CVV_REGEX = /^[0-9]{3}$/;
const EXPIREMONTH_REGEX = /^[0-9]{2}$/;
const EXPIREYEAR_REGEX = /^[0-9]{4}$/;

export type CheckoutSectionType = 'delivery' | 'payment';

interface ICartItem {
    id: number;
    price: number;
}

const convertIDishListToICartItemList = (dishList: IDish[]): ICartItem[] => {
    const cartItemList: ICartItem[] = dishList.map((dish) => {
        return { id: dish.id, price: dish.preco };
    })
    return cartItemList;
}

const eraseInsertedMaskValues = (inputValue: string): string => {
    let newInputValue = inputValue.replaceAll(' ', '');
    newInputValue = newInputValue.replaceAll('-', '');
    return newInputValue;
}

function Checkout() {

    //resolvi não usar o formik e o yup por preferências pessoais
    const dispatch = useDispatch();
    const cart = useSelector((state: RootReducer) => state.cart);

    const [errMsg, setErrMsg] = useState('');
    const [checkoutSection, setCheckoutSection] = useState<CheckoutSectionType>('delivery');
    const [checkoutTitle, setCheckoutTitle] = useState<string>(''); 
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [complement, setComplement] = useState<string>('');
    
    const [cep, setCep] = useState<string>('');
    const [validCep, setValidCep] = useState<boolean>(false);
    const [cepFocus, setCepFocus] = useState<boolean>(false);

    const [nameInCard, setNameInCard] = useState<string>('');
    const [validNameInCard, setValidNameInCard] = useState<boolean>(false);
    const [nameInCardFocus, setNameInCardFocus] = useState<boolean>(false);
    
    const [cardNumber, setCardNumber] = useState<string>('');   
    const [validCardNumber, setValidCardNumber] = useState<boolean>(false);
    const [cardNumberFocus, setCardNumberFocus] = useState<boolean>(false);
    
    const [cvv, setCvv] = useState<string>('');   
    const [validCvv, setValidCvv] = useState<boolean>(false);
    const [cvvFocus, setCvvFocus] = useState<boolean>(false);
    
    const [expireMonth, setExpireMonth] = useState<string>('');   
    const [validExpireMonth, setValidExpireMonth] = useState<boolean>(false);
    const [expireMonthFocus, setExpireMonthFocus] = useState<boolean>(false);
    
    const [expireYear, setExpireYear] = useState<string>('');   
    const [validExpireYear, setValidExpireYear] = useState<boolean>(false);
    const [expireYearFocus, setExpireYearFocus] = useState<boolean>(false);

    useEffect(() => {
        if(cepFocus)
            return;

        const searchCep = async () => {
            try {
                const data = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`).then((res) => res.json());

                if(data.address.includes('undefined'))
                    setValidCep(false);
                else {
                    setAddress(data.address + ', ' + data.district);
                    setCity(data.city);
                    setValidCep(true);
                }
            }
            catch(err) {
                setValidCep(false);
            }
        }

        if(cep.length === 8)
            searchCep();
        else
            setValidCep(false);
    }, [cep, cepFocus, address, city]);

    useEffect(() => {
        if(Number(expireMonth) <= 12 && Number(expireMonth) >= 1)
            setValidExpireMonth(EXPIREMONTH_REGEX.test(expireMonth));
        else
            setValidExpireMonth(false);
        
        if(Number(expireYear) >= 2024 && Number(expireYear) < 2100)
            setValidExpireYear(EXPIREYEAR_REGEX.test(expireYear));
        else
            setValidExpireYear(false);

        setValidCardNumber(CARDNUMBER_REGEX.test(cardNumber));
        setValidNameInCard(NAMEINCARD_REGEX.test(nameInCard));
        setValidCvv(CVV_REGEX.test(cvv));
    }, [nameInCard, cardNumber, cvv, expireMonth, expireYear])

    useEffect(() => {
        setErrMsg('');
    }, [name, address, city, cep, number, complement, nameInCard, cardNumber, cvv, expireMonth, expireYear]);

    useEffect(() => {
        if(checkoutSection === 'delivery')
            setCheckoutTitle('Entrega');
        else
            setCheckoutTitle(`Pagamento - Valor a pagar R$ ${cart.totalPrice}`);
    }, [checkoutSection, cart]);

    const onClickingToContinue = () => {
        const allInputsFilled = name && number && address && city && cep;
        if(!allInputsFilled) {
            setErrMsg('Todos os campos obrigatórios devem estar preenchidos!');
            return;
        }
        if(validCep) {
            setCheckoutSection('payment');
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const allPaymentInputsAreValid = validNameInCard && validCardNumber && validCvv && validExpireMonth && validExpireYear;
        if(allPaymentInputsAreValid) {
            const cartItems = convertIDishListToICartItemList(cart.items);

            fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    products: cartItems,
                    delivery: {
                        receiver: name,
                        address: {
                            description: address,
                            city: city,
                            zipCode: cep,
                            number: number,
                            complement: complement
                        }
                    },
                    payment: {
                        card: {
                            name: nameInCard,
                            number: cardNumber,
                            code: cvv,
                            expires: {
                                month: expireMonth,
                                year: expireYear
                            }
                        }
                    }
                })
            })
            .then((response) => {
                dispatch(cleanCart());
                setSubmitSuccess(true);
                response.json().then((res) => {
                    setCheckoutTitle(`Pedido realizado - ${res.orderId}`);
                });
            })
            .catch((err) => {
                dispatch(updateStatusMessage({isActive: true, type: 'error', message: 'Houve algum erro ao processar o seu pedido. Tente novamente mais tarde.'}));
            });
        }
    }

    return (
        <>
            <h2>{checkoutTitle}</h2>
            <S.ErrMsg $isActive={errMsg.length > 0}>{errMsg}</S.ErrMsg>
            <S.Form onSubmit={handleSubmit}>
                {checkoutSection === 'delivery' ? 
                    <S.Delivery>
                        <S.InputGroup>
                            <Input 
                                label='Quem irá receber'
                                id='name'
                                value={name}
                                onChangingValue={(value) => setName(value)}
                                required
                            />
                            <Input 
                                label='Endereço'
                                id='address'
                                value={address}
                                onChangingValue={(value) => setAddress(value)}
                                required
                                disabled={validCep}
                            />
                            <Input 
                                label='Cidade'
                                id='city'
                                value={city}
                                onChangingValue={(value) => setCity(value)}
                                required
                                disabled={validCep}
                            />
                            <S.LineWrap>
                                <Input 
                                    label='CEP'
                                    id='cep'
                                    value={cep}
                                    onChangingValue={(value) => setCep(eraseInsertedMaskValues(value))}
                                    required
                                    isInputInvalid={!validCep && !cepFocus && cep.length > 0}
                                    inputErrMsg='CEP inválido!'
                                    placeholder='_____-___'
                                    mask='99999-999'
                                    onInputFocus={() => setCepFocus(true)}
                                    onInputBlur={() => setCepFocus(false)}
                                />
                                <Input 
                                    label='Número'
                                    id='number'
                                    value={number}
                                    onChangingValue={(value) => setNumber(value)}
                                    required
                                />
                            </S.LineWrap>
                            <Input 
                                label='Complemento (opcional)'
                                id='complement'
                                value={complement}
                                onChangingValue={(value) => setComplement(value)}
                            />
                        </S.InputGroup>
                        <Button type='button' onClickEvent={onClickingToContinue}>Continuar com o pagamento</Button>
                        <Button type='button' onClickEvent={() => dispatch(changeCurrentSidebarSection('cart'))}>Voltar para o carrinho</Button>
                    </S.Delivery>
                : <></>}

                {checkoutSection === 'payment' && !submitSuccess ? 
                    <S.Payment>
                        <S.InputGroup>
                            <Input 
                                label='Nome no cartão'
                                id='nameInCard'
                                value={nameInCard}
                                onChangingValue={(value) => setNameInCard(value)}
                                required
                                isInputInvalid={!validNameInCard && !nameInCardFocus && nameInCard.length > 0}
                                onInputFocus={() => setNameInCardFocus(true)}
                                onInputBlur={() => setNameInCardFocus(false)}
                                inputErrMsg='nome de titular inválido'
                                autoComplete='off'
                            />
                            <S.LineWrap $gridColumnConfig='1.25fr 0.5fr'>
                                <Input 
                                    label='Número do cartão'
                                    id='cardNumber'
                                    value={cardNumber}
                                    onChangingValue={(value) => setCardNumber(eraseInsertedMaskValues(value))}
                                    required
                                    isInputInvalid={!validCardNumber && !cardNumberFocus && cardNumber.length > 0}
                                    onInputFocus={() => setCardNumberFocus(true)}
                                    onInputBlur={() => setCardNumberFocus(false)}
                                    inputErrMsg='número de cartão inválido'
                                    placeholder='____ ____ ____ ____'
                                    mask='9999 9999 9999 9999'
                                    autoComplete='off'
                                />
                                <Input 
                                    label='CVV'
                                    id='cvv'
                                    value={cvv}
                                    onChangingValue={(value) => setCvv(value)}
                                    required
                                    isInputInvalid={!validCvv && !cvvFocus && cvv.length > 0}
                                    onInputFocus={() => setCvvFocus(true)}
                                    onInputBlur={() => setCvvFocus(false)}
                                    inputErrMsg='CVV inválido'
                                    placeholder='___'
                                    mask='999'
                                    autoComplete='off'
                                />
                            </S.LineWrap>
                            <S.LineWrap>
                                <Input 
                                    label='Mês de vencimento'
                                    id='expireMonth'
                                    value={expireMonth}
                                    onChangingValue={(value) => setExpireMonth(value)}
                                    required
                                    isInputInvalid={!validExpireMonth && !expireMonthFocus && expireMonth.length > 0}
                                    onInputFocus={() => setExpireMonthFocus(true)}
                                    onInputBlur={() => setExpireMonthFocus(false)}
                                    inputErrMsg='selecione um mês de vencimento válido'
                                    placeholder='__'
                                    mask='99'
                                    autoComplete='off'
                                />
                                <Input 
                                    label='Ano de vencimento'
                                    id='expireYear'
                                    value={expireYear}
                                    onChangingValue={(value) => setExpireYear(value)}
                                    required
                                    isInputInvalid={!validExpireYear && !expireYearFocus && expireYear.length > 0}
                                    onInputFocus={() => setExpireYearFocus(true)}
                                    onInputBlur={() => setExpireYearFocus(false)}
                                    inputErrMsg='selecione um ano de vencimento válido'
                                    placeholder='____'
                                    mask='9999'
                                    autoComplete='off'
                                />
                            </S.LineWrap>
                        </S.InputGroup>
                        <Button type='submit'>Finalizar Pagamento</Button>
                        <Button type='button' onClickEvent={() => setCheckoutSection('delivery')}>Voltar para a edição de endereço</Button>
                    </S.Payment>
                : <></>}

                {submitSuccess ? 
                    <S.SubmitSuccessMsg>
                        <p>
                            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.<br/><br/>
                            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.<br/><br/> 
                            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br/><br/>
                            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                        </p>
                        <Button type='button' onClickEvent={() => dispatch(toggleSidebar(false))}>Concluir</Button>
                    </S.SubmitSuccessMsg>
                : <></>}
            </S.Form>
        </>
    );
}

export default Checkout;