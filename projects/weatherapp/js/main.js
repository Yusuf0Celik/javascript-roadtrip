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
console.log(inputBtn);

document.addEventListener('DOMContentLoaded', getAPI());
document.addEventListener('DOMContentLoaded', loadContent());
inputBtn.addEventListener('click', () => {
  getAPI();
  loadContent();
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
  console.log('yes');
  
  const API = fetch(`https://api.weatherapi.com/v1/current.json?key=2d3df043ce0b46cb8da112702222506&q=${input.value}`, options);
  const jsonAPI = await API.then(response => response.json())
  console.log(jsonAPI);
  loadContent(jsonAPI)
}


function loadContent(jsonAPI) {
  time.textContent = jsonAPI.location.localtime;
  // Create temperature icon
  const weatherIconImg = document.createElement('img');
  weatherIconImg.src = jsonAPI.current.condition.icon;
  weatherIconImg.alt = jsonAPI.current.condition.text;
  // Create celsius title
  const celsiusH1 = document.createElement('h1');
  celsiusH1.innerHTML = `${jsonAPI.current.temp_c}<sup>o</sup>C`;
  // Create country title
  const countryH3 = document.createElement('h3');
  countryH3.textContent = jsonAPI.location.country;
  // Create country title
  const regionh4 = document.createElement('h5');
  regionh4.textContent = jsonAPI.location.region;
  // Create wind-force
  const windForceSpan = document.createElement('span');
  windForceSpan.textContent = `${jsonAPI.current.wind_kph}km p/h`;
  // Create wind-direction
  const windDirectionSpan = document.createElement('span');
  windDirectionSpan.textContent = jsonAPI.current.wind_dir;
  // Create wind-humidity
  const windHumiditySpan = document.createElement('span');
  windHumiditySpan.textContent = `${jsonAPI.current.humidity}%`;
  // Append everything
  weatherIcon.append(weatherIconImg);
  celsius.append(celsiusH1);
  country.append(countryH3);
  region.append(regionh4);
  windForce.append(windForceSpan);
  windDirection.append(windDirectionSpan);
  windHumidity.append(windHumiditySpan);
}