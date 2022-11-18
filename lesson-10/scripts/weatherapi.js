// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#currently');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const apiURL = 
    'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=81f8043dc05be8824a14c93c95981048';

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
    let iconCap = `Icon of current weather condition at Fairbanks which is ${desc}`;
    caption.textContent = iconCap;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = iconCap;
  }
  
