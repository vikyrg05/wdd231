const forecastContainer = document.querySelector('#forecast');

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-17.39&lon=-66.16&units=metric&appid=2465cc49aae1a30caf3dcb4d1e7faa8d';

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getForecast();

function displayForecast(data) {
    forecastContainer.innerHTML = "";

    const days = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    days.forEach(day => {
        const temp = Math.round(day.main.temp);
        const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

        const li = document.createElement('li');
        li.textContent = `${date}: ${temp}°C`;

        forecastContainer.appendChild(li);
    });
}

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-17.39&lon=-66.16&units=metric&appid=2465cc49aae1a30caf3dcb4d1e7faa8d';

async function getCurrentWeather() {
    try {
        const response = await fetch(currentUrl);

        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCurrentWeather();

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}°C`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}