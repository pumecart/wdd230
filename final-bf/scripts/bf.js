// hamburgerBtn
function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// footer last updated
const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.querySelector('#lastupdated').innerHTML = `Last Updated ${new Date().toLocaleDateString('en-US', options)}`;

//current weather
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#currently');
const weatherIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#humidity');

const apiURL = 
    'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=81f8043dc05be8824a14c93c95981048';

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          console.log(`Response not OK ${await response.text()}`);
      }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
  }

  apiFetch();

  function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    let desc = capitalize(data.weather[0].description);
    description.textContent = desc;
    humidity.innerHTML = `${data.main.humidity}`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  }

  //3-day forecast
  const dayOneTemp = document.querySelector('#day1');
  const dayTwoTemp = document.querySelector('#day2');
  const dayThreeTemp= document.querySelector('#day3'); 

  const apitwoURL = 
    'https://pro.openweathermap.org/data/2.5/onecall?lat=33.1581&lon=-117.3506&exclude=current,hourly&appid=81f8043dc05be8824a14c93c95981048';
  


