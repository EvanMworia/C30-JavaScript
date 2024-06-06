import { ItourDTO, ItourStructure, TourDTO } from '../models/tourModel';

export class TourService {
    private readonly url = '';

    //addNewTour
    async createTour(tourDetails: ItourDTO): Promise<ItourStructure> {
        try {
            const newTour = new TourDTO(
                tourDetails.name,
                tourDetails.destination,
                tourDetails.description,
                tourDetails.price
            );
            const response = await fetch(this.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTour),
            });
            if (!response.ok) {
                throw new Error(`Something went wrong, HTTP ERROR: ${response.status}`);
            }
            const newlyCreatedTour = await response.json();
            return newlyCreatedTour;
        } catch (error) {
            console.error(`Unexpected error occured while attempting to perfom your request: ${error}`);
            throw error;
        }
    }
    //getAllTours
    async getAllTours(): Promise<ItourDTO[]> {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`HTTP error, : ${response.status}`);
            }
            const listOfTours = await response.json();
            return listOfTours;
        } catch (error) {
            console.error(`Something went wrong: ${error}`);
            throw error;
        }
    }
    //getSpecificTour
    async getTourById(id: string): Promise<ItourDTO> {
        try {
            const response = await fetch(`${this.url}+${id}`);
            if (!response.ok) {
                throw new Error(`HTTP request error: ${response.status}`);
            }
            const foundTourDetails = await response.json();
            return foundTourDetails;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //updateTourInformation
    async updateTourDetails(newTourDetails: ItourStructure): Promise<ItourStructure> {
        try {
            const editedTourDetails = new TourDTO(
                newTourDetails.name,
                newTourDetails.destination,
                newTourDetails.description,
                newTourDetails.price
            );
            const response = await fetch(`${this.url}+${newTourDetails.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedTourDetails),
            });

            if (!response.ok) {
                throw new Error(`HTTP request Error ${response.status}`);
            }
            const updatedTourDetails = await response.json();
            return updatedTourDetails;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    //DeleteTour
    async deleteTour(id: string): Promise<void> {
        try {
            await fetch(`${this.url}+${id}`, { method: 'DELETE' });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
