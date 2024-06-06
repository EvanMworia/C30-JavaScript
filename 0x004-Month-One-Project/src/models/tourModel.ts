export interface ItourStructure {
    id: string;
    name: string;
    destination: string;
    description: string;
    price: number;
}

export interface ItourDTO {
    name: string;
    destination: string;
    description: string;
    price: number;
}

export class TourDTO implements ItourDTO {
    name: string;
    destination: string;
    description: string;
    price: number;

    constructor(name: string, destination: string, description: string, price: number) {
        this.name = name;
        this.destination = destination;
        this.description = description;
        this.price = price;
    }
}

export class TourStructue implements ItourStructure {
    id: string;
    name: string;
    destination: string;
    description: string;
    price: number;

    constructor(id: string, name: string, destination: string, description: string, price: number) {
        this.id = id;
        this.name = name;
        this.destination = destination;
        this.description = description;
        this.price = price;
    }
}
