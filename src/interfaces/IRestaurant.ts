import { IDish } from './IDish';

export interface IRestaurant {
    name: string;
    rate: string;
    description: string;
    bgImage: string;
    about: string[];
    dishes: IDish[];
}