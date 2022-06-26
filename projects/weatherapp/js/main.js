console.log("main.js loaded");

const time = document.querySelector('.time');
const input = document.querySelector('.input');
const inputBtn = document.querySelector('.input-btn');
const weatherIcon = document.querySelector('.weather-icon');
const celsius = document.querySelector('.celsius');
const country = document.querySelector('.country');
const region = document.querySelector('.region');
const windForce = document.querySelector('.wind-force');
const windDirection = document.querySelector('.wind-direction');
const windHumidity = document.querySelector('.humidity');
const table = document.querySelector('.table');

document.addEventListener('DOMContentLoaded', getAPI());
inputBtn.addEventListener('click', getAPI())
input.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    getAPI()
  }
})

async function getAPI() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  };
  
  if (input.value == '') {
    input.value = 'Netherlands';
  }
  
  const API = fetch(`https://api.weatherapi.com/v1/current.json?key=2d3df043ce0b46cb8da112702222506&q=${input.value}`, options);
  const jsonAPI = await API.then(response => response.json())
  
  loadContent();
  function loadContent() {
    time.textContent = jsonAPI.location.localtime;
    // Create temperature icon
    weatherIcon.firstChild.src = jsonAPI.current.condition.icon;
    weatherIcon.firstChild.alt = jsonAPI.current.condition.text;
    // Create celsius title
    celsius.firstChild.innerHTML = `${jsonAPI.current.temp_c}<sup>o</sup>C`;
    // Create country title
    country.firstChild.textContent = jsonAPI.location.country;
    // Create country title
    region.firstChild.textContent = jsonAPI.location.region;
    // Create wind-force
    windForce.lastChild.textContent = `${jsonAPI.current.wind_kph}km p/h`;
    // Create wind-direction
    windDirection.lastChild.textContent = jsonAPI.current.wind_dir;
    // Create wind-humidity
    windHumidity.lastChild.textContent = `${jsonAPI.current.humidity}%`;
    // Append everything
  }
}

function toggleTemp() {
  
}