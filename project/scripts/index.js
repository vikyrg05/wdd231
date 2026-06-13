const placesContainer = document.querySelector("#places-container");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector("#modal-text");
const closeModal = document.querySelector("#close-modal");

async function getPlaces() {
    try {
        const response = await fetch("data/places.json");
        if (!response.ok) {
            throw new Error("Failed to load places data");
        }

        const places = await response.json();

        const featuredPlaces = places.slice(0, 3);
        displayPlaces(featuredPlaces);

        localStorage.setItem("placesCount", places.length);

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

        card.addEventListener("click", () => {
            modalTitle.textContent = place.name;
            modalText.textContent = place.description;

            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");

            localStorage.setItem("lastPlaceViewed", place.name);
        });
    });
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");


});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }
});

const lastViewed = document.querySelector("#last-viewed");
const saved = localStorage.getItem("lastPlaceViewed");

if (saved) {
    lastViewed.textContent = "Last place viewed: " + saved;
}