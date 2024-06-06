import { IhotelStructure } from './hotelModel';
import { ItourStructure } from './tourModel';
import { IuserStructure } from './userModels';

export interface IbookingStructure {
    id: string;
    user: IuserStructure;
    tour: ItourStructure;
    hotel: IhotelStructure;
    bookingDate: Date;
}

export interface IbookingDTO {
    user: IuserStructure;
    tour: ItourStructure;
    hotel: IhotelStructure;
    bookingDate: Date;
}
