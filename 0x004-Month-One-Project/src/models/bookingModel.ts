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

export class BookingDTO implements IbookingDTO {
    user: IuserStructure;
    tour: ItourStructure;
    hotel: IhotelStructure;
    bookingDate: Date;
    constructor(user: IuserStructure, tour: ItourStructure, hotel: IhotelStructure, bookingDate: Date) {
        this.user = user;
        this.tour = tour;
        this.hotel = hotel;
        this.bookingDate = bookingDate;
    }
}

export class BookingStructure implements IbookingStructure {
    id: string;
    user: IuserStructure;
    tour: ItourStructure;
    hotel: IhotelStructure;
    bookingDate: Date;
    constructor(id: string, user: IuserStructure, tour: ItourStructure, hotel: IhotelStructure, bookingDate: Date) {
        this.id = id;
        this.user = user;
        this.tour = tour;
        this.hotel = hotel;
        this.bookingDate = bookingDate;
    }
}
