const placesContainer = document.querySelector("#all-places-container");

async function getPlaces() {
    try {
        const response = await fetch("data/places.json");

        if (!response.ok) {
            throw new Error("Places data not found");
        }

        const places = await response.json();
        displayPlaces(places);

    } catch (error) {
        console.error("Error loading places:", error);
    }
}

getPlaces();

function displayPlaces(places) {
    places.forEach(place => {
        const card = document.createElement("section");
        card.classList.add("place-card");
        
        card.innerHTML = `
            <h3>${place.name}</h3>
            <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
            <p class="description">${place.description}</p>
            <p><strong>Category:</strong> ${place.category}</p>
            <p><strong>Location:</strong> ${place.location}</p>
            <p><strong>Hours:</strong> ${place.hours}</p>
            <p><strong>Best Time:</strong> ${place.bestTime}</p>
        `;

        placesContainer.appendChild(card);
    });
}