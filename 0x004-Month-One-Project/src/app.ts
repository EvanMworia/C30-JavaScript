import { TourService } from './services/tourService';

document.addEventListener('DOMContentLoaded', () => {
    const tourCardsContainer = document.getElementById('tourCards')! as HTMLDivElement;
    const tourDetailsModal = document.getElementById('tourDetailsModal')! as HTMLDivElement;
    const bookingFormModal = document.getElementById('bookingFormModal')! as HTMLDivElement;
    const closeTourDetailsBtn = tourDetailsModal.querySelector('.close')! as HTMLSpanElement;
    const closeBookingFormBtn = bookingFormModal.querySelector('.close')! as HTMLSpanElement;

    async function displayTours() {
        const _tourService = new TourService();
        const toursFound = await _tourService.getAllTours();
        toursFound.forEach((tour) => {
            const card = document.createElement('div');
            card.classList.add('tour-card');
            card.dataset.id = tour.id;
            card.innerHTML = `
            <h3>${tour.name}</h3>
            <p>Destination: ${tour.destination}</p>
            <p>Price: ${tour.price}</p>
        `;
            tourCardsContainer.appendChild(card);
        });
    }

    displayTours();
});
