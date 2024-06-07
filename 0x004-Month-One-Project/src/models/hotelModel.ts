export interface IhotelStructure {
    id: string;
    name: string;
    location: string;
    rating: string;
}

export interface IhotelDTO {
    name: string;
    location: string;
    rating: string;
}

export class HotelDTO implements IhotelDTO {
    name: string;
    location: string;
    rating: string;

    constructor(name: string, location: string, rating: string) {
        this.name = name;
        this.location = location;
        this.rating = rating;
    }
}

export class HotelStructure implements IhotelStructure {
    id: string;
    name: string;
    location: string;
    rating: string;

    constructor(id: string, name: string, location: string, rating: string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.rating = rating;
    }
}
