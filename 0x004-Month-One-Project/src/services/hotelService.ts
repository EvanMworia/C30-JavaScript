import { HotelDTO, IhotelDTO, IhotelStructure } from '../models/hotelModel';

export class HotelService {
    private readonly url = 'http://localhost:3003/hotel/';

    //Create Hotel
    async createNewHotel(hotelDetails: IhotelDTO): Promise<IhotelStructure> {
        try {
            let newHotel = new HotelDTO(hotelDetails.name, hotelDetails.location, hotelDetails.rating);
            const response = await fetch(this.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newHotel),
            });
            if (!response.ok) {
                throw new Error(`HTTP Request Error, ${response.status}`);
            }
            const registeredHotelDetails = await response.json();
            return registeredHotelDetails;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //Read Hotel
    async getAllHotels(): Promise<IhotelDTO[]> {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`HTTP Request Error, ${response.status}`);
            }
            const listOfHotels = await response.json();
            return listOfHotels;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //Read specific hotel
    async getHotelById(id: string): Promise<IhotelDTO> {
        try {
            const response = await fetch(`${this.url}+${id}`);
            if (!response.ok) {
                throw new Error(`HTTP Request Error, ${response.status}`);
            }
            const hotelFound = await response.json();
            return hotelFound;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //Update Hotel details
    async updateHotel(hotelDetails: IhotelStructure): Promise<IhotelStructure> {
        try {
            let newHotelDetails = new HotelDTO(hotelDetails.name, hotelDetails.location, hotelDetails.rating);
            const response = await fetch(`${this.url}+${hotelDetails.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newHotelDetails),
            });
            if (!response.ok) {
                throw new Error(`HTTP Request Error, ${response.status}`);
            }
            const updatedHotelDetails = await response.json();
            return updatedHotelDetails;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //Delete Hotel details
    async deleteTour(id: string): Promise<void> {
        try {
            await fetch(`${this.url}+${id}`, { method: 'DELETE' });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
