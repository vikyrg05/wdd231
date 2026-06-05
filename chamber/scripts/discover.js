import { places } from "../data/discover.mjs";

const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysBetween = Math.floor(
        (currentVisit - Number(lastVisit)) / 86400000
    );

    if (daysBetween < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);

const cardsContainer = document.querySelector("#discover-cards");

places.forEach(place => {
    const card = document.createElement("section");

    card.classList.add("discover-card");

    card.innerHTML = `
        <h2 class="card-title">${place.name}</h2>
        
        <figure class="card-image">
            <img src="${place.image}"  alt="${place.name}" loading="lazy" width="300" hight="200">
        </figure>

        <address class="card-address">${place.address}</address>
        
        <p class="card-description">${place.description}</p>

        <button class="card-button">Learn More</button>
        `;

    cardsContainer.appendChild(card);
});