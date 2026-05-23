const container = document.querySelector('#spotlight-container');
const url = 'data/members.json';

async function getSpotlights() {
    try {
    const response = await fetch(url);
    const data = await response.json();

    displaySpotlights(data.members);
    } catch (error) {
        console.log("Error loading spotlights:", error);
    }
}

getSpotlights();

function displaySpotlights(members) {
    container.innerHTML = "";

    const filtered = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    const random = filtered.sort(() => 0.5 - Math.random());

    const selected = random.slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement('section');

        card.innerHTML = `
            <h3>${member.name}</h3>
            
            <div class="spot-row">
                <img src="images/${member.image}" alt="${member.name}">

                <div class="spot-info">
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p><strong>${member.membership === 3 ? 'Gold' : 'Silver'}</strong></p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}