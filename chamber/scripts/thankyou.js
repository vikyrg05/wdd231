const params = new URLSearchParams(window.location.search);

document.getElementById("first").textContent = params.get("first");
document.getElementById("last").textContent = params.get("last");
document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("business").textContent = params.get("business");

const rawDate = params.get("timestamp");

if (rawDate) {
    const date = new Date(rawDate);
    document.getElementById("timestamp").textContent = date.toLocaleString();
}