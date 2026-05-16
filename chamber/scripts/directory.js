const year = document.querySelector('#currentyear');
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const members = document.querySelector('#members');
members.classList.add('grid');

gridBtn.addEventListener('click', () => {
    members.classList.add('grid');
    members.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    members.classList.add('list');
    members.classList.remove('grid');
});

const url = 'data/members.json';

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (membersData) => {
    members.innerHTML = '';

    membersData.forEach(member => {
        const card = document.createElement('section');

        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit WEbsite</a></p>
            <p>Membership Level: ${member.membership}</p>
        `;

        members.appendChild(card);
    });
};

getMembersData();

const navButton = document.querySelector('#nav-button');
const navMenu = document.querySelector('#nav-menu');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});