const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const email = params.get("email");
const message = params.get("message");

const submittedInfo = document.querySelector("#submitted-info");

submittedInfo.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    `;