import { IDish } from './IDish';

export interface IRestaurant {
    id: number;
    titulo: string;
    destacado: true;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: IDish[];
}